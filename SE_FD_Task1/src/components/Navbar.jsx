import React from 'react';
import { useEffect, useState } from 'react';
import MenuIcon from './MenuIcon'
import Sidebar from './Sidebar';


const Navbar = () => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
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
    `font-semibold text-xl px-3 py-1 rounded-md transition-all duration-300 ${
      activeSection === section ? 'text-blue-500 bg-white' : 'text-white'
    } hover:text-blue-500 `;
  

  return (
    <>
      <nav className="sticky top-0 z-40 flex justify-between items-center bg-black  py-2   text-white shadow-2xl px-6  ">
      
        <div className="name  text-3xl md:text-4xl font-bold   "><a href="/">Jhon</a></div>

  <div className="menu_desktop hidden lg:flex justify-around items-center space-x-4">
        <a href="#about" className={getLinkClass('about')}>About</a>
        <a href="#education" className={getLinkClass('education')}>Education</a>
        <a href="#skills" className={getLinkClass('skills')}>Skill</a>
        <a href="#experience" className={getLinkClass('experience')}>Experience</a>
        <a href="#contact" className={getLinkClass('contact')}>Contact</a>
      </div>

        <div className="mobilemenu lg:hidden ">
          <button onClick={() => setisSidebarOpen(!isSidebarOpen)} className="h-[18px] w-[18px] md:h-6 md:w-6" >
            <MenuIcon />
          </button>
        </div>
        <Sidebar isOpen={isSidebarOpen} onClose={() => setisSidebarOpen(false)} />
      </nav>


    </>
  );
};

export default Navbar;


  // const [isSidebarOpen, setisSidebarOpen] = useState(false);
  // const [activeSection, setActiveSection] = useState('');

  // const sections = ['about', 'education', 'skills', 'experience', 'contact'];

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     entries => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     { threshold: 0.6 }
  //   );

  //   sections.forEach(id => {
  //     const el = document.getElementById(id);
  //     if (el) observer.observe(el);
  //   });

  //   return () => {
  //     sections.forEach(id => {
  //       const el = document.getElementById(id);
  //       if (el) observer.unobserve(el);
  //     });
  //   };
  // }, []);

  // const getLinkClass = (section) =>
  //   `font-semibold text-xl px-3 py-1 rounded-md transition-all duration-300 ${
  //     activeSection === section ? 'text-blue-600 bg-white' : 'text-white'
  //   } hover:text-blue-600`;

//   return (
//     <nav className="sticky top-0 z-40 flex justify-between items-center bg-black px-6 py-2 text-white">
//       <div className="name text-2xl md:text-3xl font-bold md:py-[6px]">
//         <a href="/">Jhon</a>
//       </div>

//         <div className="menu_desktop hidden lg:flex justify-around items-center space-x-4">
//           <a href="#about" className={getLinkClass('about')}>About</a>
//           <a href="#education" className={getLinkClass('education')}>Education</a>
//           <a href="#skills" className={getLinkClass('skills')}>Skill</a>
//           <a href="#experience" className={getLinkClass('experience')}>Experience</a>
//           <a href="#contact" className={getLinkClass('contact')}>Contact</a>
//         </div>

//       <div className="mobilemenu lg:hidden">
//         <button onClick={() => setisSidebarOpen(!isSidebarOpen)} className="h-[18px] w-[18px] md:h-6 md:w-6">
//           <MenuIcon />
//         </button>
//       </div>

//       <Sidebar isOpen={isSidebarOpen} onClose={() => setisSidebarOpen(false)} />
//     </nav>
//   );
// };

// export default Navbar;
