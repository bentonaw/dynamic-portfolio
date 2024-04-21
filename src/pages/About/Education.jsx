import data from "../../assets/data.json";
import "../../styles/card.css";
import "./about.css";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
	useEffect(() => {
		gsap.fromTo(
		".educationTitle",
			{ x: "100%" }, // Start from outside the screen to the right
			{
				x: "63%", // Move to the original position
				duration: 2,
				ease: "back.out",
				scrollTrigger: {
					trigger: ".summarySpace",
					start: "top center",
					end: "bottom center",
					// markers: true,
					toggleActions: "restart pause reverse pause",
					scrub: 3,
				},
			});

		gsap.fromTo(
			".eduCard",
			{ x: "0%" }, // Start from outside the screen to the right
			{
				x: "195%", // Move to the original position
				duration: 2,
				ease: "back.out",
				stagger: 0.5, // Add a 0.5 second delay between each card's animation
				scrollTrigger: {
					trigger: ".summarySpace",
					start: "top center",
					end: "bottom center",
					// markers: true,
					toggleActions: "restart pause reverse pause",
					scrub: 3,
				},
			}
		);
	}, []);

	return (
		<div className="education">
			<h2 className="educationTitle title">Education:</h2>
			{data.education.map((education, index) => (
				<div key={index} className="card eduCard">
					<h2>{education.school}</h2>
					<p>{education.degree}</p>
					<p>{education.graduated}</p>
				</div>
			))}
		</div>
	);
};

export default Education;
