import Color from "./Color.jsx";

const ColorGrid = ({ colors }) => {
	return (
		<section className="color-grid">
			{colors.map((color, index) => {
				const { hex, weight } = color;
				return <Color key={index} color={"#" + hex} weight={weight} />;
			})}
		</section>
	);
};
export default ColorGrid;
