"use client";
import Link from 'next/link';
import Button from '../ui/Button';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useUser } from "../context/UserContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [connected, setConnect] = useState(true);
  
  const {userInfo} = useUser() || {};
  
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleProfile = () => setIsProfileOpen(prev => !prev);

  const path = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setConnect(!!token); // définit connected sur true si un token est trouvé
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setConnect(false);
  };

  useEffect(() => {
    const nav = document.querySelectorAll(".nav li");
    nav.forEach((item) => {
      item.style.color = "#14213d";
    });
    if (path === "/") {
      document.querySelector(".home").style.color = "#fca311";
    } else if (path === "/about") {
      document.querySelector(".about").style.color = "#fca311";
    } else if (path === "/courses") {
      document.querySelector(".courses").style.color = "#fca311";
    } else if (path === "/blog") {
      document.querySelector(".blog").style.color = "#fca311";
    } else if (path === "/contact") {
      document.querySelector(".contact").style.color = "#fca311";
    }
  }, [path]);

  return (
    <nav className="bg-white border-gray-200 light:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-9" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap light:text-white">
            LH Learning
          </span>
        </Link>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {connected ? (
            <>
              <div className='prfl' onClick={toggleProfile}>
                <div className="profile_photo">
                <img src={userInfo?.photo || "/default-profile.png"} alt="photo" />
                </div>
                <span>{userInfo?.username || "User"}</span>
                </div>
              <div className={`z-30 my-4 text-base ${isProfileOpen ? "block" : "hidden"} list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm light:bg-gray-700 light:divide-gray-600 user-options`}>
                <div className="px-2 py-3">
                  <span className="block text-sm text-[#14213d] light:text-white">
                    {userInfo?.firstname||"unknown"} {userInfo?.lastname||"unknown"}
                  </span>
                  <span className="block text-sm text-gray-500 truncate light:text-gray-400">
                    {userInfo?.email||"unknown"}
                  </span>
                </div>
                <ul className="py-2">
                  <li>
                    <Link href="/profile" className="block px-4 py-2 text-sm text-[#14213d] hover:bg-gray-100 light:hover:bg-gray-600 light:text-[#14213d] light:hover:text-white">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout} href="/auth/login" className="block px-4 py-2 text-sm text-[#14213d] hover:bg-gray-100 light:hover:bg-gray-600 light:text-[#14213d] light:hover:text-white">
                      Se déconnecter
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div>
              <Link href="/auth/login">
                <Button type="button" txt="GET STARTED" />
              </Link>
            </div>
          )}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 light:text-gray-400 light:hover:bg-gray-700 light:focus:ring-gray-600 navbtn"
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

        <div className={`items-center justify-between ${isMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white light:bg-gray-800 md:light:bg-gray-900 light:border-gray-700 menu">
            <li>
              <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-[#14213d] md:p-0 md:light:text-blue-500 md:hover:text-[#fca311] home" aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3 text-[#14213d] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fca311] md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700 about">
                About
              </Link>
            </li>
            {userInfo?.role === "teacher" ? (
              <li>
      <Link href="/teacher_dashboard" className="block py-2 px-3 text-[#14213d] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fca311] md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700 courses">
      Your Courses
                </Link>
              </li>
            ) : userInfo?.role === "Admin" ? (
              <li>
                <Link href="/admin_dashboard" className="block py-2 px-3 text-[#14213d] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fca311] md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700 courses">
                  Admin
                </Link>
              </li>
            ) : (
              <li>
               <Link href="/courses" className="block py-2 px-3 text-[#14213d] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fca311] md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700 courses">
                           Courses
            
                </Link>
              </li>
            )}
            <li>
              <Link href="/blog" className="block py-2 px-3 text-[#14213d] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fca311] md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700 blog">
                Our Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-3 text-[#14213d] rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#fca311] md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-white md:light:hover:bg-transparent light:border-gray-700 contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
