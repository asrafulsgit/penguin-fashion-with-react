import React from 'react'
import jacket from '../../assets/images/jacket-1.png'
import Button from './Button'
const Card = () => {
  return (
      <div className='flex flex-col justify-center items-center p-4 '>
               <div className='h-[293px] w-full flex justify-center p-5 bg-[#F1F1F1] 
               rounded-2xl'>
                    <img className='h-[100%]' src={jacket} alt="" />
               </div>
               <div className='pl-1 mt-4'>
                         <h3 className='roboto font-bold md:text-xl lg:text-2xl text-[#363958]' >Yelow Coat Jacket</h3>
                         <p className='lg:mt-3 md:mt-1.5 roboto md:text-sm lg:text-[16px] text-[#3E3E3E]'>Lorem Ipsum is simply dummy text of the 
                         printing and typesetting industry.</p>
                         <div className='mt-3 flex justify-between items-center'>
                              <h1 className='roboto text-2xl font-bold sm:text-4xl text-[#FABE4C]' >$234</h1>
                              <Button />
                         </div>
               </div>
      </div>
  )
}

export default Card
