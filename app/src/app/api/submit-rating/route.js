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
        const albumsCollection = db.collection('albums');
        const ratingCollection = db.collection('ratings'); 

        try {
            // Check if the album already exists
            let album = await albumsCollection.findOne({ _id: albumId });

            if (!album) {
                // If the album does not exist, create a new album document
                album = {
                    _id: albumId,
                    averageRating: rating,
                    ratingsCount: 1,
                };
                await albumsCollection.insertOne(album);
            } else {
                // If the album exists, update the average rating and count 
                album.ratingsCount += 1;
                album.averageRating = 
            }
        }
            
    }
}