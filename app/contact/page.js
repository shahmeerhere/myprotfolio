import React from 'react'

const contact = () => {

    // Data for contact points
    const contactPoints = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l1.35 7.017c.36.195.698.397 1.05.6a1 1 0 001.21-.194l4.242-4.242a1 1 0 011.414 0L17 7.586A1 1 0 0117 8.5v3.414a1 1 0 01-1.414.99L12 11.414a1 1 0 00-1.414 0L8.586 12a1 1 0 01-1.414 0L6 11.414V8.586L4.586 7A1 1 0 004 8v3.414a1 1 0 01-1.414 0L2 10.414V8.586a1 1 0 011-1h1.414l-1.414-1.414A1 1 0 002 4.5V3z" />
                </svg>
            ),
            text: "+123-456-7890",
            link: "tel:+1234567890",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 7.777a.5.5 0 01.22.465l.775 5.5A1.5 1.5 0 006.353 15h7.294a1.5 1.5 0 001.446-1.192l.775-5.5a.5.5 0 01.22-.465A.5.5 0 0115 7.5h-5.5v-3h1.5a.5.5 0 010 1h-1.5v2h-3v-2H5a.5.5 0 010-1h1.5v-2A1.5 1.5 0 018 2.5h4A1.5 1.5 0 0113.5 4v1.5a.5.5 0 01-1 0v-1.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v2a.5.5 0 01-.5.5H5a.5.5 0 01-.668-.223z" clipRule="evenodd" />
                </svg>
            ),
            text: "www.reallygreatsite.com",
            link: "http://www.reallygreatsite.com",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
            ),
            text: "hello@reallygreatsite.com",
            link: "mailto:hello@reallygreatsite.com",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
            ),
            text: "123 Anywhere St., Any City, ST 12345",
            link: "#", // Address link, can be a map link if desired
        },
    ];
    return (
        // Main container set to a dark background
        <div className="min-h-screen text-white font-sans">

            <main className="flex flex-col md:flex-row min-h-screen">

                {/* Left Side: Dominant Image Column */}
                <div className="w-full md:w-1/2 relative h-96 md:h-auto bg-[#222222]">
                    <img
                        src="https://placehold.co/1000x1200/000000/ffffff?text=Modern+Architecture"
                        alt="Modern angular building exterior"
                        className="w-full h-full object-cover grayscale bg-[#222222]"
                    />
                </div>

                {/* Right Side: Text Content & Contact Details Column */}
                <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center">
                    <div className="max-w-md mx-auto md:mx-0">

                        {/* Main Title and Underline */}
                        <h1 className="text-6xl sm:text-7xl font-extrabold mb-4">
                            My Contact
                        </h1>
                        {/* The underline element */}
                        <div className="w-24 border-b-4 border-white mb-16"></div>

                        {/* Introductory Text */}
                        <p className="text-base text-gray-300 leading-relaxed mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                        </p>

                        {/* Contact List */}
                        <div className="space-y-4">
                            {contactPoints.map((point, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <a
                                        href={point.link}
                                        className="flex items-center space-x-3 text-white transition hover:text-gray-400"
                                        target={point.link.startsWith('http') ? '_blank' : '_self'}
                                        rel={point.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        {/* Icon */}
                                        <div className="text-gray-400">{point.icon}</div>
                                        {/* Text/Link */}
                                        <span className="text-base">{point.text}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <main className="flex flex-col md:flex-row min-h-screen">

                {/* Left Side: Text Content Column (Approx 50% width on desktop) */}
                <div className="w-full md:w-1/2 bg-black p-8 md:p-16 flex flex-col justify-center">
                    <div className="max-w-xl mx-auto md:mx-0">

                        {/* Main Title and Underline */}
                        <h1 className="text-6xl sm:text-7xl font-extrabold mb-4">
                            Thank You
                        </h1>
                        {/* The underline element */}
                        <div className="w-24 border-b-4 border-white mb-16"></div>

                        {/* Top Text Block */}
                        <p className="text-base text-gray-300 leading-relaxed mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                        </p>

                        {/* Bottom Text Block */}
                        <p className="text-base text-gray-300 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                        </p>
                    </div>
                </div>

                {/* Right Side: Image Column (Approx 50% width on desktop) */}
                <div className="w-full md:w-1/2 relative h-96 md:h-auto bg-[#222222]">
                    <img
                        src="https://placehold.co/1000x1200/000000/ffffff?text=Beach+Landscape"
                        alt="Beach landscape with a mountain and waves"
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
            </main>

        </div>
    )
}

export default contact