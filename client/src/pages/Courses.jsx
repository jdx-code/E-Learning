import React, { useRef, useEffect } from 'react';
import CourseCards from '../components/CourseCards'
import Footer from '../components/Footer'
import PageRibbon from '../components/PageRibbon'
import Payments from '../components/Payments'

const Courses = () => {

  const coursesRef = useRef(null);

    useEffect(() => {
      // Check if there is a hash in the URL and scroll to the corresponding section
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    }, []);

  return (
    <>
        <PageRibbon pageTitle="Courses"/>
        <CourseCards ref={coursesRef}/>
        <Payments />        
    </>
  )
}

export default Courses