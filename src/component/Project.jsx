import React from "react";
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.jpeg";
import project6 from "../assets/project6.jpeg";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A fully functional e-commerce platform built with WooCommerce and custom React components for enhanced user experience.",
    image: project1,
    tech: ["HTML 5", "CSS", "Bootstrap"],
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    description:
      "A modern fintech dashboard with responsive UI, charts, and secure authentication.",
    image: project2,
    tech: ["React", "Tailwind", "Chart.js"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio website with smooth animations, responsive design, and optimized performance.",
    image: project3,
    tech: ["React", "Tailwind", "Vite"],
  },
  {
    id: 4,
    title: "Admin Panel",
    description:
      "Role-based admin panel with data tables, filters, and API integration.",
    image: project4,
    tech: ["React", "REST API", "JWT"],
  },
  {
    id: 5,
    title: "Landing Page",
    description:
      "High-converting landing page with SEO optimization and fast load times.",
    image: project5,
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    title: "Web App UI",
    description:
      "Clean and modern UI design for scalable web applications.",
    image: project6,
    tech: ["UI/UX", "Figma", "React"],
  },
];

export const Project = () => {
  return (
    <section
      className="
        flex flex-col items-center text-center
        gap-6 mt-35 px-4 sm:px-6 lg:px-0 
      "
    >
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F2F1F4]">
          My{" "}
          <span className="bg-linear-to-r from-[#9E49C5] to-[#DC519B] bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
      </div>

      <p className="max-w-2xl text-sm sm:text-lg text-[#8C8595]">
        A showcase of my recent work and contributions across various domains
        including e-commerce, fintech, and web applications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              group w-full rounded-3xl bg-[#1F1924]
              hover:border hover:border-[#8c47d180]
              transition-all duration-300
            "
          >
            <div className="w-full overflow-hidden rounded-md aspect-16/10">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full h-full object-cover
                  transition-transform duration-300 ease-in-out
                  group-hover:scale-105
                "
              />
            </div>

            <div className="flex flex-col items-start px-6 pt-5 pb-6">
              <h2
                className="
                  text-white text-xl sm:text-2xl font-bold
                  transition-colors duration-300
                  group-hover:text-[#8444C5]
                "
              >
                {project.title}
              </h2>

              <p className="text-sm sm:text-md text-[#8C8595] mt-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                {project.tech.map((item, index) => (
                  <button
                    key={index}
                    className="text-white px-3 py-1 bg-[#2E2735] rounded-lg text-xs"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
