/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./App";
import ErrorBoundary from "./errorBoundary";

// window.onerror = function (error) {
// 	console.log("***************************************", error);
// };

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById("root")
);