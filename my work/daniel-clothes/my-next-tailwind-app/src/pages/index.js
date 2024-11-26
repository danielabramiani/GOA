import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; // Import your own styles for any additional customization

function App() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setNavActive(!navActive);
  };

  return (
    <div className={`relative ${navActive ? 'overflow-hidden' : ''}`}>
      <div data-aos="fade-down" className="nv-1">
        <nav className={`fixed top-0 left-0 w-full p-4 bg-white shadow-md z-10 ${scrolled ? 'bg-gray-900 text-white' : ''}`}>
          <button id="menu" onClick={toggleMenu} className="md:hidden">
            {navActive ? 'X' : 'Menu'}
          </button>
          <ul className={`nav md:flex md:items-center ${navActive ? 'block' : 'hidden'} md:block`}>
            <li><a href="#about" className="block px-4 py-2">About</a></li>
            <li><a href="#work" className="block px-4 py-2">Work</a></li>
          </ul>
          <a href="#" id="logo" className="text-lg font-bold">
            <p>Luka Tskhvaradze</p>
          </a>
          <a href="#contact" className="hidden md:inline-block">
            <button className="ml-4 px-6 py-2 bg-blue-600 text-white rounded">Contact Me</button>
          </a>
        </nav>
      </div>
      
      <div className="hero min-h-screen bg-cover bg-center text-center flex items-center justify-center">
        <div data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Programming and Design from Future.</h1>
          <a href="#about">
            <button className="dive bg-blue-600 text-white px-6 py-2 rounded">See More</button>
          </a>
        </div>
      </div>
      
      <div className="about py-20" id="about">
        <div className="container mx-auto grid md:grid-cols-2 gap-10">
          <div className="about-photo bg-gray-200 h-64 md:h-auto" data-aos="fade-right"></div>
          <div className="about-info">
            <h2 className="text-2xl font-semibold" data-aos="fade-left">ABOUT ME</h2>
            <h1 className="text-4xl font-bold mt-2" data-aos="fade-up">Workholic</h1>
            <p className="mt-4 text-gray-700" data-aos="fade-right">
              I am Luka, a passionate freelancer bringing you programming and design from the future. My expertise is developing next-level websites and web applications including full frontend design.
            </p>
          </div>
        </div>
      </div>
      
      <div className="work py-20 bg-gray-100" id="work">
        <div className="text-center mb-12">
          <p className="text-lg" data-aos="fade-up">Work</p>
          <h1 className="text-4xl font-bold" data-aos="fade-up">Dig Into My Universe</h1>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 gap-10">
          {/* Work 1 */}
          <div className="damateba" data-aos="fade-right">
            <div className="main_container work1 relative overflow-hidden">
              <div className="image bg-gray-300 h-48"></div>
              <div className="overlay absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <p>June 2023</p>
                <h1>Golden Lotus</h1>
                <p>Website & Design</p>
                <a href="./works/goldenlotus.html">
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">See More</button>
                </a>
              </div>
            </div>
          </div>
          {/* Work 2 */}
          <div className="damateba" data-aos="fade-left">
            <div className="main_container work2 relative overflow-hidden">
              <div className="image bg-gray-300 h-48"></div>
              <div className="overlay absolute inset-0 bg-black bg-opacity-60 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <p>May 2023</p>
                <h1>Lulini Transport</h1>
                <p>Company</p>
                <a href="./works/lulini.html">
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">See More</button>
                </a>
              </div>
            </div>
          </div>
          {/* Add similar blocks for Work 3 and Work 4 */}
        </div>
      </div>
      
      <div className="contact py-20" id="contact">
        <div className="container mx-auto flex justify-center">
          <form data-aos="zoom-in" action="https://formsubmit.co/554f7872c24dc908c565e5b7169c87ed" method="POST" className="w-full max-w-2xl bg-white p-8 rounded shadow-md">
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />

            <div className="left-form mb-8">
              <p className="text-lg">CONTACT</p>
              <h1 className="text-3xl font-bold">Got A Problem To Solve?</h1>
            </div>
            <div className="right-form grid gap-6">
              <div className="input-sections">
                <label htmlFor="name" className="block font-semibold">Name</label>
                <input type="text" name="Name" id="name" required className="w-full border-gray-300 p-2 rounded" />
              </div>
              <div className="input-sections">
                <label htmlFor="email" className="block font-semibold">Email</label>
                <input type="email" name="Email" id="email" required className="w-full border-gray-300 p-2 rounded" />
              </div>
              <div className="input-sections">
                <label htmlFor="message" className="block font-semibold">Message</label>
                <textarea id="message" name="Message" required className="w-full border-gray-300 p-2 rounded"></textarea>
              </div>
              <div className="input-sections btn-sec text-center">
                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="top-footer mb-4">
            <a href="#" className="text-lg font-bold">Lulini Web Development</a>
          </div>
          <hr className="border-gray-700" />
          <div className="middle-footer my-4">
            <ul className="flex justify-center space-x-6">
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#work" className="hover:text-gray-400">Work</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
              <li><a href="https://github.com/Cxvarisorka/Portofilo" target="_blank" className="hover:text-gray-400">Source Code</a></li>
            </ul>
          </div>
          <hr className="border-gray-700" />
          <div className="bottom-footer mt-4">
            <div className="socials flex justify-center space-x-4">
              <a href="http://discordapp.com/users/862050767397847060" target="_blank"><i className="fa-brands fa-discord text-2xl"></i></a>
              <a href="https://www.facebook.com/profile.php?id=100088419544165" target="_blank"><i className="fa-brands fa-facebook text-2xl"></i></a>
              <a href="https://github.com/Cxvarisorka" target="_blank"><i className="fa-brands fa-github text-2xl"></i></a>
              <a href="https://www.youtube.com/@LuliniTransport" target="_blank"><i className="fa-brands fa-youtube text-2xl"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
