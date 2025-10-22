// This file serves as the main page (root route '/') of your Next.js application.

const HomePage = () => {
  return (

    <div className="min-h-screen bg-black text-white">

      {/* Navigation Bar */}
      <header className="py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-10 bg-black border-b border-gray-900">
        <h1 className="text-xl font-bold text-white tracking-widest">Shahmeer Shahid</h1>
        <nav className="hidden md:flex space-x-8 text-sm uppercase">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="/webdev" className="hover:text-gray-400">Web Development</a>
          <a href="/cs" className="hover:text-gray-400">Cyber Seurity</a>
          <a href="/about" className="hover:text-gray-400">About Me</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </nav>

        {/* Menu Icon SVG for Mobile */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </header>

      {/* Main Portfolio Layout (Hero Section) */}
      {/* We use pt-16 (padding top) on small screens to push content below the fixed header */}
      <main className="flex flex-col md:flex-row min-h-screen pt-16 md:pt-0">

        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 bg-black relative">
          <img
            src="/images/adeline-palmerston.jpg" // **Ensure this path is correct relative to your public directory**
            alt="Adeline Palmerston"
            className="w-full h-full object-cover opacity-90"
            // Ensure the container fills the viewport height for the layout to work on desktop
            style={{ minHeight: '100vh', '@media (min-width: 768px)': { minHeight: 'auto' } }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center">
          <div className="max-w-xl">

            {/* Title Section */}
            <h2 className="text-7xl md:text-8xl font-extrabold leading-none mb-4">
              My
            </h2>

            {/* Portfolio Title and Separator Line */}
            <div className="flex items-center space-x-4 mb-8">
              <h2 className="text-7xl md:text-8xl font-extrabold leading-none">
                Portfolio
              </h2>
              <div className="flex-grow border-t border-white"></div>
            </div>

            {/* Description Text */}
            <p className="text-sm text-gray-400 mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>

            {/* Action Buttons */}
            <div className="flex items-center space-x-6">
              <button className="bg-white text-black font-semibold py-3 px-8 text-sm uppercase transition duration-300 hover:bg-gray-200">
                Explore Now
              </button>

              <div className="flex items-center text-white cursor-pointer group">
                {/* Play Icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 p-1 rounded-full border border-white mr-2 transition duration-300 group-hover:bg-white group-hover:text-black" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm uppercase tracking-wider">Play Video</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="min-h-screen  text-white font-sans py-16 md:py-24">
        <main className="max-w-7xl mx-auto px-6 lg:px-8">

          <section className="flex flex-col md:flex-row gap-10 md:gap-16">

            {/* Left Column: Text Content (Approx 50% width on desktop) */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                {/* Main Title and Underline */}
                <h1 className="text-6xl sm:text-7xl font-extrabold mb-4">
                  Introduction
                </h1>
                <div className="w-24 border-b-4 border-white mb-10"></div>

                {/* Main Descriptive Text Block */}
                <p className="text-base text-gray-300 mb-16 leading-relaxed max-w-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                </p>
              </div>

              {/* Bottom Section: Two Columns ("About Me" and "About Portfolio") */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-700/50">
                {/* About Me Column */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo commodo
                  </p>
                </div>

                {/* About Portfolio Column */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">About Portfolio</h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Image (Approx 50% width on desktop) */}
            <div className="w-full md:w-1/2 relative min-h-[400px]">
              {/* Using a placeholder image for the interior hall/stable image */}
              <img
                src="https://placehold.co/1200x800/222222/ffffff?text=Interior+Hallway"
                alt="Interior Hallway"
                className="w-full h-full object-cover shadow-2xl"
              />
              {/* Adding a subtle dark overlay to match the image's B&W/dark feel */}
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default HomePage;