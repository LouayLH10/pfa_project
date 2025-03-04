import React from 'react'
import Link from 'next/link';
function Footer() {
  return (
    <div>
         <footer className="bg-white rounded-lg shadow-sm m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
      <img src="/logo.png" className="h-9" alt="Flowbite Logo"  />
      <span className="self-center text-2xl font-semibold whitespace-nowrap light:text-white">
        LH Learning
      </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2025{" "}
          <Link href="/" className="hover:underline">
          LH Learning™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
    </div>
  )
}

export default Footer