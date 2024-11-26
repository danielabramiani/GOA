import React from "react";
import image from "./image/image.png";

export default function MainContent() {
	return (
		<main className="container mx-auto p-5">

			{/* Text Content */}
			<section className="text-center mt-5">
				<h1 className="text-4xl font-bold text-gray-800">Make yourself better</h1>
				<p id="main-text" className="mt-3 text-lg text-gray-600">
					Get your dream clothes to be a better version of yourself.
				</p>
			</section>

			{/* Features Section */}
			<section className="features flex flex-wrap min-h-screen">
				<article className="flex flex-col md:flex-row w-full h-[85vh] items-center justify-center">
					{/* Left Column */}
					<div className="left-col flex flex-col items-center justify-center md:w-1/2 h-full p-5">
						<div className="left-col-text max-w-lg text-center md:text-left">
							<h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
								Your Dream Clothes Await
							</h2>
							<p className="text-gray-700 mt-3">
								Discover styles and designs that fit the best version of you.
							</p>
							<a
								href="#"
								className="relative inline-block font-bold text-gray-900 uppercase mt-4 tracking-wide cursor-pointer"
							>
								Explore Now
								<span className="absolute left-0 bottom-[0.2rem] w-full h-[0.2rem] bg-yellow-500 rounded transition-all duration-300 hover:h-[0.5rem]" />
							</a>
						</div>
					</div>

					{/* Right Column with Image */}
					<div className="right-col w-full md:w-1/2 h-full overflow-hidden flex items-center justify-center">
						<picture className="w-full h-full">
							<img src={image} alt="Fashion Display" className="w-full h-full object-cover" />
						</picture>
					</div>
				</article>

				<article className="flex flex-col md:flex-row w-full h-[85vh] items-center justify-center">
					{/* Left Column */}
					<div className="left-col flex flex-col items-center justify-center md:w-1/2 h-full p-5">
						<div className="left-col-text max-w-lg text-center md:text-left">
							<h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
								Unmatched Quality and Style
							</h2>
							<p className="text-gray-700 mt-3">
								Elevate your look with expertly crafted pieces.
							</p>
							<a
								href="#"
								className="relative inline-block font-bold text-gray-900 uppercase mt-4 tracking-wide cursor-pointer"
							>
								View Collection
								<span className="absolute left-0 bottom-[0.2rem] w-full h-[0.2rem] bg-red-500 rounded transition-all duration-300 hover:h-[0.5rem]" />
							</a>
						</div>
					</div>

					{/* Right Column with Image */}
					<div className="right-col w-full md:w-1/2 h-full overflow-hidden flex items-center justify-center">
						<picture className="w-full h-full">
							<img src="https://www.canva.com/design/DAGV-eo7MkE/oAvc53gtcaicsOsgck29Hw/edit?utm_content=DAGV-eo7MkE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" alt="Fashion Display" className="w-full h-full object-cover" />
						</picture>
					</div>
				</article>
			</section>
		</main>
	);
}
