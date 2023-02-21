import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, [])

  return (
    <div name="skills" className="w-full h-screen bg-[#0D0D0D] text-gray-300 pt-16 max-sm:pt-32">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="mb-5">
          <p className="text-4xl font-bold inline border-b-4 border-[#5550F2] ml-5">
            Skills
          </p>
        </div>
        
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8">
          <div className="shadow-md shadow-[#7D79F2] hover:scale-110 duration-500 mx-auto px-4 bg-[#262626]" data-aos="flip-right">
            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='react' />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#7D79F2] hover:scale-110 duration-500 mx-auto px-4 bg-[#262626]"
          data-aos="flip-right" data-aos-delay="400">
          <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="redux"/>
            <p className="my-4">REDUX</p>
          </div>
          <div className="shadow-md shadow-[#7D79F2] hover:scale-110 duration-500 mx-auto px-4 bg-[#262626]"
          data-aos="flip-right" data-aos-delay="700">
          <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs"/>
          
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#7D79F2] hover:scale-110 duration-500 mx-auto px-4 bg-[#262626]"
          data-aos="flip-right" data-aos-delay="1000">
            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="expressjs"/>
            <p className="my-4">EXPRESS JS</p>
          </div>
          <div className="shadow-md shadow-[#7D79F2] hover:scale-110 duration-500 mx-auto px-4 bg-[#262626]"
          data-aos="flip-right" data-aos-delay="1300">
            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="postgresql"/>
            <p className="my-4">POSTGRESQL</p>
          </div>
          <div className="shadow-md shadow-[#7D79F2] hover:scale-110 duration-500 mx-auto px-4 bg-[#262626]"
          data-aos="flip-right" data-aos-delay="1600">
          <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"  alt="mongodb"/>
            <p className="my-4">MONGODB</p>
          </div>
          <div className="shadow-md shadow-[#7D79F2] hover:scale-110 duration-500 mx-auto px-4 bg-[#262626]"
          data-aos="flip-right" data-aos-delay="1900">
          <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="firebase"/>
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="shadow-md shadow-[#7D79F2] hover:scale-110 duration-500 mx-auto px-4 bg-[#262626]"
          data-aos="flip-right" data-aos-delay="2200">
            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwindcss"/>
            <p className="my-4">TAILWIND CSS</p>
          </div>
          <div className="shadow-md shadow-[#7D79F2] hover:scale-110 duration-500 mx-auto px-4 bg-[#262626]"
          data-aos="flip-right" data-aos-delay="2500">
          <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git"/>
            <p className="my-4">GIT</p>
          </div>
          <div className="shadow-md shadow-[#7D79F2] hover:scale-110 duration-500 mx-auto px-4 bg-[#262626]"
          data-aos="flip-right" data-aos-delay="2800">
          <img className="devicon-devicon-plain path" width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" />
            <p className="my-4">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
