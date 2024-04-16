import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion' 
import CourseOne from '../assets/c1.jpg'
import CourseTwo from '../assets/c2.jpg'
import CourseThree from '../assets/c3.jpg'
import CourseFour from '../assets/c4.jpg'
import CourseFive from '../assets/c5.jpg'
import CourseSix from '../assets/c6.jpg'


const CourseCards = () => {

    const freeCoursesRef = useRef(null);
    const premiumCoursesRef = useRef(null);
    
    const freeCoursesControls = useAnimation();
    const premiumCoursesControls = useAnimation();

    const freeCoursesInView = useInView(freeCoursesRef, { once: true });
    const premiumCoursesInView = useInView(premiumCoursesRef, { once: true });

    useEffect(() => {
        if (freeCoursesInView) {
            // Fire the animations independently
            freeCoursesControls.start("visible");          
        }
    }, [freeCoursesInView]);

    useEffect(() => {
        if (premiumCoursesInView) {
            // Fire the animations independently
            premiumCoursesControls.start("visible");
        }
    }, [premiumCoursesInView]);

  const freeCourses = [
    { id: 1, name: 'Spoken English', desc: 'Introduction, Grammar, Reading, Conversational Skills, Vocabulary Pronunciation.', price: 'FREE', img: CourseOne },
    { id: 2, name: 'Personality Development', desc: 'Introduction, Developing personality, Communication skills, Body language', price: 'FREE', img: CourseTwo },    
    { id: 3, name: 'Employability Skills', desc: 'Communication skills, Interview skills, Presentation skills, Dress code ethics', price: 'FREE', img: CourseFour },    
    { id: 4, name: 'Personality Development', desc: 'Introduction, Developing personality, Communication skills, Body language', price: 'FREE', img: CourseTwo },
  ]
  
  const premiumCourses = [        
    { id: 1, name: 'Interview Skills', desc: 'Interview preparation, Common Interview Questions, CV/Cover-letter, Mock Interviews.', price: 'Rs.500', img: CourseSix },
    { id: 2, name: 'Job seeker’s know-how', desc: 'How to apply for different jobs, opening account in LinkedIn and other online platforms', price: 'Rs.500', img: CourseThree },    
    { id: 3, name: 'Grooming', desc: 'Dressing skills, Lifestyle tips , Personal hygiene, Conversational skills, Body language', price: 'Rs.500', img: CourseFive },
  ]

  return (
    <>  
        <div id="courses">
            <h1 className='text-center mt-8 text-4xl'>Free Courses</h1>
            
            <div ref={freeCoursesRef} className='flex flex-col items-center sm:flex-row sm:justify-center sm:flex-wrap'>
                
                {freeCourses.map((course)=> (
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0, rotateY: 180 },
                            visible: { opacity: 1, rotateY: 0 },
                        }}
                        initial="hidden"
                        animate={freeCoursesControls}
                        transition={{ 
                            duration: 1, delay: 0.5 
                        }}
                        key={course.id} className='w-72 mt-8 mb-8 p-2 border-2 border-blue-200 shadow-2xl rounded-lg sm:mx-4'>
                        <img className="rounded-md" src={course.img} />
                        <div className='text-center p-2'>
                            <p className='font-semibold'>{course.name}</p>
                            <p className='text-sm'>{course.desc}</p>
                        </div>                
                    </motion.div>
                ))}            
                        
            </div>


            <h1 className='text-center mt-8 text-4xl'>Premium Courses</h1>
            
            <div ref={premiumCoursesRef} className='flex flex-col items-center sm:flex-row sm:justify-center sm:flex-wrap'>
                
                {premiumCourses.map((course)=> (
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0, rotateY: 180 },
                            visible: { opacity: 1, rotateY: 0 },
                        }}
                        initial="hidden"
                        animate={premiumCoursesControls}
                        transition={{ 
                            duration: 1, delay: 0.5 
                        }}
                        key={course.id} className='w-72 mt-8 mb-8 p-2 border-2 border-blue-200 shadow-2xl rounded-lg sm:mx-4'
                    >
                        <span className='absolute ml-[12.4rem] bg-[#f7d852] border-2 border-red-400 px-2 rounded-md'>{course.price}</span>
                        <img className="rounded-md" src={course.img} />
                        <div className='text-center p-2'>
                            <p className='font-semibold'>{course.name}</p>
                            <p className='pb-2 text-sm'>{course.desc}</p>                            
                        </div>                
                    </motion.div>
                ))}            
                        
            </div>
        </div>       
        
    </>
  )
}

export default CourseCards