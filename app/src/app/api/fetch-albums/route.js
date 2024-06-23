// Endpoint to handle albums requests to apotify API.

import axios from 'axios';

export async function GET(req, res) {
    // Obtain request parameters
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`); 
    // const access_token = searchParams.get('access_token');
    const genresParam = searchParams.get('genres');

    // Verify that the access token and the genres are present
    if (!genresParam) {
        return res.status(400).json({error: 'Genres are required'});
    }

    // Verify and split the genres chain
    const genres = genresParam ? genresParam.split(',') : [];

    if (genres.length === 0) {
        return res.status(400).json({ error: 'Genres parameter must not be empty' });
    }

    // Build the search query
    //const searchQuery = genres.map( genre => `genre:${genre}`).join(' OR ');

    try {
        const genre = genres[0]; // Last.fm solo permite buscar por un género a la vez
        const apiKey = process.env.LAST_FM_API_KEY; 

        // Realizar la solicitud a la API de Last.fm
        const response = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${encodeURIComponent(genre)}&api_key=${apiKey}&format=json&limit=200`);

        const albums = response.data.albums.album;
        const randomAlbums = [];

        // Seleccionar aleatoriamente 5 álbumes de la lista
        while (randomAlbums.length < 5 && albums.length > 0) {
            const index = Math.floor(Math.random() * albums.length);
            randomAlbums.push(albums[index]);
            albums.splice(index, 1);
        }

        console.log(randomAlbums);

        if (randomAlbums.length === 0) {
            return new Response(JSON.stringify({ error: 'No albums found for the specified genre' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Enviar la respuesta con los álbumes
        return new Response(JSON.stringify(randomAlbums), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        // Manejar errores de manera específica
        if (error.response) {
            console.error('Error de Last.fm:', error.response.data);
            return new Response(JSON.stringify({ error: error.response.data }), {
                status: error.response.status,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            console.error('Error en la solicitud:', error.message);
            return new Response(JSON.stringify({ error: 'Failed to fetch albums' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    }
}