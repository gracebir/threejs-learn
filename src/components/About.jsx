import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({title, icon, index}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w=16 h-16 object-contain"
           />
           <h3 className="text-white text-[20px] text-center font-bold">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p className="mt-4 text-secondary tex-[1.0625rem] max-w-3xl leading-[30px]" variants={ fadeIn("","",0.1, 1)}>
      I'm a skilled software engineer with experience with Typescipt and Javascript
      , and expertise in libraries like React, Three.js enthusiast, Next.js, and Node.js. I'm a
      quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions
       that solve real-world problems. let's work together to bring your ideas to life!
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, i)=> (
        <ServiceCard key={i} index={i} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")