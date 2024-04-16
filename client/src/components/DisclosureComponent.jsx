import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion' 
import { Disclosure } from '@headlessui/react'
// import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const disclosures = [
  {
    title: 'About our aim..',
    desc: 'In this age of digitalisaion, DLSDS aims at providing online job oriented soft skills courses for people who are seeking a job.',
    defaultOpen:true

  },
  {
    title: 'Soft skills.. Life skills..',
    desc: 'Soft skills are also known as life skills as it shows the right path to a successful professional career.Dreams Endeavour is here to give wings to your dreams.',
    defaultOpen:false
  },
  {
    title: 'About our venture..',
    desc: 'DLSDS is the one of a kind venture that you will love to explore.The time and money invested is sure to be of great worth that will add brilliance to your professional dreams.',
    defaultOpen:false
  },
  {
    title: 'Our aim..',
    desc: 'In this age of digitalisaion, DLSDS aims at providing online job oriented soft skills courses for people who are seeking a job.',
    defaultOpen:true

  },
  {
    title: 'Life skills..',
    desc: 'Soft skills are also known as life skills as it shows the right path to a successful professional career.Dreams Endeavour is here to give wings to your dreams.',
    defaultOpen:false
  },    
]

const DisclosureComponent = () => {

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
      
        <div ref={ref} className="lg:w-[50%] px-4 pt-16">
          <motion.div 
            variants = {{
              hidden: { opacity: 0, x: -95},
              visible: { opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration:0.5, delay: 0.25 }}  
            className="mx-auto w-full max-w-md rounded-2xl bg-white p-2"
          >

            {disclosures.map((disclosure) => (
              <Disclosure defaultOpen={disclosure.defaultOpen}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                    <span>{disclosure.title}</span>                
                    <FontAwesomeIcon icon={faPlus} style={{ color: '#7fb33f' }}/>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                    {disclosure.desc}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            ))}        
            
          </motion.div>            
                
        </div>
      
    </>   
    
  )
}
export default DisclosureComponent