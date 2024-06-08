import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import About from "./screens/About";
import Expertise from "./screens/Expertise";
import Doctors from "./screens/Doctors";

function App() {
	return (
		<>
			<Navbar />
			{/* <Home /> */}
			{/* <About /> */}
			{/* <Expertise /> */}
			<Doctors />
			<Footer />
		</>
	);
}

export default App;
