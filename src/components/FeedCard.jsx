import React from 'react'
import { fadeIn } from '../utils/motion'
import { motion } from 'framer-motion'

const FeedCard = ({index, testimonial, name, designation, company, image}) => {
  return (
    <motion.div 
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    variants={fadeIn("","spring", index * 0.5, 0.75)}>
        <p className='text-white font-black text-[48px]'>"</p>
        <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
            <div className='flex-1 flex flex-col'>
                <p className="text-white font-medium text-[1rem]">
                    <span className="blue-text-gradient">@</span>{name}
                </p>
                <p className='mt-1 text-secondary text-[12px]'>{designation} of {company}</p>
            </div>
            <img
            className="w-10 h-10 rounded-full object-cover"
             src={image} 
             alt={`feedback-by-${name}`} />
        </div>
        </div>
    </motion.div>
  )
}

export default FeedCard
