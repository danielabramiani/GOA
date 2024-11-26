import React from "react";

export default function Nav() {
	return (
		<>
			<header className="text-white bg-black body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
					<nav className="flex items-center text-base">
						<a href="#" className="mr-5 hover:text-purple-300">
							Home
						</a>
						<a href="#about" className="mr-5 hover:text-purple-300">
							About
						</a>
                        <a href="#contact" className="mr-5 hover:text-purple-300">
							Contact
						</a>
					</nav>

					<span className="text-2xl text-purple-300 font-bold">
						Daniel Clothes
					</span>

					<nav className="flex items-center text-base">
						<a href="#clothes" className="mr-5 hover:text-purple-300">
							Clothes
						</a>
						<a href="#shoes" className="mr-5 hover:text-purple-300">
							Shoes
						</a>
						<a href="#coat" className="mr-5 hover:text-purple-300">
							Coats
						</a>
					</nav>
				</div>
			</header>
		</>
	);
}
