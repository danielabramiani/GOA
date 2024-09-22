import Nav from "./Nav";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Nav />
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hi, I'm Daniel Abramiani
              <br className="hidden lg:inline-block" />
              Front-End Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Hello, I'm Daniel Abramiani, a front-end developer
              <br className="hidden lg:inline-block" />
              and future full-stack developer.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Facebook
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Instagram
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.discordapp.com/attachments/1190766523745317038/1287118372512858154/image.png?ex=66f061e5&is=66ef1065&hm=210fd6ebb19496de10891818352739609d849747fc9e0681e410b7931e8c7e7c&"
            />
          </div>
        </div>
      </section>

      <div className="bg-gray-100 p-8" id="about">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
          About Me
        </h2>
        <p className="text-gray-700 text-center">
          I started learning programming at GOA (Goal-oriented Academy) in September 2023.
          <br />
          Then I began learning by myself.
          <br />
          Work Experience: Editor at Anjalytics (January 2024 - July 2024), Crew Leader at GOA (April 2024 - September 2024), Mentor Assistant at GOA (September 2024).
        </p>
      </div>

      <section className="bg-white py-16" id="skills">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          My Skills
        </h2>
        <div className="container mx-auto px-5">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-blue-500 p-8 rounded transition duration-500 transform hover:bg-purple-500 hover:-translate-y-2 hover:text-white-900">
                <p className="leading-relaxed mb-6">
                  React + Tailwind: started learning React and Tailwind in September.
                </p>
                <h2 className="text-white-900 font-medium title-font tracking-wider text-sm">
                  React + Tailwind
                </h2>
                <p className="text-white-500">Mastering Front-end</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-blue-500 p-8 rounded transition duration-500 transform hover:bg-purple-500 hover:-translate-y-2 hover:text-white-500" >
                <p className="text-white-400 leading-relaxed mb-6">
                  CSS, JS, HTML: started learning in January.
                </p>
                <h2 className="text-white-900 font-medium title-font tracking-wider text-sm">
                  CSS, HTML, JS
                </h2>
                <p className="text-white-500">Beginning of front-end development</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3" >
              <div className="h-full bg-blue-500 p-8 rounded transition duration-500 transform hover:bg-purple-500 hover:-translate-y-2 hover:text-white-500">
                <p className="leading-relaxed mb-6">
                  Python: Learning Python in September 2023; I can create my own
                  kata in Codewars and achieved 4 kyu.
                </p>
                <h2 className="text-white-900 font-medium title-font tracking-wider text-sm">
                  Python
                </h2>
                <p className="text-white-500">Mastering Python</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font relative" id="contact">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Ask me for help or work opportunities.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Submit
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500" href="mailto:danielabramiani6@email.com">danielabramiani6@email.com</a>
                <p className="leading-normal my-5">
                  Phone number: +995 557 520 755
                  <br />
                  Georgia, Tbilisi
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500" href="#">
                    {/* Facebook Icon */}
                  </a>
                  <a className="ml-4 text-gray-500" href="#">
                    {/* Twitter Icon */}
                  </a>
                  <a className="ml-4 text-gray-500" href="#">
                    {/* LinkedIn Icon */}
                  </a>
                  <a className="ml-4 text-gray-500" href="#">
                    {/* GitHub Icon */}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
