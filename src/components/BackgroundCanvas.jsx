import React from 'react';

// Layered background: watercolor gradients, subtle texture, batik/songket motif, and gold borders
const BackgroundCanvas = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Soft watercolor gradient wash in earthy tones */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 800px at 20% 10%, rgba(203, 181, 151, 0.25), transparent 60%), radial-gradient(900px 700px at 80% 20%, rgba(192, 176, 146, 0.22), transparent 60%), radial-gradient(1000px 900px at 50% 80%, rgba(149, 168, 152, 0.18), transparent 65%)',
        }}
      />

      {/* Paper texture via SVG noise */}
      <svg className="absolute inset-0 mix-blend-multiply opacity-30" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.03" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Batik/songket inspired motif */}
      <svg className="absolute inset-0 opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="batik" width="120" height="120" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="#7a1e1e" strokeWidth="0.8">
              <path d="M60 10 L110 60 L60 110 L10 60 Z" />
              <circle cx="60" cy="60" r="10" fill="#c9a227" opacity="0.6" />
              {/* jasmine-like buds */}
              <path d="M60 25 q5 8 0 16 q-5 -8 0 -16 Z" fill="#6b8e6b" opacity="0.6" />
              <path d="M95 60 q8 5 16 0 q-8 -5 -16 0 Z" fill="#6b8e6b" opacity="0.6" />
              <path d="M60 95 q5 8 0 16 q-5 -8 0 -16 Z" fill="#6b8e6b" opacity="0.6" />
              <path d="M25 60 q8 5 16 0 q-8 -5 -16 0 Z" fill="#6b8e6b" opacity="0.6" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#batik)" />
      </svg>

      {/* Gold ornamental top/bottom lines with gentle curves */}
      <svg className="absolute inset-0" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="#c9a227" strokeWidth="2" opacity="0.8">
          <path d="M20 30 Q 120 10 240 30 T 480 30 T 720 30 T 960 30" />
          <path d="M20 770 Q 120 790 240 770 T 480 770 T 720 770 T 960 770" />
        </g>
        <g fill="none" stroke="#c9a227" strokeWidth="1.5" opacity="0.85">
          <path d="M30 60 q40 -40 80 0 q-30 20 -60 0 q10 20 30 25" />
          <path d="M970 60 q-40 -40 -80 0 q30 20 60 0 q-10 20 -30 25" />
          <path d="M30 740 q40 40 80 0 q-30 -20 -60 0 q10 -20 30 -25" />
          <path d="M970 740 q-40 40 -80 0 q30 -20 60 0 q-10 -20 -30 -25" />
        </g>
      </svg>

      {/* Soft golden vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(900px 600px at 50% 50%, rgba(201,162,39,0.08), transparent 70%)',
        }}
      />
    </div>
  );
};

export default BackgroundCanvas;
