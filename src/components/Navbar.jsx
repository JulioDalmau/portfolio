import React, { useState } from "react";
import data from "../data/data";
import logo from "../assets/JD.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false);
  const handleClick = () => setNavMobile(!navMobile);
  const mobileActive = !navMobile
    ? "hidden"
    : "absolute top-0 left-0 w-full h-screen bg-[#115959] flex flex-col justify-center items-center";
  const NavOpen = !navMobile ? (
    <GiHamburgerMenu size={25} cursor="pointer" />
  ) : (
    <AiOutlineClose size={25} cursor="pointer" />
  );

  return (
    <>
      <div className="w-full fixed top-0 bg-[#115959] text-[#F2F2F2]">
        <div className="container mx-auto px-5 py-5 flex justify-between">
          
            <Link className="flex items-center gap-2 " to="home" smooth={true} duration={600}>
              <img src={logo} alt="logo" width={30}></img>
              <span
                className="hidden md:flex space-y-1 text-bla font-extrabold font-montserrat">
                Julio Dalmau
              </span>
            </Link>
         

          {/* Desktop menu */}
          <div>
            <ul className="hidden md:flex space-x-7 text-[#E4EAF2] font-montserrat font-bold mr-10">
              <li>
                <Link to="about" smooth={true} duration={600}>
                  {data.es.navbar[0]}
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={600}>
                  {data.es.navbar[1]}
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={600}>
                  {data.es.navbar[2]}
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={600}>
                  {data.es.navbar[3]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu */}
          <ul className={mobileActive}>
            <li className="py-5 text-2xl">
              <Link
                onClick={handleClick}
                to="about"
                smooth={true}
                duration={600}
              >
                {data.es.navbar[0]}
              </Link>
            </li>
            <li className="py-5 text-2xl">
              <Link
                onClick={handleClick}
                to="projects"
                smooth={true}
                duration={600}
              >
                {data.es.navbar[1]}
              </Link>
            </li>
            <li className="py-5 text-2xl">
              <Link
                onClick={handleClick}
                to="skills"
                smooth={true}
                duration={600}
              >
                {data.es.navbar[2]}
              </Link>
            </li>
            <li className="py-5 text-2xl">
              <Link
                onClick={handleClick}
                to="contact"
                smooth={true}
                duration={600}
              >
                {data.es.navbar[3]}
              </Link>
            </li>
          </ul>

          {/* Hamburguer menu */}
          <div onClick={handleClick} className="md:hidden z-10">
            {NavOpen}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
