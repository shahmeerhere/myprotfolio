const AboutMePage = () => {
  // Data structure for team members (assuming four as per the image)
  const teamMembers = [
    {
      name: "Brigitte Schwartz",
      imageSrc: "https://placehold.co/400x400/333333/ffffff?text=Brigitte",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim.",
    },
    {
      name: "Alfredo Torres",
      imageSrc: "https://placehold.co/400x400/111111/ffffff?text=Alfredo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim.",
    },
    {
      name: "Adora Montminy",
      imageSrc: "https://placehold.co/400x400/222222/ffffff?text=Adora",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim.",
    },
    {
      name: "Daniel Gallego",
      imageSrc: "https://placehold.co/400x400/000000/ffffff?text=Daniel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim.",
    },
  ];

   


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
      <div className="min-h-screen bg-black text-white font-sans py-20 md:py-32 px-6 lg:px-12">
        <main className="flex flex-col md:flex-row min-h-screen">

          {/* Left Side: Two Vertical Images (Approx 50% width on desktop) */}
          <div className="w-full md:w-1/2 flex flex-row">
            {/* Image 1: Power Lines */}
            <div className="w-1/2 relative h-96 md:h-full">
              <img
                src="https://placehold.co/600x1200/000000/ffffff?text=Power+Tower"
                alt="Electrical power pylon"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Image 2: Viewfinder/Binoculars */}
            <div className="w-1/2 relative h-96 md:h-full">
              <img
                src="https://placehold.co/600x1200/222222/ffffff?text=Viewfinder"
                alt="Binoculars on stand overlooking water"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Right Side: Text Content (Approx 50% width on desktop) */}
          <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center">
            <div className="max-w-xl mx-auto md:mx-0">

              {/* Main Title and Underline */}
              <h1 className="text-6xl sm:text-7xl font-extrabold mb-4">
                My Vision
              </h1>
              {/* The underline element */}
              <div className="w-24 border-b-4 border-white mb-16"></div>

              {/* Numbered Vision Points */}
              <div className="space-y-12">

                {/* Vision Point 1 */}
                <div className="flex items-start space-x-6">
                  {/* Number 01. */}
                  <span className="text-4xl font-extrabold text-white pt-1">01.</span>
                  {/* Descriptive Text */}
                  <p className="text-base text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                </div>

                {/* Vision Point 2 */}
                <div className="flex items-start space-x-6">
                  {/* Number 02. */}
                  <span className="text-4xl font-extrabold text-white pt-1">02.</span>
                  {/* Descriptive Text */}
                  <p className="text-base text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="min-h-screen bg-black text-white font-sans py-20 md:py-32 px-6 lg:px-12">
        <main className="flex flex-col md:flex-row min-h-screen">

          {/* Left Side: Text Content (Approx 50% width on desktop) */}
          <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center">
            <div className="max-w-xl mx-auto md:mx-0">

              {/* Main Title and Underline */}
              <h1 className="text-6xl sm:text-7xl font-extrabold mb-4">
                My Mission
              </h1>
              {/* The underline element */}
              <div className="w-24 border-b-4 border-white mb-16"></div>

              {/* Numbered Mission Points */}
              <div className="space-y-10">

                {/* Mission Point 1 */}
                <div className="flex items-start space-x-6">
                  {/* Number 01. */}
                  <span className="text-4xl font-extrabold text-white pt-1">01.</span>
                  {/* Descriptive Text */}
                  <p className="text-base text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                </div>

                {/* Mission Point 2 */}
                <div className="flex items-start space-x-6">
                  {/* Number 02. */}
                  <span className="text-4xl font-extrabold text-white pt-1">02.</span>
                  {/* Descriptive Text */}
                  <p className="text-base text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                </div>

                {/* Mission Point 3 */}
                <div className="flex items-start space-x-6">
                  {/* Number 03. */}
                  <span className="text-4xl font-extrabold text-white pt-1">03.</span>
                  {/* Descriptive Text */}
                  <p className="text-base text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                </div>

                {/* Mission Point 4 */}
                <div className="flex items-start space-x-6">
                  {/* Number 04. */}
                  <span className="text-4xl font-extrabold text-white pt-1">04.</span>
                  {/* Descriptive Text */}
                  <p className="text-base text-gray-300 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side: 2x2 Image Grid (Approx 50% width on desktop) */}
          <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2">

            {/* Image 1: Hugging Couple */}
            <div className="relative h-48 md:h-full">
              <img
                src="https://placehold.co/600x600/111111/ffffff?text=Embrace"
                alt="Couple hugging"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Image 2: Yoga/Exercise */}
            <div className="relative h-48 md:h-full">
              <img
                src="https://placehold.co/600x600/333333/ffffff?text=Yoga"
                alt="Person exercising on a cliff"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Image 3: Stylish Figure */}
            <div className="relative h-48 md:h-full">
              <img
                src="https://placehold.co/600x600/000000/ffffff?text=Fashion+Shot"
                alt="Stylish person on a beach"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Image 4: Pensive Woman */}
            <div className="relative h-48 md:h-full">
              <img
                src="https://placehold.co/600x600/444444/ffffff?text=Pensive+Woman"
                alt="Woman with hands on head"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </main>
      </div>
      <div className="min-h-screen bg-black text-white font-sans py-20 md:py-32 px-6 lg:px-12">

        <header className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">
            Meet My Team
          </h1>
          {/* The underline element */}
          <div className="w-20 border-b-4 border-white mx-auto"></div>
        </header>

        {/* Team Members Grid */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">

          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">

              {/* Image Container */}
              <div className="w-full max-w-xs overflow-hidden mb-6">
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  // Styling to achieve the cropped, high-contrast B&W look
                  className="w-full h-auto object-cover grayscale transition duration-300 hover:grayscale-0"
                />
              </div>

              {/* Name */}
              <h2 className="text-lg font-bold text-white mb-2 uppercase tracking-wider">
                {member.name}
              </h2>

              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed max-w-[280px]">
                {member.description}
              </p>
            </div>
          ))}

        </section>

        

      </div>
      {/* Placeholder Footer (to ensure page depth) */}
      <footer className="h-16 bg-[#1a1a1a]"></footer>

    </div>
  );
};

export default AboutMePage;
