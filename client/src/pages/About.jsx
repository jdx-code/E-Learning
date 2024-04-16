import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion' 
import Footer from '../components/Footer';
import PageRibbon from '../components/PageRibbon';
import Team from '../components/Team';
import AboutImg from '../assets/about.jpg'
import Payments from '../components/Payments';

const About = () => {

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
      <PageRibbon pageTitle="About" id="about"/>
      <div           
        className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div ref={ref} className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">         

      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 1, delay: 0.5 
        }}       
        className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            {/* <p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p> */}
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">What is Dreams Endeavour ?</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
            Dreams Endeavour is the one of a kind venture that you will love to explore. The time and money invested is sure to be of great worth that will add brilliance to your professional dreams.
            </p>
          </div>
        </div>
      </motion.div>

        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"            
            src={AboutImg}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
        >
          <div className="lg:pr-4">
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ 
                duration: 1, delay: 0.5 
              }}
              className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg"
            >
                            
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Our Platform's main goal</h2>
              <p className="mt-6">
                Soft Skills are a group of fruitful qualities that shape our personality and determine one's flow of life in a social environment.These skills can include grace, good communication skills,presentation skills ,good manners and habits and to maintain cleanliness to name a few.Soft skills are also known as life skills as it shows the right path to a successful professional career.Dreams Endeavour is here to give wings to your dreams.We provide training on soft skills for freshers as well as the working professionals to boost up your career.Here you can also learn the basics of interview skills for both face-to-face interaction and telephonic/skype and other online platforms. All of these are given free of cost.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Digitalisation & Our Vision</h2>
              <p className="mt-6">
                In this age of digitalisaion ,'Dream Endeavor' aims at providing online job oriented soft skills courses for people who are seeking a job.The founder of this website is Namrata Talukdar ,resident of Guwahati with a 12 years experience in training and development ,a professional writer with international acclamation for her poetry and write ups.She is also a member of the All India Forum of English Scholars and Trainers.Currently pursuing her PhD in Computer Science. Working with reputed Universities and colleges in Assam ,she is adept in the field of teaching and counselling .With the hope of shaping up the lives of people who has dreams but are unable to turn them real ,Dreams Endeavour is the one of a kind venture that you will love to explore.The time and money invested is sure to be of great worth that will add brilliance to your professional dreams.
              </p>

            </motion.div>
          </div>
        </div>
      </div>
    </div>

    <Team />

    <Payments />    
    
    </>
    
  )
}

export default About;