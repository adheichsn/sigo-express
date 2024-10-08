"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white bg-opacity-50 shadow-md fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 px-4">
        <Link href="/" className="flex items-center">
          <Image 
            width={214}
            height={50}
            src="/sigo/header.png"
            alt='logo'
          />
        </Link>
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
            aria-controls="navbar-default" 
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`${menuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:space-x-8 items-center`} id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-gray-800">
            <li>
              <Link href="/sigo/about" className="hover:text-orange-600">Tentang SIGO</Link>
            </li>
            <li>
              <Link href="/sigo/layanan" className="hover:text-orange-600">Layanan</Link>
            </li>
            <li>
              <Link href="/sigo/artikel" className="hover:text-orange-600">Artikel</Link>
            </li>
            <li>
              <Link href="/sigo/contact" className="hover:text-orange-600">Kontak SIGO</Link>
            </li>
          </ul>
          <button className="bg-orange-500 text-white px-6 py-3 rounded mt-4 md:mt-0 hover:bg-orange-600 transition duration-300">
            Kirim Sekarang
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
