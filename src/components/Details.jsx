import React from 'react';

const DetailItem = ({ label, children }) => (
  <div className="flex flex-col items-center text-center p-4">
    <span className="uppercase tracking-[0.25em] text-[11px] text-amber-700/80">{label}</span>
    <div className="mt-2 text-amber-900 font-medium">{children}</div>
  </div>
);

const Details = () => {
  return (
    <section className="relative z-10 px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-xl border border-amber-900/20 bg-amber-50/50 backdrop-blur-sm shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-amber-900/10">
          <DetailItem label="Tanggal">
            Sabtu, 21 Desember 2025
          </DetailItem>
          <DetailItem label="Akad">
            09.00 WIB
            <div className="text-amber-700/80 text-sm">Masjid Agung Al-Ikhlas</div>
          </DetailItem>
          <DetailItem label="Resepsi">
            12.00 - 15.00 WIB
            <div className="text-amber-700/80 text-sm">Pendopo Puri Nusantara, Yogyakarta</div>
          </DetailItem>
        </div>
      </div>
    </section>
  );
};

export default Details;
