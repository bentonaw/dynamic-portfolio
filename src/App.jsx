import Header from "./Components/Header";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./styles/global.css";
import Splash from "./Components/Splash";

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
