import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { Reveal } from './Reveal';

export const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font mt-20">
        <hr className="text-gray-800" />

        <Reveal as="div" className="container px-5 py-12 mx-auto flex flex-col md:flex-row md:items-center lg:items-start">

          <div className="w-full md:w-74 shrink-0 mx-auto md:mx-0 text-center md:text-left mb-10 md:mb-0">
            <div className="flex justify-center md:justify-start group">
              <a className="flex title-font font-medium items-center mb-4 md:mb-0 text-white p-2 text-md rounded-xl bg-linear-to-r from-[#9E49C5] to-[#DC519B] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <FaCode/>
              </a>
                <span className="ml-3 text-xl bg-linear-to-r from-[#9E49C5] to-[#DC519B] bg-clip-text text-transparent">
                  Portfoilo
                </span>
              </div>

            <p className="text-sm text-[#8C8595] mt-2">
Frontend Developer specializing in React, JavaScript, and modern web technologies. Building digital experiences that matter.            </p>
          </div>

          <div className="flex flex-col lg:flex-row grow md:pl-20 gap-10 text-center md:text-left">

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">
              <h2 className="text-white text-xl mb-3">Quick links</h2>
              <nav className="list-none space-y-2">
                <li><Link to="/" className="inline-block text-gray-400 transition-all duration-300 hover:text-[#8C47D1] hover:translate-x-1">Home</Link></li>
                <li><Link to="/projects" className="inline-block text-gray-400 transition-all duration-300 hover:text-[#8C47D1] hover:translate-x-1">Projects</Link></li>
                <li><a href='#about' className="inline-block text-gray-400 transition-all duration-300 hover:text-[#8C47D1] hover:translate-x-1">About</a></li>
                <li><a href='#contact' className="inline-block text-gray-400 transition-all duration-300 hover:text-[#8C47D1] hover:translate-x-1">Contact</a></li>
              </nav>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-white text-xl mb-4">Connect</h3>
              <div className="flex gap-6">
                <a className="text-white p-3 text-2xl bg-[#2E2735] rounded-xl transition-all duration-300 hover:bg-linear-to-r from-[#9E49C5] to-[#DC519B] hover:-translate-y-1 hover:scale-110" href="https://github.com/hanan9876" target='_blank'>
                  <FaGithub />
                </a>
                <a className="text-white p-3 text-2xl bg-[#2E2735] rounded-xl transition-all duration-300 hover:bg-linear-to-r from-[#9E49C5] to-[#DC519B] hover:-translate-y-1 hover:scale-110" href="https://www.linkedin.com/in/hanan-arshad-webdev/" target='_blank'>
                  <FaLinkedinIn />
                </a>
                <a target='_blank' href="mailto:hananarshad604@gmail.com" className="text-white p-3 text-2xl bg-[#2E2735] rounded-xl transition-all duration-300 hover:bg-linear-to-r from-[#9E49C5] to-[#DC519B] hover:-translate-y-1 hover:scale-110" >
                  <MdOutlineEmail />
                </a>
              </div>
            </div>

          </div>
        </Reveal>

        <hr className="text-gray-800" />
        <div>
          <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row justify-center sm:justify-between">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2025 — All rights reserved
            </p>
          </div>
        </div>

      </footer>
    </div>
  )
}
