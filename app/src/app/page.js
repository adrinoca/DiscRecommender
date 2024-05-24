export default function Home() {
  return (
    <main className="min-h-screen bg-white">
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

      <header className="w-full bg-white py-8 flex flex-col items-center">
        <div className="w-full flex justify-center mb-4 px-6">
          <img src="/bw_minimalist.jpeg" alt="Controlled Image" className="controlled-horizontal-image"/>
        </div>
        <div className="flex w-full px-6 mt-16"> 
          <div className="flex flex-1 items-center justify-center">
            <h1 className="text-5xl font-bold text-black mb-4 leading-tight">
              Discover Your Perfect<br />Music Style for Today
            </h1>
          </div>
          <div className="flex flex-col items-start flex-1 justify-center">
            <p className="mb-6 text-gray-700 max-w-lg text-left">
              Welcome to our website, where you can choose from 25 different music styles and explore a world of diverse albums.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-2 border border-black text-white bg-black hover:bg-gray-800">
                Get Started
              </button>
              <button className="px-6 py-2 border border-gray-700 text-gray-700 bg-white hover:bg-gray-100">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="w-full bg-white py-16 flex flex-col items-center">
        <div className="flex w-full px-6">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full flex items-center justify-center">
              <img src="/vinyl.jpeg" alt="Controlled Image"/>
            </div>
          </div>
          <div className="flex flex-col items-start flex-1 justify-center space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-1 bg-black"></div>
              <h2 className="text-2xl font-bold text-black">Choose from 25 styles</h2>
            </div>
            <p className="text-gray-700">Discover new albums and explore a wide range of music genres.</p>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-1 bg-black"></div>
              <h2 className="text-2xl font-bold text-black">Review and track favorites</h2>
            </div>
            <p className="text-gray-700">Share your thoughts and ratings on albums you've listened to, and easily keep track of your favorite albums.</p>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-1 bg-black"></div>
              <h2 className="text-2xl font-bold text-black">Personalized recommendations</h2>
            </div>
            <p className="text-gray-700">Receive tailored recommendations based on your music preferences and discover new albums you'll love.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
