import React from 'react'
import hero_image from '../assets/images/model.png'
import Button from './Others/Button'
const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row gap-10  md:gap-10 px-5 xl:px-25 lg:px-20 items-center min-h-[85vh]'>
          <div className='text-center md:text-start order-2 md:order-1 sm:px-10 md:px-0 lg:text-start'>
               <h1 className='babes text-5xl  sm:text-7xl'>
                    <span className='text-[#FABE4C]'>Be the Penguins</span><br />
                    <span className='text-[#363958]'>of Winter</span>
               </h1>
               <p className='roboto text-[#3E3E3E] mb-3'>Lorem Ipsum is simply dummy text of the printing 
               and typesetting industry.</p>
               <Button />
          </div>
          <div className='mx-auto order-1 md:order-2'>
               <img src={hero_image} alt="" className='w-90 md:w-full' />
          </div>
    </section>
  )
}

export default Hero
