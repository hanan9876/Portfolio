import React from "react";
import { FaGraduationCap } from "react-icons/fa";

export const Experience = () => {
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
        <div className="flex flex-col mt-5 items-start">
          <div className="flex items-center">
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
              Work Experience
            </h2>
          </div>

          <br />

          <div
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
              hover:border 
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
                <h3 className="text-white text-lg sm:text-xl font-bold group-hover:text-[#8C45CC]">
                  Frontend Developer
                </h3>
                <h4 className="text-[#C13C77] text-base sm:text-lg font-bold">
                  Digital Ops
                </h4>
              </div>

              <div className="bg-[#2E2735] p-2 rounded-2xl">
                <p className="text-[#8C8595] text-sm sm:text-base">
                  August 2025 – Present
                </p>
              </div>
            </div>

            <br />

            <div>
              <p className="text-[#8C8595] text-sm sm:text-base">
                Developed loan management interfaces and customer portals for a
                leading lending platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
