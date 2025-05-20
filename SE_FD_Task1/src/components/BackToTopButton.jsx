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
        className="fixed  sm:right-8 sm:h-10 sm:w-10 sm:p-2.5 bottom-8 right-4 h-8 w-8 p-2    bg-blue-500  text-white  rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-30"
        aria-label="Back to Top"
      >
        <img src="src/assets/arrow-up.svg" alt="up_arrow" className='animate-bounce' />
      </button>
    )
  );
};

export default BackToTopButton;
