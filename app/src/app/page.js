import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <nav className="w-full bg-white">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="text-2xl font-bold text-black ml-4">Logo</div>
          <div className="flex items-center space-x-6 ml-4">
            <a href="#" className="text-gray-700 hover:text-gray-500">Discover Music</a>
            <a href="#" className="text-gray-700 hover:text-gray-500">Top Albums</a>
            <a href="#" className="text-gray-700 hover:text-gray-500">Genres</a>
            <a href="#" className="text-gray-700 hover:text-gray-500">More</a>
          </div>
          <div className="flex space-x-4">
            <button className="btn btn-outline text-gray-700 border-gray-700 hover:bg-gray-100">Sign Up</button>
            <button className="btn btn-primary bg-gray-700 text-white border-gray-700 hover:bg-gray-600">Learn More</button>
          </div>
        </div>
      </nav>

      <header className="w-full bg-white py-16 flex flex-col items-center">
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center mb-4">
          <span className="text-4xl text-white">Image</span>
        </div>
        <h1 className="text-4xl font-bold text-black mb-4">Discover Your Perfect Music Style Today</h1>
        <p className="mb-6 text-gray-700 text-center max-w-lg">
          Welcome to our website, where you can choose from 25 different music styles and explore a world of diverse albums.
        </p>
        <div className="flex space-x-4">
          <button className="btn btn-primary bg-gray-700 text-white border-gray-700 hover:bg-gray-600">Get Started</button>
          <button className="btn btn-outline text-gray-700 border-gray-700 hover:bg-gray-100">Learn More</button>
        </div>
      </header>
    </main>
  );
}
