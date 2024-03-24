import { useState, useEffect, useRef } from "react";
import "./splash.css";

const Splash = () => {
	const blobRef = useRef(null);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const blob = blobRef.current;

		const handleMouseMove = (e) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			blob.style.left = mouseX + "px";
			blob.style.top = mouseY + "px";
		};

		document.addEventListener("mousemove", handleMouseMove);

		let hasScrolled = false;
		const handleScroll = () => {
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			if (scrollTop > 0) {
				hasScrolled = true;
			}
			setIsScrolled(hasScrolled);
		};
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section className="splash">
			<div id="blob" ref={blobRef}></div>
			<h1>Welcome to My Portfolio</h1>
			<p>
				I am a web developer with a passion for creating beautiful and
				functional websites. I have experience with HTML, CSS, JavaScript,
				React, and Node.js. I am always looking to learn new technologies and
				improve my skills.
			</p>
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
