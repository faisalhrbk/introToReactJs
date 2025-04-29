import React, { useEffect, useState } from "react";
function App() {
	const [count, seCount] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			seCount((prev) => prev + 1);
		}, 1000);
	}, [count]);
	return (
		<>
			<h1>i rendered {count} times</h1>
		</>
	);
}

export default App;
