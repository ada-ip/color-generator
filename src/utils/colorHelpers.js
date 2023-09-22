export const calculateLuminance = (color) => {
	color = color.replace(/^#/, "");

	const r = parseInt(color.slice(0, 2), 16) / 255;
	const g = parseInt(color.slice(2, 4), 16) / 255;
	const b = parseInt(color.slice(4, 6), 16) / 255;

	// Calculate luminance per WCAG guidelines
	const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
	return luminance;
};
