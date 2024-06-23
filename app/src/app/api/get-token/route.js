// Get Token

import axios from 'axios';

export async function POST(req) {
  console.log('Received request for /api/get-token');

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error('Spotify Client ID or Secret is missing');
    return new Response(JSON.stringify({ error: 'Client ID or Secret not set' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

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
    console.log('Spotify response:', response.data);
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching token:', error.message);
    if (error.response) {
      console.error('Status code:', error.response.status);
      console.error('Headers:', error.response.headers);
      console.error('Data:', error.response.data);
    }
    return new Response(JSON.stringify({ error: 'Failed to get access token' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
