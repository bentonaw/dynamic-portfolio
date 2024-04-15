import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.to(".summaryTitle", {
// 	xPercent: 100,
// 	duration: 2,
// 	ease: "back.out",
// 	scrollTrigger: {
// 		trigger: ".summary",
// 		start: "top center",
// 		endTrigger: ".summaryText",
// 		end: "top center",
// 		markers: true,
// 		toggleActions: "restart pause reverse pause",
// 		scrub: 3,
// 	},
// });

// gsap.to(".summaryText", {
// 	xPercent: 100,
// 	duration: 2,
// 	ease: "back.out",
// 	scrollTrigger: {
// 		trigger: ".summary",
// 		start: "top center",
// 		endTrigger: ".summaryText",
// 		end: "top center",
// 		markers: true,
// 		toggleActions: "restart pause reverse pause",
// 		scrub: 3,
// 	},
// });

// const tl = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: ".summary",
// 		start: "top center",
// 		endTrigger: ".summaryText",
// 		end: "top center",
// 		markers: true,
// 		toggleActions: "restart pause reverse pause",
// 		scrub: 3,
// 	},
// });

// tl.fromTo(
// 	".summaryTitle",
// 	{ x: "-100%" }, // Start from outside the screen to the left
// 	{
// 		x: "0%", // Move to the original position
// 		duration: 2,
// 		ease: "back.out",
// 	}
// ).fromTo(
// 	".summaryText",
// 	{ x: "-100%" }, // Start from outside the screen to the left
// 	{
// 		x: "0%", // Move to the original position
// 		duration: 2,
// 		ease: "back.out",
// 	},
// 	"-=1.5" // This will start the second animation 1.5 seconds before the first one ends
// );

const Summary = () => {
	useEffect(() => {
		const tlSum = gsap.timeline({
			scrollTrigger: {
				trigger: ".scroll",
				start: "top center",
				endTrigger: ".summaryText",
				end: "top 45%",
				// markers: true,
				toggleActions: "restart pause reverse pause",
				scrub: 3,
			},
		});

		tlSum.to(".summaryTitle", {
			xPercent: 100,
			duration: 6,
			ease: "back.out",
		}).to(".summaryText", {
			xPercent: 168,
			duration: 4,
			ease: "back.out",
		});
		("<"); // Start the .summaryText animation just after the .summaryTitle animation ends
	}, []);

	return (
		<div className="summary">
			<h2 className="summaryTitle title">About Me:</h2>
			<div>
				<p className="summaryText">
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
