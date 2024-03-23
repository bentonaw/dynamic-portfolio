import Header from "./Components/Header";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Footer from "./Components/Footer";
import "./styles/global.css";
import Splash from "./pages/Splash/Splash";

import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Splash />} />
				<Route path="/about" element={<About />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
