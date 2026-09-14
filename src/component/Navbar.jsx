import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCode } from "react-icons/fa6";

export const Navbar = () => {
  const location = useLocation();

  const isProjectsPage = location.pathname === "/projects";

  return (
    <header className="animate-fade-in fixed top-0 left-0 w-full z-50 text-gray-400 body-font bg-[#141018]/80 backdrop-blur-md shadow-[0_4px_30px_-12px_rgba(158,73,197,0.4)]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex group">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0 text-white p-2 text-md rounded-xl bg-linear-to-r from-[#9E49C5] to-[#DC519B] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            <FaCode/>
        </a>
          <span className="ml-3 text-xl bg-linear-to-r from-[#9E49C5] to-[#DC519B] bg-clip-text text-transparent">
            Hanan Arshad
          </span>
        </div>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="nav-link mr-5 transition-colors duration-300 hover:text-[#8C47D1]">Home</Link>
          <Link to="/projects" className="nav-link mr-5 transition-colors duration-300 hover:text-[#8C47D1]">Projects</Link>

          {!isProjectsPage && (
            <>
              <a href="#about" className="nav-link mr-5 transition-colors duration-300 hover:text-[#8C47D1]">About</a>
              <a href="#contact" className="nav-link mr-5 transition-colors duration-300 hover:text-[#8C47D1]">Contact</a>
            </>
          )}
        </nav>
      </div>
      <hr className="text-gray-800" />
    </header>
  );
};
