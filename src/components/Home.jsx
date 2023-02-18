import React from "react";
import data from "../data/data";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0D0D0D]">
      <div className="max-w-screen-lg mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#737372] font-semibold text-2xl font-roboto">
          {data.es.init[0]}
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#4429F2] font-montserrat">
          {data.es.init[1]}
        </h1>
        <h2 className="text-4xl sm:7xl font-bold text-[#7D79F2] font-roboto">
          {data.es.init[2]}
          <Typed
            strings={data.es.init[3]}
            typeSpeed={150}
            backSpeed={60}
            loop
            showCursor={false}
            className="text-[#5550F2] font-montserrat font-bold"
          />{" "}
          Developer
        </h2>
        <p className="text-[#7D79F2] py-4 max-w-[400px] font-montserrat font-semibold">{data.es.init[4]}</p>
        <div className="mt-5">
          <Link
            className="text-[#F2F2F2] font-semibold py-3 px-3 border-2 hover:bg-[#4429F2] hover:border-[#4429F2] hover:text-[#0A0C0D] hover:font-semibold cursor-pointer"
            to="skills"
            smooth={true}
            duration={600}
          >
            Mirá mis proyectos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
