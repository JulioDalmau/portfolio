import React from "react";
import data from "../data/data";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

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

        <h2 className="text-[28px] md:text-3xl flex flex-wrap font-bold text-[#7D79F2] font-roboto">
          {data.es.init[2]}
          <h2 className="ml-2 mr-1 text-[#5550F2] font-roboto font-bold justify-center">
            <Typewriter
              options={{
                strings: data.es.init[3],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </h2>
          Developer
        </h2>
        <p className="text-[#7D79F2] py-4 max-w-[400px] font-montserrat font-semibold">
          {data.es.init[4]}
        </p>
        <div className="mt-5">
          <Link
            className="text-[#F2F2F2] font-semibold py-3 px-3 border-2 hover:bg-[#4429F2] hover:border-[#4429F2] hover:text-[#0A0C0D] hover:font-semibold cursor-pointer"
            activeClass="active"
            to="projects"
            smooth={true}
            duration={1200}
          >
            Mirá mis proyectos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
