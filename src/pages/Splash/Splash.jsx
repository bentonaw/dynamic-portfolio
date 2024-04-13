import { useState, useEffect, useRef } from "react";
import "./splash.css";

const Splash = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const h2Ref = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.pageYOffset > 0);
		};
		window.addEventListener("scroll", handleScroll);

		const fonts = [
			// "clashdisplay-bold",
			// "cabinetgrotesk-extrabold",
			"panchang-bold",
			"panchang-light",
		];
		let currentFont = 0;

		function changeFont() {
			if (h2Ref.current) {
				h2Ref.current.style.fontFamily = fonts[currentFont++ % fonts.length];
			}
		}
		const intervalId = setInterval(changeFont, 600);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearInterval(intervalId);
		};
	}, []);

	return (
		<section className="splash">
			<h1>Huan Yang Ooi</h1>
			<h2 ref={h2Ref}>Software Developer</h2>
			<p className="splashText">Keep in mind that this page is still under constrction :)</p>
			<div id="scroll-down-animation" className={isScrolled ? "fade-out" : ""}>
				<span className="mouse">
					<span className="move"></span>
				</span>
				<h2 className="scroll">Scroll down</h2>
			</div>
		</section>
	);
};

export default Splash;
