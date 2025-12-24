import React from 'react'
import { IoMdContact } from "react-icons/io";

export const About = () => {
  return (
    <div>
      <section
        id='about'
        className='
          flex 
          flex-col 
          items-center 
          justify-center 
          text-center 
          gap-6 
          mt-20 
          sm:mt-24 
          lg:mt-30 
          px-4 
          sm:px-6 
          lg:px-0
        '
      >

        <div>
          <h1 className='
            text-3xl 
            sm:text-4xl 
            lg:text-5xl 
            font-bold 
            text-[#F2F1F4] 
            leading-snug
          '>
            About{' '}
            <span className='bg-linear-to-r from-[#9E49C5] to-[#DC519B]'>
              Me
            </span>
          </h1>
        </div>

        <div>
          <p className='
            text-base 
            sm:text-lg 
            text-[#8C8595]
          '>
            Passionate about creating seamless user experiences and solving complex problems
            <br className='hidden sm:block' /> with code.
          </p>
        </div>

        <div className='
          flex 
          flex-col 
          w-full 
          max-w-5xl
        '>

          <div className='
            flex 
            flex-col 
            mt-5 
            items-start 
            border 
            border-[#8c47d180] 
            p-6 
            sm:p-8 
            lg:p-10 
            bg-[#1F1924] 
            rounded-2xl
          '>

            <div className='flex items-center'>
              <a
                href=""
                className='
                  text-xl 
                  sm:text-2xl 
                  text-white 
                  p-3 
                  bg-linear-to-r 
                  from-[#9E49C5] 
                  to-[#DC519B] 
                  rounded-xl
                '
              >
                <IoMdContact />
              </a>

              <h2 className='
                text-white 
                text-xl 
                sm:text-2xl 
                ml-4 
                sm:ml-6 
                font-bold
              '>
                Who I Am
              </h2>
            </div>

            <br />

            <div>
              <p className='
                text-base 
                sm:text-lg 
                text-[#8C8595]
              '>
                I'm a frontend developer with a passion for building exceptional digital experiences.
                With expertise in modern web technologies and a strong focus on user-centric design,
                I've helped businesses in fintech and e-commerce sectors deliver powerful solutions.
                I believe in writing clean, maintainable code and staying up-to-date with the latest
                industry trends.
              </p>
            </div>

          </div>
        </div>

      </section>
    </div>
  )
}
