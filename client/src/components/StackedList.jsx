import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import POINT from '/point.png'

const points = [
    {
      id: 1,
      title: 'Better Communication Skills',
      location: 'Online Platform',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },       
    {
      id: 2,
      title: 'Reduce fear of public speaking',
      location: 'Online Platform',
      role: 'Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: '3h ago',
      lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
      id: 3,
      title: 'Gain practical knowledge about interviews',
      location: 'Online Platform',
      role: 'Director of Product',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },    
    {
      id: 4,
      title: 'Better understanding of online interviews',
      location: 'Online Platform',
      role: 'Director of Product',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },    
    {
      id: 5,
      title: 'Practically understand and develop Soft Skills',
      location: 'Online Platform',
      role: 'Director of Product',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastSeen: null,
    },
  ]
  
  const StackedList = () => {

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
      <div ref={ref} className="lg:w-[50%] px-4 pt-16">
        <div className="mx-auto w-full max-w-md bg-white">
          <motion.ul 
            variants = {{
              hidden: { opacity: 0, x: 95},
              visible: { opacity: 1, x: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration:0.5, delay: 0.25 }}  

            role="list" className="divide-y divide-gray-100"
          >
            {points.map((point) => (
              <li key={point.id} className="flex gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <img className="h-auto w-6 flex-none rounded-full bg-gray-50" src={POINT} alt="" />
                  <div className="min-w-0 flex-auto">
                    <p className=" text-[0.6rem] sm:text-sm font-semibold leading-6 text-gray-900">{point.title}</p>  
                  </div>
                </div>
                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">              
                  
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                  
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
        
      </div>
      
    )
  }
  
  export default StackedList