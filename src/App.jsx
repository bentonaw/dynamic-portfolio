import Header from "./Components/Header";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Footer from "./Components/Footer";
import "./styles/global.css";
import Splash from "./pages/Splash/Splash";

function App() {
	return (
		<>
			<Header />
			<Splash />
			<About />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
