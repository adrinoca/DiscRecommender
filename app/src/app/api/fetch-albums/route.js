// Endpoint to handle albums requests to apotify API.

import axios from 'axios';

export async function GET(req, res) {
    // Obtain request parameters
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`); 
    const access_token = searchParams.get('access_token');
    const genresParam = searchParams.get('genres');

    // Verify that the access token and the genres are present
    if (!access_token || !genresParam) {
        return res.status(400).json({error: 'Access token and genres are required'});
    }

    // Verificar y dividir la cadena de géneros
    const genres = genresParam ? genresParam.split(',') : [];

    if (genres.length === 0) {
        return res.status(400).json({ error: 'Genres parameter must not be empty' });
    }

    // Build the search query
    const searchQuery = genres.map( genre => `genre:${genre}`).join(' OR ');

    try {
        // Make the request to the spotify API
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=album&limit=20`, {
          headers: {
            'Authorization': `Bearer ${access_token}`,
          },
        });
    
        // Send the response with the albums
        return new Response(JSON.stringify(response.data.albums.items), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        // Manejar errores de manera específica
        if (error.response) {
            // Errores específicos de la respuesta de la API de Spotify
            console.error('Error de Spotify:', error.response.data);
            return res.status(error.response.status).json({ error: error.response.data });
        } else {
            // Errores de la solicituds
            console.error('Error en la solicitud:', error.message);
            return res.status(500).json({ error: 'Failed to fetch albums' });
        }
    }
}