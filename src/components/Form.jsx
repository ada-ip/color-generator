import { useState } from "react";
import Values from "values.js";

import { calculateLuminance } from "../utils/colorHelpers";

const Form = ({ setColors }) => {
	const [color, setColor] = useState("#000000");

	const updateColor = (e) => {
		const newColor = e.target.value;
		setColor(newColor);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setColors(new Values(color).all(10));
	};

	return (
		<form method="GET" className="color-form" onSubmit={handleSubmit}>
			<input
				type="color"
				name="color"
				id="color"
				className="color-form-color-input"
				onChange={updateColor}
				value={color}
			/>
			<input
				type="text"
				name="text-color"
				id="text-color"
				className="color-form-txt-input"
				onChange={updateColor}
				value={color}
			/>
			<input
				type="submit"
				value="Submit"
				className={`color-form-btn ${calculateLuminance(color) > 0.5 ? "text-dark" : "text-light"}`}
				style={{ backgroundColor: color }}
			/>
		</form>
	);
};
export default Form;
