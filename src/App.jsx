import Layout from "./screens/Layout";
import Home from "./screens/Home";
import About from "./screens/About";
import Expertise from "./screens/Expertise";
import Doctors from "./screens/Doctors";
import NoPage from "./screens/NoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./screens/Gallery";
import Insights from "./screens/Insights";
import InsightDetails from "./screens/InsightDetails";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/expertise" element={<Expertise />} />
					<Route path="/our-doctors" element={<Doctors />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/insights" element={<Insights />} />
					<Route path="/insights/:id" element={<InsightDetails />} />
					<Route path="/*" element={<NoPage />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
