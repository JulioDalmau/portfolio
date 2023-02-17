import React from 'react'
import data from '../data/data'
import profilePicture from '../assets/jdPicture.png'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0A0C0D] text-[#F2F2F2]'>
        <div className='flex flex-col justify-center items-center w-full h-full pt-10'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-[#115959] whitespace-nowrap'>Sobre mí</p>
                </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4'>
                <div className='md:justify-end md:items-end mx-auto'> 
                    <img className='w-[300px] ' src={profilePicture} alt="foto perfil" />
                </div>
                <div>
                    <p className='px-4'>{data.es.aboutMe[0]}</p>
                    <p className='px-4'>{data.es.aboutMe[1]}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About