// Get token

import axios from 'axios';

export default async function handler(req, res) {
    
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

    const authOptions = {
        method: 'POST',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
          },
        data: 'grant_type=client_credentials',
    };
    
    try {
        const response = await axios(authOptions);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get access token' });
    }

}