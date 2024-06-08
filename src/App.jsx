import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./screens/About";
// import Home from "./screens/Home";

function App() {
	return (
		<>
			<Navbar />
			{/* <Home /> */}
			<About />
			<Footer />
		</>
	);
}

export default App;
