// @use client

import { useState } from "react";

export default function MusicStyles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/r&r.jpg',
    '/vinyl.jpeg', // Asegúrate de que las rutas y los nombres de archivo están correctos.
  ];

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full bg-white py-16 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-black mb-4">Music Styles</h2>
      <p className="text-xl text-gray-700 mb-8">Explore our diverse collection of music styles.</p>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl flex justify-between items-center">
          <button onClick={prevImage} className="text-black font-bold">&#60;</button>
          <img src={images[currentIndex]} alt="Music Styles" className="w-full"/>
          <button onClick={nextImage} className="text-black font-bold">&#62;</button>
        </div>
      </div>
    </section>
  );
}
