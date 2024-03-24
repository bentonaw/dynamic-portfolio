import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Splash from "../Splash/Splash";

const MainPage = () => {
	return (
		<div>
			<div>
				<section id="main">
					<Splash />
				</section>
			</div>
			<div>
				<section id="about-me">
					<About />
				</section>
			</div>
			<div>
				<section id="portfolio">
					<Portfolio />
				</section>
			</div>
			<div>
				<section id="contact">
					<Contact />
				</section>
			</div>
		</div>
	);
};

export default MainPage;
