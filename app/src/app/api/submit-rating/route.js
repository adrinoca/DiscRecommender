// Submit Rating Endpoint 

import {MongoClient} from 'mongodb';

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const { albumId, rating } = req.body; // Extract data from the body of the POST request

        if (!albumId || !rating) {
            return res.status(400).json({ error: 'Album ID and rating are nedded' }); // Verify the data is valid
        }

        const client = await MongoClient.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db = client.db();
        const collection = db.collection('ratings'); 

        try {
            // Insert the punctuation in the database
            await collection.insertOne({ albumId, rating });
            res.status(201).json({ message: 'Rating submitted succesfully' });
        } catch(error) {
            res.status(500).json({ error: 'Failed to submit rating' });
        } finally {
            client.close(); // Close the connection with the database
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}