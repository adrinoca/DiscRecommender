'use client';
import { useEffect, useState } from 'react';
import axios from axios;
import "../ui/globals.css";

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const storedAlbums = sessionStorage.getItem('albums');
    if (storedAlbums) {
      setAlbums(JSON.parse(storedAlbums));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-12 text-black">Your Selected Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
        {albums.map((album, index) => {
          const imageUrl = album.image.find(img => img.size === 'extralarge')['#text'];
          return (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4 text-center border border-gray-200 transition-transform transform hover:scale-105">
              <img src={imageUrl} alt={album.name} className="w-full h-64 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold text-black mb-2">{album.name}</h2>
              <p className="text-lg text-gray-500 mb-4">{album.artist.name}</p>
              <a href={album.url} target="_blank" className="text-gray-600 hover:text-black underline">
                Listen on Last.fm
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
