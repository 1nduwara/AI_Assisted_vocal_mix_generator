
export default function HomePage() {
  return(
    // Simple navbar with "home, Generate, login/signup" buttons
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">

      {/* ----------------------------- NAVBAR ----------------------------- */}

      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div>
          <a href="/Home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="/generate" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Generate</a>
        </div>
        <div>
          <a href="/login" className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</a>
          <a href="/signup" className="m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Signup</a>
        </div>
      </nav>

      {/* ----------------------------- MAIN CONTENT ----------------------------- */}

      <main className="flex-grow">

        {/* SECTION - 1 */}
        <section className="section_1">

          {/*     video    */}
          <video autoPlay loop muted playsInline className="background-video">
            <source src="./Data/Video/video_4k.mp4" type="video/mp4" />
          </video>

          {/*     content    */}
          <div className="content-overlay">
            <h1 className="text-5xl font-bold mb-4">AI Assisted Vocals Mix Generator For Music Producers</h1>
            <p className="text-xl text-gray-400 mb-8">
              Create professional-quality vocal mixes in seconds with AI-Assistance with ease.
            </p>
            <a href="/generate" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </a>
          </div>

        </section>

        <section className="py-20 px-4 bg-gray-800">

        {/* ----------------------------- SECTION - 2 -----------------------------*/}

          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="flex flex-wrap justify-center gap-8">

            {/* ----------------------------- Feature 1 ----------------------------- */}

            <div className="max-w-sm p-6 bg-gray-700 rounded-lg shadow-lg text-center">
              <svg className="h-12 w-12 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12-3" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Automatic Audio Analysis</h3>
              <p className="text-gray-400">This AI tool analyzes your Instrumental track to identify BPM, Key, Timing, Genre & Song Structure.</p>
            </div>

            {/* ----------------------------- Feature 2 ----------------------------- */}
            <div className="max-w-sm p-6 bg-gray-700 rounded-lg shadow-lg text-center">
              <svg className="h-12 w-12 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">AI Assisted <br/>(Lyric/ Melody/ Vocal) Generation and Integration</h3>
              <p className="text-gray-400">This AI tool generates comprehensive lyrics, a vocal melody, Synthesized vocals, and then integrate it to the instrumental track.</p>
            </div>

            {/* ----------------------------- Feature 3  -----------------------------*/}
            <div className="max-w-sm p-6 bg-gray-700 rounded-lg shadow-lg text-center">
              <svg className="h-12 w-12 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m0-10v-2m0 6h.01M6 12H4m16 0h-2m-10 0h.01M12 18h.01M18 12h.01M6 6l1.414-1.414M18 18l-1.414-1.414M6 18l1.414 1.414M18 6l-1.414 1.414" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Intelligent Mixing</h3>
              <p className="text-gray-400">Get a balanced mix with smart EQ, compression, dynamics and sound balancing, tailored for vocals-instruments Mixing.</p>
            </div>

            {/* ----------------------------- Feature 4 ----------------------------- */}
            <div className="max-w-sm p-6 bg-gray-700 rounded-lg shadow-lg text-center">
              <svg className="h-12 w-12 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">Export in High Quality</h3>
              <p className="text-gray-400">Export your final mix in various high-quality formats, ready for production and distribution.</p>
            </div>
          </div>
        </section>

        {/* ----------------------------- SECTION - 3 ----------------------------- */}

        <section className="py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* ----------------------------- Step 1 ----------------------------- */}
            <div className="max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg text-center">
              <div className="text-5xl font-bold text-blue-500 mb-4">1</div>
              <h3 className="text-2xl font-bold mb-2">Upload Your Vocal Track</h3>
              <p className="text-gray-400">Simply upload your raw vocal recording in any common audio format.</p>
            </div>

            {/* ----------------------------- Step 2 -----------------------------*/}
            <div className="max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg text-center">
              <div className="text-5xl font-bold text-blue-500 mb-4">2</div>
              <h3 className="text-2xl font-bold mb-2">AI Analysis &amp; Processing</h3>
              <p className="text-gray-400">Our AI gets to work by, Analyzing, Generating and Applying the best mixing techniques.</p>
            </div>

            {/* ----------------------------- Step 3 ----------------------------- */}
            <div className="max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg text-center">
              <div className="text-5xl font-bold text-blue-500 mb-4">3</div>
              <h3 className="text-2xl font-bold mb-2">Download Your Mix</h3>
              <p className="text-gray-400">Preview the result and download your professionally mixed vocal track.</p>
            </div>
          </div>
        </section>


        {/* ----------------------------- SECTION - 4 ----------------------------- */}

        <section className="section_4 py-20 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Vocals?</h2>
          <p className="text-xl text-gray-400 mb-8">Sign up today and experience the future of vocal mixing.</p>
          <a href="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Sign Up Now
          </a>
        </section>
      </main>

      {/* ----------------------------- FOOTER ----------------------------- */}

      <footer className="bg-gray-800 p-4 text-center">
        <p>&copy; 2025 - AI Assisted Vocal Mix Generator For Music Producers. All rights reserved.</p>
        <p>Contact Me: CB011091@students.apiit.lk | Ilbdassanayake123@outlook.com</p>
        <p>Project By Induwara Dassanayake</p>
      </footer>
    </div>
  )
  
}