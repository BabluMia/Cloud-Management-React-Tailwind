import React from 'react';
import { ServerIcon,DatabaseIcon,CloudUploadIcon,PaperAirplaneIcon } from "@heroicons/react/solid";
import bgImg from '../assets/cyber-bg.png'

const Hero = () => {
    return (
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between items-center'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto pt-16'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-xl sm:text-2xl'>Unique Sequencing & Production</p>
                    <h1 className=' text-3xl sm:text-5xl md:text-6xl font-bold py-3'>Cloud Management</h1>
                    <p className='text-2xl my-2'>This is our Tech brand</p>
                    <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
                </div>
                <div >
                    <img src={bgImg} alt="" className='md:w-full w-[300px] ' />
                </div>

                
            </div>
        </div>
    );
};

export default Hero;