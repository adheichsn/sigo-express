import React from 'react';
import Image from 'next/image';

function Tentang() {
  return (
    <section className="flex flex-col md:flex-row bg-orange-500 text-white py-12 px-6 md:px-16">
      <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
        <Image
          src="/sigo/about.png"
          alt="Warehouse"
          width={400} 
          height={200} 
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center p-6">
        <h3 className="text-base sm:text-lg font-semibold uppercase mb-2 text-black">⚡ Tentang SIGO</h3>
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">Perusahaan Logistik Gaya Anak Muda</h2>
        <p className="text-sm sm:text-base mb-4">
          The companies play a vital role in the global supply chain by facilitating the movement of goods across different modes of transportation safe and efficient delivery.
        </p>
        <p className="text-sm sm:text-base mb-8">
          Also known as a freight company or freight forwarder, is a specialized organization that handles the transportation logistics of goods and cargo on behalf.
        </p>
        <a href="#" className="inline-flex items-center px-6 py-3 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-orange-500 transition duration-300">
          Baca Lebih Lengkap
          <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  );
}

export default Tentang;
