import React from 'react'
import data from "../data/data";

const Footer = () => {
  return (
        <div className="w-full h-10 bg-[#0D0D0D] text-[#F2F2F2] ">

    <div className='justify-center text-center'>{data.es.Footer.copyright}</div>
        </div>
  )
}

export default Footer