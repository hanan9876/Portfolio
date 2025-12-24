import React from 'react'
import './Hero.css'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export const Hero = () => {
  return (
    <div>
      <section className='flex flex-col items-center justify-center text-center gap-6 mt-35 px-4 sm:px-6 lg:px-0 '>
        
        <div>
          <h1 className='
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
          flex 
          flex-col 
          sm:flex-row 
          items-center 
          justify-center 
          gap-4 
          sm:gap-8
        '>
          <button className='
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
           <a href="#contact">Get In Touch</a> 
          </button>

          <button><Link to='/projects' className='
            text-[#ffff] 
            w-full 
            sm:w-32.5 
            h-10 
            rounded-md 
            border 
            border-[#8c47d180]
            p-2.5
          '>
            View Project
          </Link>
          </button>
        </div>

        <div className='
          flex 
          items-center 
          justify-center 
          gap-6 
          sm:gap-7.5 
          mt-8
        '>
          <a href="https://github.com/hanan9876" target='_blank' className='text-[#ffff] text-2xl sm:text-3xl'><FaGithub /></a>
          <a href="https://www.linkedin.com/in/hanan-arshad-webdev/" target='_blank' className='text-[#ffff] text-2xl sm:text-3xl'><FaLinkedinIn /></a>
          <a href="mailto:hananarshad604@gmail.com" target='_blank' className='text-[#ffff] text-2xl sm:text-3xl'><MdOutlineEmail /></a>
        </div>

      </section>
    </div>
  )
}
