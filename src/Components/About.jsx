import React from 'react'
import avatar from '../img/Profile1.jpg'
import { BriefcaseBusiness } from "lucide-react";
import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <div id='about' className='text-white md:flex-col md:flex overflow-hidden items-center md:flex-wrap md:justify-center  shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        
            <div className='flex flex-col justify-center items-center'>
                <p className=" text-sm md:text-lg text-neutral-400">Get to know more!</p>
                <h1 className="text-2xl md:text-5xl font-semibold ">About Me</h1>
            </div>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center md:justify-center mt-5 md:gap-16'>
               <div>
                    <img src={avatar} className='md:h-80 rounded-xl ' alt="" />
               </div>
                
                <div className='flex flex-col flex-wrap justify-center'>
                    <div className='flex justify-center gap-5 mt-5 md:gap-10 items-center '>
                        <div className="flex flex-col justify-center items-center p-1 md:p-2 border border-neutral-400 rounded-xl">
                            <BriefcaseBusiness size={30} />
                            <h1 className="text-md md:text-xl font-semibold">Experience</h1>
                            <p className="text-sm md:text-lg text-neutral-400 font-medium">2+ Years</p>
                            <p className="text-xs  tracking-tighter leading-tight md:text-lg text-neutral-400 font-bold md:font-medium">MERN Stack Developer</p>
                        </div>
                        <div className="flex flex-col justify-center items-center p-1  md:p-2 border border-neutral-400 rounded-xl">
                            <GraduationCap size={30} />
                            <h1 className="text-md md:text-xl font-semibold">Education</h1>
                            <p className="text-sm md:text-lg text-neutral-400 font-medium">EnTC</p>
                            <p className="text-xs  tracking-tighter leading-tight md:text-lg text-neutral-400 font-bold md:font-medium">SGBAU University</p>
                        </div>
                    </div>
                    

                </div>
                <div className="flex text-center line-clamp-6 md:line-clamp-3 mt-2 text-md md:text-xl">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ducimus architecto id beatae animi corrupti dolorem quos. Maxime libero quas illo magnam quibusdam nemo laborum ea excepturi harum ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam numquam repellat eius sequi autem tempora.</p>
                </div> 

            </div>
        
      
    </div>
  )

}

export default About