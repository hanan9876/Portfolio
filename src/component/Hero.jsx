import React from 'react'
import './Hero.css'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-6rem] left-[10%] w-72 h-72 sm:w-96 sm:h-96 bg-[#9E49C5] rounded-full blur-3xl opacity-25 animate-blob" />
        <div className="absolute top-[4rem] right-[8%] w-72 h-72 sm:w-96 sm:h-96 bg-[#DC519B] rounded-full blur-3xl opacity-20 animate-blob delay-2" />
        <div className="absolute top-[14rem] left-[35%] w-64 h-64 sm:w-80 sm:h-80 bg-[#764ada] rounded-full blur-3xl opacity-20 animate-blob delay-4" />
      </div>

      <section className='flex flex-col items-center justify-center text-center gap-6 mt-35 px-4 sm:px-6 lg:px-0 '>

        <div>
          <h1 className='
            animate-fade-in-up
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            text-[#F2F1F4]
            leading-snug
          '>
            Frontend Developer <br />
            <span>Building Digital <br className="hidden sm:block" /> Experiences</span>
          </h1>
        </div>

        <div>
          <p className='
            animate-fade-in-up delay-1
            text-base
            sm:text-lg
            lg:text-xl
            text-[#8C8595]
          '>
            Crafting responsive, performant web applications with modern <br className="hidden sm:block" />
            technologies. Specialized in e-commerce and fintech solutions.
          </p>
        </div>
        <div className='
          animate-fade-in-up delay-2
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-4
          sm:gap-8
        '>
          <button className='
            hover-glow
            text-[#ffff]
            bg-linear-to-r
            from-[#9E49C5]
            to-[#DC519B]
            w-full
            sm:w-35
            h-10
            rounded-md
            cursor-pointer
          '>
           <a href="#contact" className="block w-full h-full flex items-center justify-center">Get In Touch</a>
          </button>

          <a
            href="/resume1.pdf"
            download="Hanan_Resume.pdf"
            className="
              group
              text-white
              h-10
              min-w-45
              rounded-md
              border
              border-[#8c47d180]
              px-4
              flex
              items-center
              justify-center
              gap-4
              whitespace-nowrap
              hover:bg-[#8c47d1]
              hover:border-[#8c47d1]
              hover:shadow-[0_8px_24px_-8px_rgba(140,71,209,0.7)]
              transition-all
              duration-300
            "
          >
            Download Resume
            <FaArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>

        <div className='
          animate-fade-in-up delay-3
          flex
          items-center
          justify-center
          gap-6
          sm:gap-7.5
          mt-8
        '>
          <a href="https://github.com/hanan9876" target='_blank' className='text-[#ffff] text-2xl sm:text-3xl transition-all duration-300 hover:text-[#DC519B] hover:-translate-y-1 hover:scale-110'><FaGithub /></a>
          <a href="https://www.linkedin.com/in/hanan-arshad-webdev/" target='_blank' className='text-[#ffff] text-2xl sm:text-3xl transition-all duration-300 hover:text-[#DC519B] hover:-translate-y-1 hover:scale-110'><FaLinkedinIn /></a>
          <a href="mailto:hananarshad604@gmail.com" target='_blank' className='text-[#ffff] text-2xl sm:text-3xl transition-all duration-300 hover:text-[#DC519B] hover:-translate-y-1 hover:scale-110'><MdOutlineEmail /></a>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="animate-fade-in delay-4 mt-6 text-[#8C8595] hover:text-[#DC519B] transition-colors"
        >
          <FaArrowDown className="text-xl animate-bounce-down" />
        </a>

      </section>
    </div>
  )
}
