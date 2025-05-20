import React from 'react'

import { useEffect, useState } from 'react';


function Sidebar({isOpen,onClose}) {
        const [activeSection, setActiveSection] = useState('');
    
      const sections = ['home','about', 'education', 'skills', 'experience', 'contact'];
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          { threshold: 0.6 }
        );
    
        sections.forEach(id => {
          const el = document.getElementById(id);
          if (el) observer.observe(el);
        });
    
        return () => {
          sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.unobserve(el);
          });
        };
      }, []);
    
      const getLinkClass = (section) =>
        `font-semibold  px-3  sm:px-8  py-2  text-black  rounded-md sm:rounded-xl transition-all duration-300 ${
          activeSection === section ? 'text-blue-500 bg-white ' : 'text-white '
        } hover:text-blue-500 `;
      
    
    return (
        <>
                <div className={`fixed lg:hidden inset-0 bg-black z-40  ${isOpen? 'opacity-70':'opacity-0 pointer-events-none'} `} onClick={onClose} />
                
                <div className={`fixed lg:hidden left-0 w-64 sm:w-1/2 h-full  text-white z-40 bg-linear-to-b from-black via-gray-950 to-gray-800  transform transition-transform duration-300 ${isOpen? 'translate-x-0':'-translate-x-full'}`} >
                    <div className=' flex flex-col px-8   text-lg sm:text-4xl  py-4 sm:py-8  space-y-4'>
                        <a href='#about' onClick={onClose}  className={getLinkClass('about')} >About</a>
                        <a href='#education' onClick={onClose}  className={getLinkClass('education')} >Education</a>
                        <a href='#skills' onClick={onClose}  className={getLinkClass('skills')} >Skill</a>
                        <a href='#experience' onClick={onClose} className={getLinkClass('experience')} >Experience</a>
                        <a href='#contact' onClick={onClose} className={getLinkClass('contact')} >Contact</a>

                    </div>
                </div>

        </>
    )
}

export default Sidebar