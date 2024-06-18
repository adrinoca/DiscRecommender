'use client';
import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';

export default function MusicStyles() {
  const styles = [
    { emoji: '😀', label: 'POP' },
    { emoji: '🤔', label: 'HIP HOP' },
    { emoji: '😔', label: 'EDM' },
    { emoji: '😂', label: 'Rock & Roll' },
    { emoji: '😢', label: 'Latin' },
    { emoji: '😌', label: 'R&B' },
    { emoji: '😎', label: 'Country' },
    { emoji: '🥰', label: 'Reggaeton' },
    { emoji: '😜', label: 'Indie' },
    { emoji: '😈', label: 'K-Pop' },
    { emoji: '😴', label: 'SLEEPY' },
    { emoji: '😡', label: 'ANGRY' },
    { emoji: '😱', label: 'FEARFUL' },
    { emoji: '😢', label: 'LONELY' },
    { emoji: '😤', label: 'TENSE' },
    { emoji: '🤓', label: 'THOUGHTFUL' },
    { emoji: '🤪', label: 'THRILL-SEEKING' },
    { emoji: '😏', label: 'PLAYFUL' },
  ];

  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const handleSelect = (index) => {
    let newSelectedIndexes = [...selectedIndexes];

    if (newSelectedIndexes.includes(index)) {
      newSelectedIndexes = newSelectedIndexes.filter(i => i !== index);
    } else {
      if (newSelectedIndexes.length === 2) {
        newSelectedIndexes.shift();
      }
      newSelectedIndexes.push(index);
    }

    setSelectedIndexes(newSelectedIndexes);
  };

  const handleSubmit = async () => {
    const selectedGenres = selectedIndexes.map(index => styles[index].label);

    // Obtain access token
    const tokenResponse = await axios.post('/api/get-token');
    console.log('Handling request for /api/get-token');
    const { access_token } = tokenResponse.data;

    // Request to optain the albums
    const albumsResponse = await axios.get(`/api/fetch-albums?access_token=${access_token}&genres=${selectedGenres.join(',')}`);
    console.log(albumsResponse.data); 
    
    // Redirect to albums page
    sessionStorage.setItem('albums', JSON.stringify(albumsResponse.data));
    window.location.href = '/albums';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-white to-blue-100 text-gray-900">
      <Head>
        <title>Discover Music Based on Your Mood</title>
      </Head>
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800">Discover top-rated music based on your favorite styles</h1>
      <p className="mb-8 text-lg text-gray-600">Which styles do you like?</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
        {styles.map((style, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl text-center shadow-md cursor-pointer transition-all duration-300 transform hover:scale-105
              ${selectedIndexes.includes(index) ? 'bg-pastel-blue border-blue-300' : 'bg-pastel-gray border-gray-200'}`}
            onClick={() => handleSelect(index)}
          >
            <div className="text-4xl">{style.emoji}</div>
            <div className="mt-2 font-semibold text-gray-800">{style.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button
          onClick={handleSubmit}
          disabled={selectedIndexes.length === 0}
          className={`px-6 py-3 rounded-full text-white transition-all duration-300 shadow-lg transform ${
            selectedIndexes.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 hover:scale-105'
          }`}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
