import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Splash from "../Splash/Splash"

const MainPage = () => {
  return (
		<div>
			<Splash />
			<About />
            <Portfolio />
            <Contact/>
		</div>
	);
}

export default MainPage