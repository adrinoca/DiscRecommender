import { MongoClient } from 'mongodb';

// Función para manejar el método POST
export async function POST(req) {
  try {
    // Parseamos el body de la request
    const { albumId, rating } = await req.json();

    // Verificamos que los datos sean válidos
    if (!albumId || !rating) {
      return new Response(JSON.stringify({ error: 'Album ID and rating are needed' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Conectamos al cliente MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db();
    const albumsCollection = db.collection('albums');
    const ratingsCollection = db.collection('ratings');

    try {
      // Verificar si el álbum ya existe
      let album = await albumsCollection.findOne({ _id: albumId });

      if (!album) {
        // Si el álbum no existe, crear un nuevo documento de álbum
        album = {
          _id: albumId,
          averageRating: rating,
          ratingsCount: 1,
        };
        await albumsCollection.insertOne(album);
      } else {
        // Si el álbum existe, actualizar la calificación promedio y el conteo
        album.ratingsCount += 1;
        album.averageRating = ((album.averageRating * (album.ratingsCount - 1)) + rating) / album.ratingsCount;
        await albumsCollection.updateOne(
          { _id: albumId },
          { $set: { averageRating: album.averageRating, ratingsCount: album.ratingsCount } }
        );
      }

      // Insertar nueva calificación
      await ratingsCollection.insertOne({ albumId, rating });

      // Log y respuesta de éxito
      client.close(); // Cerrar la conexión con la base de datos
      return new Response(JSON.stringify({ message: 'Rating submitted successfully' }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      client.close(); // Cerrar la conexión con la base de datos en caso de error
      return new Response(JSON.stringify({ error: 'Failed to submit rating' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error:', error.message);
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
