import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleUp} from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const home = document.getElementById('home');
    if (home) {
      home.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed sm:bottom-6 sm:right-6 sm:h-12 sm:w-12 sm:p-3.5 bottom-8 right-6 h-10 w-10 p-2    bg-blue-500  text-white  rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-30"
        aria-label="Back to Top"
      >
        <img src="src/assets/arrow-up.svg" alt="up_arrow" className='animate-bounce' />
      </button>
    )
  );
};

export default BackToTopButton;
