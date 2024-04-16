import React, { useRef, useEffect } from 'react';
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Aifest from '../components/Aifest';
import Objectives from '../components/Objectives';
import Stats from '../components/Stats';

const Home = () => {
    
    const aifestRef = useRef(null);

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

    return(
        <div id='main'>
            <Hero />
            <Objectives />
            <Aifest ref={aifestRef} />
            <Stats />                      
        </div>
    )
}

export default Home;