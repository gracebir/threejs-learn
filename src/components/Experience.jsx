import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import {styles } from '../styles'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
    contentStyle={{
      background: "#1d1856",
      color:"#fff"
    }}
    contentArrowStyle={{
      borderRight: '7px solid #232631'
    }}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img 
        className="w-[60%] h-[60%] object-contain"
        src={experience.icon} 
        alt={experience.company_name} />
      </div>
    }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[1rem] font-semibold'>{experience.company_name}</p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, i)=>(
          <li 
          className="text-white-100 text-[.75rem] pl-1 tracking-wider"
          key={`experience-point-${i}`}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have done so far.</p>
      <h2 className={styles.sectionHeadText}>Work experience</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((exp,i)=> (
          <ExperienceCard key={i} experience={exp}/>
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")