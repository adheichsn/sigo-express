import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 px-6">
        {/* Kolom 1: Logo dan Deskripsi */}
        <div className="flex flex-col items-center md:items-start">
          <Image 
            src="/logo/footer.png" // Ganti dengan path logo yang sesuai
            alt="SIGO Express Logo"
            width={150}
            height={150}
            className="mb-4"
          />
          <p className="text-gray-400 text-center md:text-left">
            Cargo refers to goods or merchandise that is transported from one place to another, typically by air, sea, or land.
          </p>
          <div className="mt-4 w-full">
            <input 
              type="email" 
              placeholder="Email here to subscribe" 
              className="w-full p-2 mb-4 border-b-2 border-green-500 bg-transparent placeholder-gray-500 focus:outline-none text-white"
            />
            <button className="flex items-center justify-center md:justify-start px-6 py-2 border border-white text-white bg-transparent rounded-full hover:bg-white hover:text-black transition duration-300">
              Subscribe
              <span className="ml-2">↗</span>
            </button>
          </div>
        </div>

        {/* Kolom 2: Halaman Utama */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Halaman Utama</h3>
          <ul className="text-gray-400 text-center md:text-left">
            <li className="mb-2 hover:text-orange-500"><a href="#">Tentang</a></li>
            <li className="mb-2 hover:text-orange-500"><a href="#">Layanan</a></li>
            <li className="mb-2 hover:text-orange-500"><a href="#">Artikel</a></li>
            <li className="mb-2 hover:text-orange-500"><a href="#">Kontak</a></li>
          </ul>
        </div>

        {/* Kolom 3: Contact Us */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-400 text-center md:text-left">
            <li className="mb-4 flex items-center justify-center md:justify-start">
              <Image 
                src="/logo/email.svg"
                alt="Email Icon"
                width={24}
                height={24}
              />
              <a href='mailto:info@bold.com' className="ml-2 text-white hover:text-orange-500">info@bold.com</a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Image 
                src="/logo/telfon.svg"
                alt="Phone Icon"
                width={24}
                height={24}
              />
              <a href='tel:12345678' className="ml-2 text-white hover:text-orange-500">(00) 123 456 789</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bagian Footer Bawah */}
      <div className="bg-orange-500 text-white text-center py-4">
        <p>Copyright © BOLD 2024 | Jakarta, Indonesia</p>
      </div>
    </footer>
  );
}

export default Footer;
