import React, { useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState(null);

	return (
		<div>
			<div className="trafficTop"></div>
			<div className="container">
				<div
					className={
						"light red " + (color == "red" ? "selected" : null)
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						"light yellow " +
						(color == "yellow" ? "selected" : null)
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						"light green " + (color == "green" ? "selected" : null)
					}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
