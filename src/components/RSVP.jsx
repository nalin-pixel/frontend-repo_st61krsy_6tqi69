import React, { useState } from 'react';

const RSVP = () => {
  const [status, setStatus] = useState(null);

  const handleClick = () => {
    setStatus('Terima kasih! Kami telah menerima konfirmasi kehadiran Anda.');
  };

  return (
    <section className="relative z-10 px-6 py-12">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-amber-800/80">Mohon konfirmasi kehadiran Anda.</p>
        <button
          onClick={handleClick}
          className="mt-4 inline-flex items-center justify-center rounded-full bg-amber-700 text-amber-50 px-8 py-3 shadow hover:bg-amber-800 transition-colors"
        >
          RSVP Sekarang
        </button>
        {status && (
          <div className="mt-4 text-amber-900 bg-amber-100/70 border border-amber-900/10 rounded-lg px-4 py-3">
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default RSVP;
