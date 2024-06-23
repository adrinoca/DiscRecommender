'use client';
import { useEffect, useState } from 'react';

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const storedAlbums = sessionStorage.getItem('albums');
    if (storedAlbums) {
      setAlbums(JSON.parse(storedAlbums));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-white to-blue-100 text-gray-900">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Your Selected Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
        {albums.map((album, index) => {
          const imageUrl = album.image.find(img => img.size === 'large')['#text'];
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 text-center">
              <img src={imageUrl} alt={album.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800">{album.name}</h2>
              <p className="text-lg text-gray-600">{album.artist.name}</p>
              <div className="mt-4">
                <a href={album.url} target="_blank" className="text-blue-500 hover:underline">
                  Listen on Last.fm
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
