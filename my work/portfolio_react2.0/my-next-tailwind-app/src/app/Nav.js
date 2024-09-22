import React from "react";

export default function Nav() {
	return (
		<>
			<header className="text-gray-500 bg-gray-900 body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<span className="ml-3 text-xl">Portfolio</span>
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<a href="#" className="mr-5 hover:text-white">
							Home
						</a>
						<a href="#about" className="mr-5 hover:text-white">
							About
						</a>
						<a href="#skills" className="mr-5 hover:text-white">
							Skills
						</a>
						<a href="#contact" className="mr-5 hover:text-white">
							Contact
						</a>
					</nav>
					<a
						href="https://github.com/danielabramiani"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
					>
						GitHub
					</a>
				</div>
			</header>
		</>
	);
}