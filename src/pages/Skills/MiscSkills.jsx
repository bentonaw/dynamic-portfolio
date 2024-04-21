import data from "../../assets/data.json";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const MiscSkills = () => {
// 	return (
// 		<div className="skillsMisc">
// 			<div className="skills">
// 				{data.miscSkills.map((skills, index) => (
// 					<div key={index} className="card">
// 						<h2>{skills.name}</h2>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

function MiscSkills() {
	useEffect(() => {
		gsap.fromTo(
			".miscSkillCard",
			{ x: "-1000%" }, // Start from outside the screen to the left
			{
				x: "0%", // Move to the original position
				duration: 12,
				ease: "none",
				stagger: {each: 1, from: "end"}, // Add a 0.5 second delay between each card's animation
				scrollTrigger: {
					trigger: ".skillsContainer",
					start: "top 55%",
					end: "top 25%",
					endTrigger: ".skills",
					// markers: true,
					toggleActions: "restart pause reverse pause",
					scrub: true,
				},
			}
		);
	}, []);

return (
	<div className="skillsMisc">
		<div className="skills">
			{data.miscSkills.map((skills, index) => (
				<div key={index} className="card miscSkillCard">
					<h2>{skills.name}</h2>
				</div>
			))}
		</div>
	</div>
);
}


export default MiscSkills;
