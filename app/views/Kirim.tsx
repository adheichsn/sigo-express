import React from 'react';
import Image from 'next/image';

function Kirim() {
  return (
    <div className="relative h-screen bg-gray-200">
      <div className="relative h-full">
        <Image 
          src="/sigo/kirim.png"
          alt="Warehouse"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent opacity-95 z-10"></div>
        <div className="absolute bottom-0 left-0 z-20 p-6 sm:p-12 bg-orange-500 bg-opacity-80 w-full sm:w-3/5">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Sudah Siap Kirim <br/>Barang?</h2>
          <p className="text-sm sm:text-base text-white mb-8">
            Its worth noting that this is a general overview of the process, <br/>
            and the specific steps and requirements may vary depending on your location,<br/>
            the nature of your goods, and the logistics provider you choose.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-transparent border border-white rounded-full text-white hover:bg-white hover:text-orange-500 transition duration-300"
          >
            Kirim Sekarang
            <span className="ml-2">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Kirim;
