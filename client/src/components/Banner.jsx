import React from 'react'

import home_icon from '../assets/icons/house.png'
import question_icon from '../assets/icons/question.png'
import box_icon from '../assets/icons/box.png'
import shopping_image from '../assets/images/shopping.png'

const Banner = () => {
  return (
    <section className='min-h-[75vh] px-25 flex gap-20 justify-between items-center'>
      <div className='flex flex-col gap-3 basis-1/2'>
          <div className='flex items-center py-3 pl-6 pr-18'>
               <div className='w-19 mr-9'>
                    <img src={home_icon} alt="icon"  />
               </div>
               <div>
                    <h3 className='roboto font-bold text-2xl 
                    text-[#363958]'>Find the Perfect Fit</h3>
                    <p className='text-[#3E3E3E] roboto mt-3'>
                         Everybody is different, which is why we
                    offer styles for every body.</p>
               </div>
          </div>
          <div className='flex items-center py-3 pl-6 pr-18'>
               <div className='w-19 mr-9'>
                    <img src={box_icon} alt="icon"  />
               </div>
               <div>
                    <h3 className='roboto font-bold text-2xl 
                    text-[#363958]'>Free Exchanges</h3>
                    <p className='text-[#3E3E3E] roboto mt-3'>
                    One of the many reasons you can shop
                    with peace of mind.</p>
               </div>
          </div>
          <div className='flex items-center py-3 pl-6 pr-18'>
               <div className='w-19 mr-9'>
                    <img src={question_icon} alt="icon"  />
               </div>
               <div>
                    <h3 className='roboto font-bold text-2xl 
                    text-[#363958]'>Contact Our Seller</h3>
                    <p className='text-[#3E3E3E] roboto mt-3'>
                    They are here to help you. That's quite 
                    literally what we pay them for.</p>
               </div>
          </div>
      </div>
      <div className='basis-1/2'>
          <img src={shopping_image} alt="shopping" />
      </div>
    </section>
  )
}

export default Banner
