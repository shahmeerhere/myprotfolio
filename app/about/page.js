// This component implements the "About Me" section design provided in the latest image.

const AboutMePage = () => {
  return (
    // Main container set to a dark background
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* Top Image Gallery: 3 Columns */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-0">
        {/* Image 1: Fluid, Wavy Building */}
        <div className="relative h-64 sm:h-96">
          <img
            src="https://placehold.co/800x600/1f2937/ffffff?text=Wavy+Architecture"
            alt="Abstract architecture"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        {/* Image 2: Dramatic High Angle (Jumping Person) */}
        <div className="relative h-64 sm:h-96">
          <img
            src="https://placehold.co/800x600/000000/ffffff?text=Dynamic+Action"
            alt="Dynamic high-angle shot"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        {/* Image 3: Modern Building Detail */}
        <div className="relative h-64 sm:h-96">
          <img
            src="https://placehold.co/800x600/111111/ffffff?text=Modern+Building"
            alt="Modern building detail"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </section>

      {/* About Me Content Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Block: "About Me" Title */}
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <h1 className="text-6xl sm:text-7xl font-extrabold mb-4">
              About Me
            </h1>
            {/* Subtle Underline */}
            <div className="w-16 border-b-4 border-white"></div>
          </div>
          
          {/* Right Blocks: Vision and Mission Columns */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
            
            {/* My Vision Column */}
            <div>
              <h2 className="text-xl font-bold text-gray-300 mb-3 uppercase tracking-wider">My Vision</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo commodo.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
              </p>
            </div>

            {/* My Mission Column */}
            <div>
              <h2 className="text-xl font-bold text-gray-300 mb-3 uppercase tracking-wider">My Mission</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            
          </div>
        </div>

      </section>
      
      {/* Placeholder Footer (to ensure page depth) */}
      <footer className="h-16 bg-[#1a1a1a]"></footer>

    </div>
  );
};

export default AboutMePage;
