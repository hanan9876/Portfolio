import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { Reveal } from './Reveal';

const skills = [
  "HTML 5",
  "CSS",
  "BootStrap",
  "Tailwind Css",
  "React",
  "JavaScript",
  "WordPress",
  "Figma",
  "Git",
  "Mongo DB",
  "Express JS",
  "Node JS",
  "TypeScript",
  "Responsive Web Design",
  "Shopify Development",
  "Post Man",
  "RestFull APis",
  "Api Integration",
];

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

          <Reveal className='flex items-center group' variant="left">
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
                transition-transform duration-300
                group-hover:rotate-6 group-hover:scale-110
              '
            >
              <FaLaptopCode />
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
          </Reveal>

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
            {skills.map((skill, index) => (
              <Reveal
                key={skill}
                as="button"
                variant="scale"
                delay={(index % 5) + 1}
                className='
                  text-white p-3 bg-[#1F1924] rounded-lg text-sm cursor-pointer
                  border border-transparent
                  transition-all duration-300
                  hover:bg-[#20152B] hover:border-[#8c47d180]
                  hover:-translate-y-1 hover:scale-105
                  hover:shadow-[0_8px_20px_-8px_rgba(158,73,197,0.6)]
                '
              >
                {skill}
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
