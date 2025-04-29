import React from "react";
import { useState } from "react";

const App = () => {
	const [color, setColor] = useState('red');


	// let color = "red";
	const changeColor = () => {
	setColor('blue')
	};
	return (
		<>
			<h1>my Fav color is {color}!</h1>
			<button onClick={changeColor}>blue</button>
		</>
	);
};

export default App;
