import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper} from '../hoc'
import { styles } from '../styles'
import { projects} from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import ProjectCard from './ProjectCard'

const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My WORK</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    <div className="w-full flex">
      <motion.p
      variants={fadeIn("","", 0.1, 1)}
      className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following project showcases my skills and experience though real-world examples of my work.
        Each project is briefly described with links to code repositories and live demos in it. It reflects my
         abilitiy to solve complex problems, works with different technologies, and manage projects effectively.
      </motion.p>
    </div>
    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, i)=>(
        <ProjectCard
        key={`project-${i}`}
        index={i}
        {...project}
        />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works, "")