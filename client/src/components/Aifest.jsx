import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion' 
import logoSizeL from '../assets/AIFEST-logo.png'

const content = [
    {
        img: logoSizeL,
        title: 'Digital Literacy & Skill Development Society',
        desc: '(DLSDS) is a non-profit organization dedicated to bridging the digital gap in North-East India. Committed to making digital literacy accessible to all, DLSDS actively works towards empowering individuals with the skills needed to thrive in the digital age. By providing comprehensive training programs, workshops, and awareness initiatives, DLSDS ensures that communities, regardless of their socio-economic background, have the knowledge and tools to navigate the digital landscape. With a focus on practical learning and real-world applications, DLSDS equips learners with not just theoretical knowledge but also hands-on experience, enabling them to apply their skills effectively in various fields. By fostering a culture of continuous learning and adaptation, DLSDS strives to create a digitally proficient society where everyone has the opportunity to harness the full potential of technology for personal and professional growth.'
    }
]

const Aifest = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
        // Fire the animation
        mainControls.start("visible")

        }
    }, [isInView])

  return (
    <>    
        <section id="aifest">
            <div ref={ref} className='flex flex-col'>
                <motion.h1 
                    variants = {{
                        hidden: { opacity: 0, y: 75},
                        visible: { opacity: 1, y: 0},
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ 
                        duration:0.5, delay: 0.25 
                    }}
                    className='mt-12 text-3xl md:text-4xl mb-8 text-center'
                >
                    About Us
                </motion.h1>
                <div className='w-[100%] flex flex-col-reverse lg:flex-row'>            
                    <motion.div 
                        variants = {{
                            hidden: { opacity: 0, x: 95},
                            visible: { opacity: 1, x: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ 
                            duration:0.5, delay: 0.25 
                        }}
                        className='items-center p-4 m-4 gap-5 lg:w-[62%]'
                    >
                        <h1 className='text-3xl md:text-4xl mb-5'>{content[0].title}</h1>
                        <p>{content[0].desc}</p>
                    </motion.div>
                    <div className='mx-auto lg:w-[38%] flex justify-center items-center'>
                        <motion.img
                            variants = {{
                                hidden: { opacity: 0, x: -95},
                                visible: { opacity: 1, x: 0},
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ 
                                duration:0.5, delay: 0.25 
                            }} 
                            src={content[0].img}
                        />
                    </div>
                </div>
            </div>
        </section>                 
    </>
  )
}

export default Aifest