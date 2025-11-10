import React from 'react';

const Hero = () => {
  return (
    <section className="relative z-10 text-center px-6 pt-20 pb-10">
      <div className="mx-auto max-w-3xl">
        <p className="uppercase tracking-[0.35em] text-[12px] sm:text-[13px] text-amber-700/80">Dengan penuh rasa syukur</p>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-serif leading-tight text-amber-900">
          <span className="block mb-2">Surya</span>
          <span className="text-2xl sm:text-3xl font-light tracking-wide text-amber-700">&</span>
          <span className="block mt-2">Aisyah</span>
        </h1>
        <p className="mt-4 text-amber-800/80 max-w-2xl mx-auto">
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan kami.
        </p>
      </div>

      {/* Floral gold divider */}
      <div className="mt-8 flex items-center justify-center">
        <svg width="220" height="24" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
          <path d="M0 12 H80" stroke="#c9a227" strokeWidth="1.5" />
          <path d="M140 12 H220" stroke="#c9a227" strokeWidth="1.5" />
          <g transform="translate(110,12)">
            <path d="M0 0 c8 -10 18 -10 26 0 c-8 10 -18 10 -26 0Z" fill="#c9a227" opacity="0.9" />
            <circle cx="13" cy="0" r="2" fill="#7a1e1e" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
