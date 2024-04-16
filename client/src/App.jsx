import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import initFontAwesome from "./components/FontAwesomeIcons/initFontAwesome";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Footer from "./components/Footer";

initFontAwesome();

function App() {  

  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]); 

  return (
    <>    
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/about" element={<About />} /> 
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  

      <Footer />   
    </>
  )

}

export default App