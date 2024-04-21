import data from "../../assets/data.json";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const DevSkills = () => {
//   return (
// 	<div className="skills">
// 			{data.developerSkills.map((skills, index) => (
// 				<div key={index} className="card">
// 					<h2>{skills.name}</h2>
// 				</div>
// 			))}
// 		</div>
//   )
// }

function DevSkills() {
	useEffect(() => {
		gsap.fromTo(
			".devSkillCard",
			{ x: "2300%" }, // Start from outside the screen to the right
			{
				x: "0%", // Move to the original position
				duration: 12,
				ease: "none",
				stagger: 3, // Add a 0.5 second delay between each card's animation
				scrollTrigger: {
					trigger: ".experienceSpace",
					start: "top 55%",
					end: "top 45%",
					endTrigger: ".skillsMisc",
					// markers: true,
					toggleActions: "restart pause reverse pause",
					scrub: true,
				},
			}
		);
	}, []);

return (
    <div className="skills">
      {data.developerSkills.map((skills, index) => (
        <div key={index} className="card devSkillCard">
          <h2>{skills.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default DevSkills
