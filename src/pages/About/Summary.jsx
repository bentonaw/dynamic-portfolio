import gsap from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

let mySplitText = new SplitText(".split", { type: "lines" });
let lines = mySplitText.lines;
gsap.from(lines, {
	xPercent: -100,
	stagger: 0.4,
	ease: "back.out",
	duration: 1.2,
  scrollTrigger: {
	trigger: ".splashText",
	toggleActions: "restart pause resume pause",
	start: "top 30%",
	markers: true,
  }

})

const Summary = () => {
	return (
		<div className="summary">
			<h2 className="split">About Me:</h2>
			<div>
				<p className="split">
					I am a web developer with a passion for creating beautiful and
					functional websites. I have experience with HTML, CSS, JavaScript,
					React, and Node.js. I am always looking to learn new technologies and
					improve my skills.
				</p>
			</div>
		</div>
	);
};

export default Summary;
