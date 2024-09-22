import { MongoClient } from 'mongodb';

export async function GET(req) {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db();
  const albumsCollection = db.collection('albums');

  // Obtener álbumes ordenados por calificación promedio (de mayor a menor)
  const albums = await albumsCollection
    .find()
    .sort({ averageRating: -1 })
    .toArray();

  client.close();

  return new Response(JSON.stringify(albums), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
