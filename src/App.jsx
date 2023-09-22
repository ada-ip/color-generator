import { useState } from "react";
import Values from "values.js";

import Title from "./components/Title.jsx";
import Form from "./components/Form.jsx";
import ColorGrid from "./components/ColorGrid.jsx";

function App() {
	const [colors, setColors] = useState(new Values("#000000").all(10));

	return (
		<main>
			<Title />
			<Form setColors={setColors} />
			<ColorGrid colors={colors} />
		</main>
	);
}

export default App;
