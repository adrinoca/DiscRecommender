import Head from 'next/head';

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

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-gray-900">
      <Head>
        <title>Discover Music Based on Your Mood</title>
      </Head>
      <h1 className="text-4xl font-extrabold mb-8">Discover top-rated music based on your mood</h1>
      <p className="mb-8 text-lg">How are you feeling now?</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
        {styles.map((style, index) => (
          <div key={index} className="bg-white border border-gray-300 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
            <div className="text-3xl">{style.emoji}</div>
            <div className="mt-2 font-semibold text-gray-700">{style.label}</div>
          </div>
        ))}
      </div>
      <footer className="mt-16">
        <p className="text-gray-600">Made with 🎵 by [Your Name]</p>
      </footer>
    </div>
  );
}
