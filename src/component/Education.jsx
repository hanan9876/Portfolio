import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { Reveal } from './Reveal';

export const Education = () => {
  const items = [
    {
      degree: "BS in Computer Science",
      school: "Goverment College University Faisalabad",
      period: "August 2022 – May 2026",
    },
    {
      degree: "ICS",
      school: "Punjab Group of Colleges",
      period: "August 2020 – May 2022",
    },
    {
      degree: "Matric in Computer Science",
      school: "Lahore Public School",
      period: "August 2018 – May 2020",
    },
  ];

  return (
    <div>
      <div
        className="
          flex
          flex-col
          mt-10
          px-4
          sm:px-6
          lg:px-23
        "
      >
        <div className="flex flex-col mt-5 items-start w-full">
          <Reveal className="flex items-center group" variant="left">
            <a
              href=""
              className="
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
              "
            >
              <FaGraduationCap />
            </a>

            <h2
              className="
                text-white
                text-xl
                sm:text-2xl
                ml-4
                sm:ml-6
                font-bold
              "
            >
              Education
            </h2>
          </Reveal>

          <br />

          {items.map((item, index) => (
            <Reveal
              key={item.degree}
              delay={index + 1}
              className="
                flex
                flex-col
                w-full
                bg-[#1F1924]
                rounded-2xl
                p-6
                sm:p-8
                lg:p-10
                group
                border border-transparent
                card-lift
                mb-8
                hover:border-[#8c47d180]
              "
            >
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-4
                "
              >
                <div>
                  <h3 className="text-white text-lg sm:text-xl font-bold transition-colors duration-300 group-hover:text-[#8C45CC]">
                    {item.degree}
                  </h3>
                  <h4 className="text-[#C13C77] text-base sm:text-lg font-bold">
                    {item.school}
                  </h4>
                </div>

                <div className="bg-[#2E2735] p-2 rounded-2xl transition-colors duration-300 group-hover:bg-[#3a2f45]">
                  <p className="text-[#8C8595] text-sm sm:text-base">
                    {item.period}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
