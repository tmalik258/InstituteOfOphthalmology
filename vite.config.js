import MillionLint from '@million/lint';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const _plugins = [react()];
_plugins.unshift(MillionLint.vite())
export default defineConfig({
  plugins: _plugins,
  manifest: {
    name: "Excellence in Eye Care",
    short_name: "Institute of Ophthalmology",
    description: "Excellence in Eye Care",
    theme_color: "#99DFFF",
    icons: [{
      src: "./public/IOM logo copy.png",
      sizes: "180x177",
      type: "image/png"
    }]
  }
});