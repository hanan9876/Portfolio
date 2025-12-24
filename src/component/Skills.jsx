import React from 'react'
import { FaGraduationCap } from "react-icons/fa";

export const Skills = () => {
  return (
    <div>
      <div
        className='
          flex 
          flex-col 
          mt-10 
          px-4 
          sm:px-6 
          lg:px-23
        '
      >
        <div className='flex flex-col mt-5 items-start'>

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
              <FaGraduationCap />
            </a>

            <h2
              className='
                text-white 
                text-xl 
                sm:text-2xl 
                ml-4 
                sm:ml-6 
                font-bold
              '
            >
              Skill & Technologies
            </h2>
          </div>

          <br />

          <div
            className='
              flex 
              gap-4 
              sm:gap-6 
              lg:gap-7 
              flex-wrap
            '
          >
            <button className='text-white p-3 bg-[#1F1924] rounded-lg text-sm hover:bg-[#20152B] hover:border hover:border-[#8c47d180]'>HTML 5</button>
            <button className='text-white p-3 bg-[#1F1924] rounded-lg text-sm hover:bg-[#20152B] hover:border hover:border-[#8c47d180]'>CSS</button>
            <button className='text-white p-3 bg-[#1F1924] rounded-lg text-sm hover:bg-[#20152B] hover:border hover:border-[#8c47d180]'>BootStrap</button>
            <button className='text-white p-3 bg-[#1F1924] rounded-lg text-sm hover:bg-[#20152B] hover:border hover:border-[#8c47d180]'>Tailwind Css</button>
            <button className='text-white p-3 bg-[#1F1924] rounded-lg text-sm hover:bg-[#20152B] hover:border hover:border-[#8c47d180]'>React</button>
            <button className='text-white p-3 bg-[#1F1924] rounded-lg text-sm hover:bg-[#20152B] hover:border hover:border-[#8c47d180]'>JavaScript</button>
            <button className='text-white p-3 bg-[#1F1924] rounded-lg text-sm hover:bg-[#20152B] hover:border hover:border-[#8c47d180]'>WordPress</button>
            <button className='text-white p-3 bg-[#1F1924] rounded-lg text-sm hover:bg-[#20152B] hover:border hover:border-[#8c47d180]'>Figma</button>
            <button className='text-white p-3 bg-[#1F1924] rounded-lg text-sm hover:bg-[#20152B] hover:border hover:border-[#8c47d180]'>Git</button>
            <button className='text-white p-3 bg-[#1F1924] rounded-lg text-sm hover:bg-[#20152B] hover:border hover:border-[#8c47d180]'>Mongo DB</button>
          </div>

        </div>
      </div>
    </div>
  )
}
