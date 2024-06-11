import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	manifest: {
		name: "Excellence in Eye Care",
		short_name: "Institute of Ophthalmology",
		description: "Excellence in Eye Care",
		theme_color: "#99DFFF",
		icons: [
			{
				src: "./public/IOM logo copy.png",
				sizes: "180x177",
				type: "image/png",
			},
		],
	},
});
