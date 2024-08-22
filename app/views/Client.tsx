import React from 'react';
import Image from 'next/image';

function Client() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-left flex-grow mb-6 md:mb-0">
            <h3 className="text-orange-500 text-2xl font-semibold">Client & Partner</h3>
          </div>
          <div className="text-left md:text-right flex-grow max-w-lg">
            <p className="text-gray-600 mb-4">
              Cargo refers to goods or merchandise that is transported from one place to another, typically by air, sea, or land.
            </p>
            <a 
              href="#"
              className="inline-flex items-center px-6 py-3 text-orange-500 border border-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition duration-300"
            >
              Detail Client & Partner
              <span className="ml-2">↗</span>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-0 sm:space-x-8 mt-12">
          <div className="flex justify-center w-1/2 sm:w-auto mb-4 sm:mb-0">
            <Image 
              src="/logo/client1.svg"
              alt="Logo 1"
              width={100}
              height={50}
            />
          </div>
          <div className="flex justify-center w-1/2 sm:w-auto mb-4 sm:mb-0">
            <Image
              src="/logo/client2.svg"
              alt="Logo 2"
              width={100}
              height={50}
            />
          </div>
          <div className="flex justify-center w-1/2 sm:w-auto mb-4 sm:mb-0">
            <Image 
              src="/logo/client3.svg"
              alt="Logo 3"
              width={100}
              height={50}
            />
          </div>
          <div className="flex justify-center w-1/2 sm:w-auto mb-4 sm:mb-0">
            <Image 
              src="/logo/client4.svg"
              alt="Logo 4"
              width={100}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
