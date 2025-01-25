import React from 'react'
import hero_image from '../assets/images/model.png'
import Button from './Others/Button'
const Hero = () => {
  return (
    <section className=' lg:flex gap-30 xl:px-25 lg:px-20 items-center min-h-[85vh]'>
          <div className='text-center lg:text-start'>
               <h1 className='babes text-7xl'>
                    <span className='text-[#FABE4C]'>Be the Penguins</span><br />
                    <span className='text-[#363958]'>of Winter</span>
               </h1>
               <p className='roboto text-[#3E3E3E] mb-3'>Lorem Ipsum is simply dummy text of the printing 
               and typesetting industry.</p>
               <Button />
          </div>
          <div>
               <img src={hero_image} alt="" />
          </div>
    </section>
  )
}

export default Hero
