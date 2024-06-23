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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pastel-pink via-pastel-cream to-pastel-blue text-gray-900">
      <h1 className="text-5xl font-extrabold mb-12 text-gray-700">Your Selected Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
        {albums.map((album, index) => {
          const imageUrl = album.image.find(img => img.size === 'extralarge')['#text'];
          return (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <img src={imageUrl} alt={album.name} className="w-full h-64 object-cover rounded-lg mb-6 shadow-sm" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{album.name}</h2>
              <p className="text-lg text-gray-600 mb-4">{album.artist.name}</p>
              <div className="mt-4">
                <a href={album.url} target="_blank" className="text-pastel-blue hover:text-blue-500 underline">
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
