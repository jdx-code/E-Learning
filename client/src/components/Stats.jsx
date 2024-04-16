import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion' 
import { NavLink } from 'react-router-dom'

const stats = [
    { id: 1, name: 'Team of experts', value: '10+' },
    { id: 2, name: 'Free Courses', value: '4' },
    { id: 3, name: 'Premium Courses', value: '3' },
  ]

const links = [        
    { name: 'Enroll now', to: 'https://docs.google.com/forms/d/e/1FAIpQLScOF-wMyki2RrpToBKCNiS--xniFngmWXMrOM9iivyc2mEqgQ/viewform' },
]
  
  const Stats = () => {

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
      <div ref={ref} className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
                variants = {{
                    hidden: { opacity: 0, y: -95},
                    visible: { opacity: 1, y: 0},
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ 
                    duration:0.5, delay: 0.25 
                }}
                className="text-center mb-16"
            >
                <h1 className="text-3xl md:text-4xl mb-8 text-center">Join Our Platform Today</h1>
                <p className="md:px-20">DLSDS is the one of a kind venture that you will love to explore.The time and money invested is sure to be of great worth that will add brilliance to your professional dreams.</p>
            </motion.div>          
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    {stat.value}
                    </dd>
                </div>
                ))}
            </dl>
            <div className='mt-12 text-center'>

                {links.map((link) => (                    
                    <button className='bg-[#ff8a00] text-gray-100 px-4 py-2 rounded-md hover:text-gray-700'>
                    <NavLink
                        to={link.to}
                    >
                        {link.name}
                    </NavLink>
                    </button>                
                ))} 

            </div>
            
        </div>
      </div>
    )
  }

  export default Stats
  