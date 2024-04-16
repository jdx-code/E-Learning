import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return(
        <div className='footerClass bg-[#f7d852] text-gray-800'>
            <div className='w-full max-w-[95%] m-auto p-4 md:pt-8 grid md:grid-cols-6'>
                <div className='w-full max-w-[95%] text-xs font-bold mb-8 col-span-4 md:border-r-2 md:border-blue-200'>
                    <p className='font-bold text-lg pb-3 underline'>Quick Links</p>
                    <div className='grid grid-cols-6 '>                
                        <div className='col-span-3 sm:col-span-2'>
                            <ul>                            
                                <li className='pb-2'>                                    
                                    <Link
                                        to="/"                                                                                                                                
                                    >
                                        Home
                                    </Link>                                                    
                                </li>
                                <li className='pb-2'>
                                    <Link
                                        to="/about"                                                                                         
                                    >
                                        About Us
                                    </Link>                                                                                        
                                </li> 
                            </ul>
                        </div>  
                        <div className='col-span-3 sm:col-span-2'>
                            <ul>     
                                <li className='pb-2'>
                                    <Link
                                        to="/courses"                                                    
                                    >
                                        Courses
                                    </Link>                                                                                                                                                                
                                </li> 
                                <li className='pb-2'>
                                    <Link
                                        to="/#aifest"                                                    
                                    >
                                        AIFEST
                                    </Link>                                    
                                </li>                               
                            </ul>
                        </div> 
                        <div className='col-span-6 sm:col-span-2'>
                            <ul>                                 
                                <li className='pb-2'>
                                    <Link
                                        to="/contact"                                                    
                                    >
                                        Contact
                                    </Link>                                    
                                </li>                                
                            </ul>
                        </div>             
                    </div>
                </div>
                
                <div className='grid grid-cols-4 col-span-2 text-xs font-bold mb-8'>                    
                    <div className='col-span-3'>
                        <p className='font-bold text-lg pb-3 underline'>Reach Us</p>
                        <p className='pb-1'>Beltola Tiniali</p>
                        <p className='pb-1'>Guwahati-781028</p>
                        <p className='pb-1'>Assam, India</p>
                        {/* <p className='pb-1'>+91-9707038551</p> */}
                        <p className='pb-1'>dlsdsassam@gmail.com</p>                    
                    </div>
                    {/* <div className='col-span-1 grid justify-items-end items-center'>
                        <ul>
                            <li className='pb-4'>
                                <a href="https://twitter.com/zephyrsolx"><FontAwesomeIcon icon={['fab', 'twitter']} size="lg"/></a>
                            </li>
                            <li className='pb-4'>
                                <a href="https://www.linkedin.com/in/zephyrsolutionsgroup/"><FontAwesomeIcon icon={['fab', 'linkedin']} size="lg"/></a>
                            </li>
                            <li className='pb-4'>
                                <a href="https://www.facebook.com/zephyrsolutionsgroup"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg"/></a>
                            </li>
                            <li className='pb-4'>
                                <a href="https://github.com/zephyrsolutions"><FontAwesomeIcon icon={['fab', 'github']} size="lg"/></a>
                            </li>
                        </ul>
                    </div>                     */}
                </div>                        
            </div>        
            <div className='w-full'>
                <p className='text-center text-xs'>Digital Literacy & Skill Development Society</p>                           
                <p className='text-center pb-4 text-xs'> &#169; {currentYear} All rights reserved.</p>                           
            </div>    
            
        </div>        
    )
}

export default Footer;