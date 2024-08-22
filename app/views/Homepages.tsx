import React from 'react'
import Tentang from './Tentang'
import Layanan from './Layanan'
import Kirim from './Kirim'
import Client from './Client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Statistics from './Static'
import Artikels from './Artikels'

function Homepages() {
  return (
    <>
      <div className="relative">
        <Header />
        <div className='pt-24 sm:pt-24'>
          <Image
            width={1500}
            height={600}
            alt='Background Home'
            src="/sigo/home.png"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white z-20 px-4 sm:px-10 pt-32 sm:pt-32">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-orange-500">SIGO Express</h1>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mt-2">#KirimPaketMurah</h2>
          <p className="mt-4 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl text-sm sm:text-base">
            These companies specialize in handling various aspects of logistics, including transportation, warehousing, inventory management, and distribution.
          </p>
          <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 mt-8 rounded-full hover:bg-orange-600 transition duration-300">
            Kirim Sekarang
          </button>
        </div>
      </div>
      <div className="bg-black text-white py-8 sm:py-10">
        <Statistics />
      </div>
      <Tentang />
      <Layanan />
      <Kirim />
      <Client />
      <Artikels />
      <Footer />
    </>
  )
}

export default Homepages
