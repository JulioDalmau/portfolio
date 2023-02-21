import React,{useEffect}from "react";
import data from "../data/data";
import profilePicture from "../assets/jdPicture.png";
import julioDalmau from '../assets/about/julioDalmau.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, [])
  
  return (
    <div name="about" className="w-full h-screen bg-[#0D0D0D]  max-sm:pb-24">
      <div className="flex flex-col justify-center items-center w-full h-full pt-10">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#5550F2] whitespace-nowrap font-montserrat text-[#F2F2F2]">
              Sobre mí
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4">
          <div className="md:justify-start md:ml-0 mx-auto"
          >
            <img
              data-aos="zoom-in"
              className="w-[300px] shadow-md shadow-[#7D79F2]"
              src={profilePicture}
              alt="foto perfil"
            />
          </div >
          <div className="text-[#7D79F2] text-lg">
            <div data-aos="zoom-in" data-aos-delay="400">
            <p className="px-4 font-semibold font-roboto">{data.es.aboutMe[0]}</p>
            <p className="px-4 font-semibold font-roboto">{data.es.aboutMe[1]}</p>
            </div>
            <div className="justify-self-center text-center pt-4" data-aos="zoom-in" data-aos-delay="700">
                <a href={julioDalmau} type="application/pdf" target="_blank" rel="noreferrer" >
              <button className="text-[#F2F2F2] font-semibold py-3 px-3 border-2 my-2 hover:bg-[#4429F2] hover:border-[#4429F2] hover:text-[#0A0C0D] hover:font-semibold font-montserrat">
                {data.es.aboutMe[2]}
              </button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
