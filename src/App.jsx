import React from 'react';
import BackgroundCanvas from './components/BackgroundCanvas.jsx';
import DecorativeFrame from './components/DecorativeFrame.jsx';
import Hero from './components/Hero.jsx';
import Details from './components/Details.jsx';
import RSVP from './components/RSVP.jsx';

function App() {
  return (
    <div className="relative min-h-screen bg-amber-50 text-amber-900">
      {/* Heritage watercolor background, batik texture, and gold ornaments */}
      <BackgroundCanvas />

      {/* Content */}
      <main className="relative z-10 py-12 sm:py-16 md:py-24">
        <DecorativeFrame>
          <Hero />

          {/* Floral accent (jasmine/frangipani) */}
          <div className="relative z-10 -mt-2 flex items-center justify-center">
            <svg width="180" height="80" viewBox="0 0 180 80" xmlns="http://www.w3.org/2000/svg" className="opacity-95">
              {/* leaves */}
              <path d="M50 50 q20 -30 40 -10 q-18 18 -40 10Z" fill="#6b8e6b" opacity="0.9" />
              <path d="M130 50 q-20 -30 -40 -10 q18 18 40 10Z" fill="#6b8e6b" opacity="0.9" />
              {/* frangipani petals */}
              <g transform="translate(90,40)">
                <path d="M0 -12 q10 -10 18 0 q-8 4 -18 0Z" fill="#fff5d9" />
                <path d="M12 0 q10 -10 0 -18 q-4 8 0 18Z" fill="#fff5d9" />
                <path d="M0 12 q10 10 18 0 q-8 -4 -18 0Z" fill="#fff5d9" />
                <path d="M-12 0 q-10 -10 0 -18 q4 8 0 18Z" fill="#fff5d9" />
                <circle cx="3" cy="-1" r="2.5" fill="#c9a227" />
              </g>
            </svg>
          </div>

          <Details />
          <RSVP />
        </DecorativeFrame>
      </main>

      {/* Footer note */}
      <footer className="relative z-10 pb-10 text-center text-amber-800/80">
        <p className="text-xs tracking-wide">Dengan hormat, kami menantikan kehadiran dan doa restu Anda.</p>
      </footer>
    </div>
  );
}

export default App;
