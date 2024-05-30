'use client'

import { useState } from "react";

export default function MusicStyles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const images = [
    '/r&r.jpg',
  ];

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="Genres" className="w-full py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-black mb-8">Music Styles</h2>
      <p className="text-base text-gray-700 mb-12">Explore our diverse collection of music styles.</p>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl flex justify-between items-center">
          <button onClick={prevImage} className="text-black font-bold">&#60;</button>
          <div
            className="image-container w-full"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img src={images[currentIndex]} alt="Music Styles" className="w-full"/>
            <div className={`overlay ${hover ? 'block' : 'hidden'}`}>
              <p className="text">Rock & Roll</p>
            </div>
          </div>
          <button onClick={nextImage} className="text-black font-bold">&#62;</button>
        </div>
      </div>
    </section>
  );
}
