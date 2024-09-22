export const dynamic = 'force-dynamic'; // Esto es para que los datos se actualicen en tiempo real

export default async function TopAlbums() {
  // Hacer una solicitud a la API Route para obtener los álbumes
  const res = await fetch(process.env.URL + '/api/top-albums');
  const albums = await res.json();

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="w-full">
        <div className="flex items-center justify-between px-6 py-3 bg-white">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black ml-6 mr-8">Logo</div>
            <div className="flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-gray-500">Home</a>
              <a href="/top-albums" className="text-gray-700 hover:text-gray-500">Top Albums</a>
              <a href="/#Genres" className="text-gray-700 hover:text-gray-500">Genres</a>
              <a href="#" className="text-gray-700 hover:text-gray-500">More</a>
            </div>
          </div>
          <div className="flex space-x-4 mr-6">
            <button className="px-4 py-2 border border-gray-700 text-gray-700 bg-white hover:bg-gray-100">
              Sign Up
            </button>
            <button className="px-4 py-2 border border-black text-white bg-black hover:bg-gray-800">
              Log In 
            </button>
          </div>
        </div>
      </nav>

      <header className="w-full py-8 flex flex-col items-center bg-white">
        <h1 className="text-4xl font-bold mb-4 text-black">Top Albums</h1>
        <p className="text-gray-700">Albums sorted by rating, from highest to lowest.</p>
      </header>

      <section className="w-full py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {albums.map((album, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 text-center border border-gray-200 transition-transform transform hover:scale-105">
                <img src={album.imageUrl || '/placeholder.png'} alt={album.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <h2 className="text-xl font-semibold text-black mb-2">{album.name}</h2>
                <p className="text-lg text-gray-500 mb-4">{album.artist}</p>
                <p className="text-sm text-gray-500">Average Rating: {album.averageRating.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
