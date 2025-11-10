import React from 'react';

// A decorative frame inspired by Javanese/Balinese borders with floral corners
const DecorativeFrame = ({ children }) => {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Outer subtle maroon border */}
      <div className="absolute -inset-6 rounded-[22px] border border-[#7a1e1e]/30" />
      {/* Inner gold border */}
      <div className="absolute -inset-3 rounded-[18px] border border-[#c9a227]/70" />

      {/* Corner ornaments */}
      <svg className="absolute -top-5 left-4" width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 36 q8 -16 24 -24 q6 -2 10 2 q-2 6 -8 8 q-10 4 -14 12 q-2 4 -8 2Z" fill="#c9a227" opacity="0.8" />
      </svg>
      <svg className="absolute -top-5 right-4" width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <path d="M56 36 q-8 -16 -24 -24 q-6 -2 -10 2 q2 6 8 8 q10 4 14 12 q2 4 8 2Z" fill="#c9a227" opacity="0.8" />
      </svg>
      <svg className="absolute -bottom-5 left-4" width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 28 q8 16 24 24 q6 2 10 -2 q-2 -6 -8 -8 q-10 -4 -14 -12 q-2 -4 -8 -2Z" fill="#c9a227" opacity="0.8" />
      </svg>
      <svg className="absolute -bottom-5 right-4" width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <path d="M56 28 q-8 16 -24 24 q-6 2 -10 -2 q2 -6 8 -8 q10 -4 14 -12 q2 -4 8 -2Z" fill="#c9a227" opacity="0.8" />
      </svg>

      {/* Content container */}
      <div className="relative rounded-2xl bg-[rgba(250,247,240,0.75)] backdrop-blur-md border border-amber-900/10 p-6 sm:p-10">
        {children}
      </div>
    </div>
  );
};

export default DecorativeFrame;
