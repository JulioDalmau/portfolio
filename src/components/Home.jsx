import React from "react";
import data from "../data/data";
import Typed from "react-typed";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0A0C0D]">
      <div className="max-w-screen-lg mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#F2F2F2] font-semibold text-2xl">
          {data.es.init[0]}
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#30F2CF]">
          {data.es.init[1]}
        </h1>
        <h2 className="text-4xl sm:7xl font-bold text-[#115959]">
          {data.es.init[2]}
          <Typed
            strings={data.es.init[3]}
            typeSpeed={150}
            backSpeed={60}
            loop
            showCursor={false}
            className="text-[#2EF2BB]"
          />{" "}
          Developer
        </h2>
        <p className="text-[#115959] py-4 max-w-[400px]">{data.es.init[4]}</p>
        <div>
        <button className="text-[#F2F2F2] font-semibold py-3 px-3 border-2 my-2 hover:bg-[#2EF2BB] hover:border-[#2EF2BB] hover:text-[#0A0C0D] hover:font-semibold">Mirá mis proyectos</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
