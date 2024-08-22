import Image from 'next/image';
import React from 'react';

function Layanan() {
  return (
    <div className="bg-gray-100 py-12 sm:py-20">
      <div className="text-center mb-8 sm:mb-12 px-4">
        <div className="flex justify-center items-center mb-4">
          <Image
            src="/logo/Vector.svg"
            alt="Layanan Icon"
            width={20}
            height={17}
            className="mr-2"
          />
          <h3 className="text-orange-500 text-lg font-semibold">Layanan</h3>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold">Memberikan Layanan Terbaik</h2>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center px-4 sm:px-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-center">
          <Image
            width={40}
            height={40}
            alt='truck'
            src="/logo/truck.png"
            className='mb-4'
          />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Pengiriman Darat</h3>
          <p className="text-gray-600 text-sm sm:text-base">Delivery service using trucks or other land vehicles, suitable for various types of goods.</p>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-center">
          <Image
            width={40}
            height={40}
            alt='plane'
            src="/logo/pesawat.png"
            className='mb-4'
          />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Pengiriman Udara</h3>
          <p className="text-gray-600 text-sm sm:text-base">Fast delivery using airplanes, ideal for international shipments.</p>
        </div>
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-center">
          <Image
            width={40}
            height={40}
            alt='ship'
            src="/logo/kapal.png"
            className='mb-4'
          />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Pengiriman Laut</h3>
          <p className="text-gray-600 text-sm sm:text-base">Shipment of goods via sea vessels, an economical option for large shipments.</p>
        </div>
      </div>
    </div>
  );
}

export default Layanan;
