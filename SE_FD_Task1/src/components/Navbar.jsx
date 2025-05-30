import React from 'react';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';


const Navbar = () => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const sections = ['home', 'about', 'education', 'skills', 'experience', 'contact'];

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
    `font-semibold text-xl px-3 py-1 rounded-md transition-all duration-300 ${activeSection === section ? 'text-blue-500 bg-white' : 'text-white'
    } hover:text-blue-500 `;


  return (
    <>
      <nav className="sticky top-0 z-50 shadow-2xl flex justify-between items-center text-white  bg-linear-to-tr from-black via-gray-950  to-gray-800 py-2   px-6  sm:px-8 ">

        <div className="name  text-3xl sm:text-5xl font-bold    "><a href="/">Jhon</a></div>

        <div className="menu_desktop hidden lg:flex justify-around items-center space-x-4">
          <a href="#about" className={getLinkClass('about')}>About</a>
          <a href="#education" className={getLinkClass('education')}>Education</a>
          <a href="#skills" className={getLinkClass('skills')}>Skill</a>
          <a href="#experience" className={getLinkClass('experience')}>Experience</a>
          <a href="#contact" className={getLinkClass('contact')}>Contact</a>
        </div>

        <div className="mobilemenu lg:hidden ">
          <button onClick={() => setisSidebarOpen(!isSidebarOpen)} className="h-6 w-6 sm:h-12 sm:w-12 flex justify-center " >

            <img src="src/assets/Menu_open.svg" alt="menu" className={`sm:p-1 transition-all  duration-300 ease-in-out  ${isSidebarOpen ? 'hidden' : 'opacity-100'}`} />
            <img src="src/assets/Menu_cancel.svg" alt="menu" className={`sm:p-0.5 transform transition  duration-300 ease-in-out ${isSidebarOpen ? 'opacity-100' : 'hidden'}`} />

          </button>
        </div>

      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setisSidebarOpen(false)} />


    </>
  );
};

export default Navbar;
