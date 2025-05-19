import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import { useEffect, useRef, useState } from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function App() {

  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const data = [
    {
      year: "2020 - 2023",
      degree: "Bachelor of Computer Science",
      college: "DG Ruparel College ",
      location: "Mumbai, India",
      description:
        "Pursuing a Bachelor's degree in Computer Science, with a focus on Android app development and software engineering principles.",
    },
    {
      year: "2019 - 2020",
      degree: "Higher Secondary Certificate (HSC)",
      college: "SVKM's Mithibai College ",
      location: "Mumbai, India",
      description:
        "Completed HSC with a focus on Science, preparing for undergraduate studies in Computer Science.",
    },
    {
      year: "2018 - 2019",
      degree: "Secondary School Certificate (SSC)",
      college: "Holy Angels English High School",
      location: "Mumbai, India",
      description:
        "Completed SSC with a strong foundation in Mathematics and Science.",
    },
  ];


  const skills = [
    ['Android App Development', '90%'],
    ['React JS', '85%'],
    ['Firebase', '75%'],
    ['Python', '70%'],
    ['HTML/CSS', '90%'],
    ['Tailwind CSS', '85%'],
    ['MongoDB', '80%'],
    ['Node JS', '80%'],
    ['Express JS', '75%'],
    ['Java', '80%'],
    ['C/C++', '70%'],
    ['JavaScript', '85%']
  ];

  const experiences = [
    {
      date: "October 2024 – January 2025",
      title: "ANDROID APP DEVELOPMENT TEAM LEAD",
      company: "SALON ACADEMY",
      location: "India",
      description:
        "Worked and Managed a project with Team. Developed a Robust Android Application.",
    },
    {
      date: "June 2023 – July 2023",
      title: "ANDROID DEVELOPER INTERN",
      company: "CODSOFT",
      location: "Remote",
      description:
        "Developed and deployed Android applications, focusing on user-friendly designs and functionality enhancements.",
    },
    {
      date: "June 2023 – July 2023",
      title: "UI DESIGNER INTERN",
      company: "NGP MANAGEMENT LLP",
      location: "Mumbai, India",
      description:
        "Designed user interfaces in Figma for a school management app for  schools.",
    },
  ];

  return (

    <>

      <Navbar />

      <main className='bg-gray-50 ' >

        <section id='home' className="bg-[url(./src/assets/sunset.jpg)] bg-right-bottom lg:bg-cover h-screen bg-no-repeat border-gray-400 border-b-2">
          <div className='absolute bg-black opacity-10 sm:opacity-70 w-full sm:mask-b-from-20 h-screen'></div>
          <div className='relative h-screen flex flex-col justify-center items-center'>

            <div className="groupoftext fade-zoom-down px-auto text-center" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              <h1 className="text-white sm:text-7xl text-5xl font-bold mb-2 sm:mb-4 font-sans">Hi,</h1>
              <span className="text-white sm:text-7xl text-5xl  font-bold w-[200px] sm:w-[400px] mb-6 sm:mb-10 font-sans">I'm John Doe</span>
              <p className="text-white sm:text-2xl font-medium sm:mb-10 mb-6 font-sans text-[16px] px-2 mt-4 ">Full Stack Developer | MERN Stack Enthusiast</p>
            </div>

            <div className="buttontext fade-zoom-up mt-2" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}> 
                <button className='bg-blue-400 hover:bg-amber-300 cursor-pointer  md:px-10 rounded-lg px-6 py-2 md:rounded-xl text-center font-medium md:text-3xl text-lg text-white'>Resume</button>
            </div>

          </div>
        </section>

        <section id='about' className='scroll-mt-8 pt-8 pb-16 bg-gray-50   border-b-2 border-gray-400 px-4 '>
          <h2 className='text-center text-gray-800 text-2xl md:text-3xl font-bold mb-6 md:mb-12 underline underline-offset-8'>About me</h2>

          <div className='flex flex-col w-full space-y-10  md:flex-row  justify-around  items-center md:px-[20px] px-[30px]  '>

            <div className='flex flex-col space-y-4  md:w-md md:text-[20px]  lg:w-2xl lg:text-[22px] font-medium text-md md:mr-10'>
              <p className='text-black '>I am John Doe, a passionate Android App Developer and UI/UX Designer. I have expertise in developing efficient, user-friendly applications and designing intuitive user interfaces.</p>
              <p className='text-gray-500'>With a Bachelor's degree in Computer Science and hands-on experience in Android development, I have worked on projects ranging from standalone mobile apps to collaborative task management systems. I bring a blend of technical skills and design sensibility to create impactful digital experiences. My aim is to solve real-world problems with innovative solutions.</p>
            </div>

            <div className='profile_container xl:h-[450px] h-[350px]  border boder-2 mb-6 '>

              <div className="profile xl:h-[400px]  xl:w-84 h-[300px]  w-70 ">
                <img src="/src/assets/profile2.webp" alt="profileimage" className='h-full w-full' />
              </div>

              <div className='bg-gray-50 h-12 pt-1  '>
                <ul className='flex justify-between px-8 items-center '>
                  <li>
                    <a href="https://www.twitter.com" target='_blank'><img src="src/assets/twitter.svg" alt="twitter" className='p-2' height={40} width={40} /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com" target='_blank'><img src="src/assets/linkedin.svg" alt="linkedin" className='p-2' height={40} width={40} /></a>
                  </li>
                  <li>
                    <a href="https://www.github.com" target='_blank'><img src="src/assets/github.svg" alt="github" className='p-2' height={40} width={40} /></a>
                  </li>
                </ul>
              </div>


            </div>

          </div>
        </section>

        <section id="education" className="scroll-mt-8 pt-8 pb-16 bg-blue-50 border-b-2 border-gray-300 px-10">
          <h2 className="text-center text-gray-800 text-3xl md:text-4xl font-bold mb-12 underline underline-offset-8">
            Education
          </h2>

          <div className="relative flex flex-col md:flex-row md:justify-between gap-12 md:gap-0 md:px-12">
            <div className="absolute top-6 md:left-0 md:right-0  md:h-0.5  h-full md:w-full  w-0.5 left-2 bg-gray-300  block z-0" />

            {data.map((item, index) => (
              <div key={index} className="relative flex-1 pl-10  md:pl-0 text-left group">
          
                <div className="w-3 h-3 bg-blue-400  rounded-full absolute top-10 md:top-[18px] md:left-16  left-[9.5px] transform -translate-x-1/2  md:translate-x-0 z-10" />

                <div className="mt-8 md:mt-10  md:ml-6">
                  <h3 className="text-md font-medium text-gray-700">{item.year}</h3>
                  <p className="text-md text-gray-800 mt-1">{item.degree}</p>
                  <h4 className="text-lg font-semibold text-gray-800 mt-4 uppercase">{item.college}</h4>
                  <p className="text-md text-gray-600 mt-2">{item.location}</p>
                  <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" ref={skillsRef} className="scroll-mt-8 pt-8 pb-16 md:py-10 md:pt-16 bg-gray-50 border-b-2 border-gray-400">
          <h2 className="text-center text-gray-800 text-2xl md:text-3xl font-bold mb-6 md:mb-12 underline underline-offset-8">Skills</h2>

          <div className="container md:grid grid-cols-2 gap-x-24 sm:px-16 px-16 py-8 mx-auto">
            {skills.map(([skill, level]) => (
              <div key={skill} className="mb-4 ">

                <div className="flex justify-between">
                  <span>{skill}</span>
                  <span>{level}</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className={`bg-blue-400 h-2 rounded transition-all duration-1000`}
                    style={{
                      width: isVisible ? level : '0%',
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id='experience' className='scroll-mt-8 pt-8 pb-16 md:py-10 md:pt-16 bg-blue-50   border-b-2 border-gray-400 px-4 '>
          <h2 className='text-center text-gray-800 text-2xl md:text-3xl font-bold mb-6 md:mb-12 underline underline-offset-8'>Experience</h2>

          <div className="py-16 px-4 md:px-20 flex items-center justify-center ">
            <div className="relative">
            
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300" />

              {experiences.map((exp, index) => (
                <div key={index} className="mb-12 flex flex-col md:flex-row items-start justify-between relative">
    
                  <span className="absolute w-3 h-3 bg-blue-400 rounded-full z-10 left-1 md:left-1/2 transform md:-translate-x-1/2 top-4" />


                  <div className="w-full md:w-1/2 mt-3 pr-6 md:pr-16 pl-10 md:pl-6 md:text-right text-left">
                    <h4 className="text-md text-gray-500 font-medium">{exp.date}</h4>
                    <p className="text-md font-semibold text-gray-700 mt-1">{exp.title}</p>
                  </div>

                  <div className="w-full md:w-1/2 pl-10 md:pl-16 mt-4 md:mt-0">
                    <h4 className="text-sm font-semibold text-gray-700">{exp.company}</h4>
                    <p className="text-sm text-gray-500">{exp.location}</p>
                    <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        <section id='contact' className='scroll-mt-8 pt-8 pb-16 md:py-10 md:pt-16 bg-gray-50   border-b-2 border-gray-400 px-4 '>
          <h2 className='text-center text-gray-800 text-2xl md:text-3xl font-bold mb-6 md:mb-12 underline underline-offset-8'>Contact me</h2>

          <div className="bg-gray-50 py-16 px-6 md:px-20 md:flex flex-row justify-center items-center">
            <div className="max-w-7xl mx-auto flex flex-col sm:w-sm md:w-3xl md:flex-row gap-12 ">
    
              <div className="w-full md:w-2/3 space-y-6">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="w-full  px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none"
                  />
                
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none"
                />
                <textarea
                  rows="6"
                  placeholder="Message"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none resize-none"
                ></textarea>
                <button className="w-full  bg-blue-400  text-white py-3 rounded-lg shadow-lg hover:bg-blue-500 transition-all">
                  Submit
                </button>
              </div>

              <div className="w-full md:w-1/3 space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">Jhon Doe</h2>
                  <p className="text-gray-500">Android App Developer</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700">Phone</p>
                  <p className="text-sm text-blue-700">+91 9999999999</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700">Email</p>
                  <p className="text-sm text-gray-600">jhondoe@gmail.com</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700">GitHub</p>
                  <a href="https://www.github.com/Vipul7362"  className="text-sm text-gray-600 hover:underline"  target="_blank" rel="noopener noreferrer" >www.github.com/Jhondoe </a>
                </div>

                <div className="flex gap-6 pt-4 text-gray-600 text-lg">
                  <a href="#" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <FaGithub />

                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>


      <BackToTopButton />

      <Footer />



    </>


  );
};

export default App;

