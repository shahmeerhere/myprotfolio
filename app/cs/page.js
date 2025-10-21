// This file contains a simplified Next.js component for the main page (root route '/').
// It focuses purely on replicating the visual theme and split-screen layout.

const SimplifiedHero = () => {
  return (
    // The main container for the entire page, ensuring the dark theme
    <div className="min-h-screen bg-black text-white font-sans">
      
      {/* Fixed Navigation Bar (Simplified) */}
      <header className="py-4 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-20 bg-black border-b border-gray-900 shadow-lg">
        <h1 className="text-xl font-bold text-white tracking-widest">A S P I R A N T</h1>
        
        {/* Menu Icon SVG for Mobile (Retained for responsiveness) */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </header>

      {/* Main Portfolio Layout (Hero Section) */}
      <main className="pt-16 md:pt-0"> 
        
        <section className="flex flex-col md:flex-row min-h-screen">
            
            {/* Left Side: Placeholder Image */}
            <div className="w-full md:w-1/2 bg-gray-900 relative min-h-[350px] md:min-h-screen">
                <img
                    src="https://placehold.co/800x1200/1f2937/ffffff?text=Professional+Placeholder" 
                    alt="Professional Profile Placeholder"
                    className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>

            {/* Right Side: Hero Text Content */}
            <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center">
                <div className="max-w-xl">
                    
                    {/* Simplified Title Section */}
                    <h2 className="text-5xl font-light text-cyan-400 mb-2">
                        My Beginner
                    </h2>
                    
                    {/* Main Title and Separator Line */}
                    <div className="flex items-center space-x-6 mb-10">
                        <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-none">
                            Portfolio
                        </h2>
                        {/* Horizontal Line: Key visual element retained */}
                        <div className="flex-grow border-t-2 border-white opacity-50 hidden sm:block"></div>
                    </div>

                    {/* Simple Description Text */}
                    <p className="text-md text-gray-300 mb-10 leading-relaxed max-w-lg">
                        This clean and striking design serves as the entry point to showcase my technical skills, hands-on projects, and dedication to starting a career in the cybersecurity field.
                    </p>

                    {/* Single Call to Action */}
                    <a href="#" className="bg-cyan-500 text-black font-semibold py-3 px-8 text-sm uppercase tracking-wider transition duration-300 hover:bg-cyan-400 rounded-lg shadow-xl hover:shadow-cyan-500/50">
                        View Resume
                    </a>
                </div>
            </div>
        </section>
      </main>

      {/* Page Number (Bottom Right Corner) */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-500 hidden md:block z-10">
        Theme | Minimal
      </div>

    </div>
  );
};

export default SimplifiedHero;
