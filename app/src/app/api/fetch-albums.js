// Endpoint to handle authentications requests to spotify. Exchange the authorization code for a token.

import axios from 'axios';

export default async function handler(req, res) {
    const { access_token } = req.query; // Obtén el token de acceso del query parameter
    const genres = req.query.genres ? req.query.genres.split(',') : [];
    const searchQueries = genres.map(genre => `genre:${genre}`).join(' OR ');

    try {
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQueries)}&type=album&limit=20`, {
            headers: {
              'Authorization': `Bearer ${access_token}`,
            },
        });
        res.status(200).json(response.data.albums.items);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch albums' });
    }

}