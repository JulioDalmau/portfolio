import React from 'react'
import gmail from '../assets/socialMedia/gmail.png';
import wpp from '../assets/socialMedia/wpp.png';
import github from '../assets/socialMedia/github.png';
import linkedin from '../assets/socialMedia/linkedin.png';

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0D0D0D] text-[#F2F2F2] max-sm:pb-24">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#5550F2]">
            Contacto
          </p>
        </div>
            <div className='w-full grid grid-cols-4 gap-5 mt-28 pt-8'>
               

                <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkVWFPGDqfPPlRLgFpGLNTLNzmcsZmDBqGhpWcPNvgVcdplvhkslLGSfFJKlZzBDCXdFMP"
                    className="place-self-center hover:scale-125 duration-500 rounded-full shadow-md shadow-[#7D79F2]"
                    aria-label="Gmail"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img className='bg-white rounded-full border-b-gray-900 border-r-1' width={60} src={gmail} alt="Gmail" />
                </a>
                    
                <a
                    href="https://www.linkedin.com/in/juliodalmau/"
                    className="place-self-center hover:scale-125 duration-500 rounded-full shadow-md shadow-[#7D79F2]"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className='bg-white rounded-full border-b-gray-900 border-r-1' width={60} src={linkedin} alt="LinkedIn" />
                </a>
                <a
                    href="https://github.com/JulioDalmau"
                    className="place-self-center hover:scale-125 duration-500 rounded-full shadow-md shadow-[#7D79F2]"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className='bg-white rounded-full border-b-gray-900 border-r-1' width={60} src={github} alt="GitHub" />
                </a>
                <a
                    href="https://wa.me/5491158673934"
                    className="place-self-center hover:scale-125 duration-500 rounded-full shadow-md shadow-[#7D79F2]"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className='bg-white rounded-full border-b-gray-900 border-r-1' width={60} src={wpp} alt="WhatsApp" />
                </a>
                
            </div>
            </div>
        </div>
  )
}

export default Contact