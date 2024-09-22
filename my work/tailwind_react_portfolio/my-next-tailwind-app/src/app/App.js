import React from "react";
import "./assets/css/output.css";
import { Router } from "@reach/router";
import Home from "./views/Home";
import About from "./views/About";
import Nav from "./components/Nav";

function App() {
	return (
		<>
			<Nav />
			<div className="dark:bg-gray-900 dark:text-gray-300">
				<Router>
					<Home path="/" />
					<About path="/about" />
				</Router>
			</div>
		</>
	);
}

export default App;