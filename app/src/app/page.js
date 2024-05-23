export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <nav className="w-full bg-white">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black ml-6 mr-8">Logo</div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-500">Discover Music</a>
              <a href="#" className="text-gray-700 hover:text-gray-500">Top Albums</a>
              <a href="#" className="text-gray-700 hover:text-gray-500">Genres</a>
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

      <header className="w-full bg-white py-16 flex flex-col items-center mt-4">
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center mb-4">
          <span className="text-4xl text-white">Image</span>
        </div>
        <h1 className="text-4xl font-bold text-black mb-4">Discover Your Perfect Music Style Today</h1>
        <p className="mb-6 text-gray-700 text-center max-w-lg">
          Welcome to our website, where you can choose from 25 different music styles and explore a world of diverse albums.
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 border border-black text-white bg-black hover:bg-gray-800">
            Get Started
          </button>
          <button className="px-4 py-2 border border-gray-700 text-gray-700 bg-white hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </header>
    </main>
  );
}
