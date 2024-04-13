import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Splash from "../Splash/Splash";
// import { useEffect, useRef, useState } from "react";

const MainPage = () => {
	// const blobRef = useRef(null);
	// const [coords, setCoords] = useState({ x: 0, y: 0 });

	// useEffect(() => {
	// 	const handleMouseMove = (e) => {
	// 		setCoords({ x: e.clientX, y: e.clientY });
	// 	};

	// 	document.addEventListener("mousemove", handleMouseMove);
	// 	// Clean up the event listener when the component unmounts
	// 	return () => {
	// 		document.removeEventListener("mousemove", handleMouseMove);
	// 	};
	// }, []);

	// useEffect(() => {
	// 	const blob = blobRef.current;
	// 	blob.style.left = `${coords.x}px`;
	// 	blob.style.top = `${coords.y}px`;
	// }, [coords]);

	return (
		<div>
			{/* <div id="blob" ref={blobRef}></div> */}
			<div id="blob"></div>
			<div className="blur"></div>
			<section id="main">
				<Splash />
			</section>

			<section id="about-me">
				<About />
			</section>
			<section id="portfolio">
				<Portfolio />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</div>
	);
};

export default MainPage;
