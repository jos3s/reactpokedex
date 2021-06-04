import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/global.css";
import "./styles/theme.css";

import Home from "./templates/home";

ReactDOM.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>,
	document.getElementById("root")
);