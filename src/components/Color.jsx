import { calculateLuminance } from "../utils/colorHelpers";

const Color = ({ color, weight }) => {
	return (
		<article
			style={{ backgroundColor: color }}
			className={`color-grid-color ${calculateLuminance(color) > 0.5 ? "text-dark" : "text-light"}`}>
			<p>{weight}%</p>
			<p>{color}</p>
		</article>
	);
};
export default Color;
