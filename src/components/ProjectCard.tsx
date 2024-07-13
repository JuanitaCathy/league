"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'

interface Props {
    image: string;
    title: string;
    text: string;
}

const ProjectCard = ({ image, title, text}: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div
    onClick={handleFlip}
    className='w-[250px] h-[350px] rounded-md cursor-pointer'>
        <motion.div
        className='flip-card-inner w-full h-full relative'
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 0}}
        transition={{ duration: 0.6, animationDirection: 'normal'}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
            <div
            style={{backgroundImage: `url(${image})`}}
            className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'>
                <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]'/>
                <div className='flex flex-col gap-2 py-3 z-[30]'>
                    <h1 className='text-white text-2xl font-semibold'>{title}</h1>
                    <p className='text-gray-200 text-[16px]'>
                        {text}
                    </p>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectCard
