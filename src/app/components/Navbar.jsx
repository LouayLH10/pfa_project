"use client";
import Link from 'next/link';
import Button from '../ui/Button';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
export default function Navbar() {

const path=usePathname();
useEffect(()=>{
  const nav=document.querySelectorAll(".nav li")
  nav.forEach((item) => {
    item.style.color = "#14213d";
  });
  if(path==="/"){
   
    document.querySelector(".home").style.color="#fca311"
  }
  else if(path==="/about"){
     document.querySelector(".about").style.color="#fca311"
  }
  else if(path==="/courses"){
    document.querySelector(".courses").style.color="#fca311"
 }
})

  return (
    <nav className="bg-white border-gray-200 light:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/logo.png" className="h-9" alt="Flowbite Logo"  />
      <span className="self-center text-2xl font-semibold whitespace-nowrap light:text-white">
        LH Learning 
      </span>
    </Link>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <Link href="/auth/login">
      <Button type="button" txt="GET STARTED" />
    </Link>
          {/* Dropdown menu */}
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm light:bg-gray-700 light:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-[#14213d] light:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm text-gray-500 truncate light:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-[#14213d] hover:bg-gray-100 light:hover:bg-gray-600 light:text-[#14213d] light:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-[#14213d] hover:bg-gray-100 light:hover:bg-gray-600 light:text-[#14213d] light:hover:text-white"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-[#14213d] hover:bg-gray-100 light:hover:bg-gray-600 light:text-[#14213d] light:hover:text-white"
                >
                  Earnings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-[#14213d] hover:bg-gray-100 light:hover:bg-gray-600 light:text-[#14213d] light:hover:text-white"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 light:text-gray-400 light:hover:bg-gray-700 light:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white light:bg-gray-800 md:light:bg-gray-900 light:border-gray-700 menu">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-[#14213d] md:p-0 md:light:text-blue-500 md:hover:text-[#fca311] home"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-[#14213d] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fca311] md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700 about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="block py-2 px-3 text-[#14213d] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fca311] md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700 courses"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-[#14213d] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fca311] md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700 blog"
              >
                Our Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-[#14213d] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fca311] md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700 contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
