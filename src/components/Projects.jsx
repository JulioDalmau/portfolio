import React, {useEffect} from "react";
import data from "../data/data";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {

  const {projects} = data.es.Projects

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, [])
    
  return (
    <div name="projects" className="w-full md:h-screen text-[#F2F2F2] bg-[#0D0D0D] max-sm:pb-28 max-sm:pt-28">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="pb-9 my-5">
          <p className="text-4xl font-bold inline border-b-4 text-[#F2F2F2] border-[#5550F2] font-montserrat">{data.es.Projects.title}</p>  
        </div>

      {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {/* Items */}
                {projects.map((project, index) => (
          <div key={index} 
          style={{backgroundImage: `url(${project.path})`}}
          className="shadow-md shadow-[#7D79F2] group container rounded-md flex justify-center items-center text-center  mx-auto content-works font-montserrat"
          data-aos="zoom-in"
          >

            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
               <span className="text-2xl font-bold text-[#F2F2F2] tracking-wider">
               {project.name}
               </span>
               <div className="pt-8 text-center">
                <a href={project.linkGithub} target='_blank' rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#F2F2F2] text-[#040c16] font-bold text-lg">
                        Github
                    </button>
                </a>
                {/* <a href={project.linkWeb} target="_blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#F2F2F2] text-[#040c16] font-bold text-lg">
                        Website
                       </button>
                </a> */}
               </div>
            </div>
            </div>))}

        </div>
      </div>
    </div>
  );
};

export default Projects;
