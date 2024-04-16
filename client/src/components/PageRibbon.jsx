import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion' 

const PageRibbon = ({ pageTitle }) => {

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
    <div ref={ref}>
      <motion.div    
            variants = {{
              hidden: { opacity: 0, x: -95},
              visible: { opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ 
              duration:0.5, delay: 0.25 
            }}       
            className='pageRibbon my-4 w-[68%] md:w-[45%] h-20 flex items-center'
          >
              <p className='pageTitle px-[3.5rem] text-5xl md:text-6xl'> {pageTitle} </p>
          </motion.div>        
    </div>        
    </>   
  )
}

export default PageRibbon