import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import "./styles/global.css";

import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./pages/Layout/Layout";
import MainPage from "./pages/Main/MainPage";

function App() {
	return (
		<BrowserRouter basename="/dynamic-portfolio">
			<Routes>
				<Route path="/" element={<Layout/>}>

					<Route index element={<MainPage />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
