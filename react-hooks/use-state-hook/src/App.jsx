import React from "react";
import { useState } from "react";

const App = () => {
	const [car, setCar] = useState({
		brand: "ferrari",
		model: "roma",
		year: "ewe",
		color: "red",
	});
	const changeColor = () => {
		setCar((prev) => {
			return { ...prev, color: "blue" };
		});
	};
  const [count, setCount] = useState(0);

  const increaseCount = () => {
	setCount((prev) => {
	  return prev + 1;
	});
  }


	return (
		<>
    <h1>{count}</h1>
    <button onClick={increaseCount}>increase count</button>
			{" "}
			<h1>my {car.brand}</h1>{" "}
			<h2>
				its {car.brand} and {car.model} and {car.year}, {car.color}{" "} <br />
				<button onClick={changeColor}> changeColor</button>
			</h2>

		</>
	);
};

export default App;
