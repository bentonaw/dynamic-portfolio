import data from "../../assets/data.json";
import Accordion from "react-bootstrap/Accordion";
import "./about.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const Experience = () => {
//   return (
// 		<div className="experience">
// 			{data.experience.map((experience, index) => (
// 				<div key={index} className="card">
// 					<h2>{experience.company}</h2>
// 					<p>{experience.title}</p>
// 					<p>{`${experience.from} - ${experience.to}`}</p>
// 					<p>{experience.location}</p>
// 				</div>
// 			))}
// 		</div>
// 	);
// }

// export default Experience

function Experience() {
	useEffect(() => {
		const tlExp = gsap.timeline({
			scrollTrigger: {
				trigger: ".educationSpace",
				start: "top center",
				end: "bottom center",
				markers: true,
				toggleActions: "restart pause reverse pause",
				scrub: 3,
			},
		});

		tlExp.to(".experienceTitle", {
				xPercent: 100,
				duration: 2,
				ease: "back.out",
			})
			.to(".experienceText", {
				xPercent: 100,
				duration: 2,
				ease: "back.out",
			});

		gsap.fromTo(
			".experienceAccordion",
			{ x: "-100%" },
			{
				x: "-%",
				duration: 2,
				ease: "back.out",
				stagger: 0.5,
				scrollTrigger: {
					trigger: ".experienceTitle",
					start: "top center",
					end: "bottom center",
					markers: true,
					toggleActions: "restart pause reverse pause",
					scrub: 3,
				},
			}
		);
	});
	return (
		<div>
			<h2 className="experienceTitle title">Experience:</h2>
			<p className="experienceText">Previous non-developer work experience:</p>
			<Accordion className="experience">
				{data.experience.map((experience, index) => (
					<Accordion.Item key={index} eventKey={index} className="experienceAccordion">
						<Accordion.Header>
							<div className="experienceHeader">
								<span>{experience.company}</span>
								<span>{`${experience.from} - ${experience.to}`}</span>
							</div>
						</Accordion.Header>
						<Accordion.Body>
							<div className="experienceAccordionTitle">
								<p>{experience.title}</p>
							</div>
							<div className="experienceAccordionLocation">
								<p>{experience.location}</p>
							</div>
							<div className="experienceAccordionDescription">
								<p>{experience.description}</p>
							</div>
						</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		</div>
	);
}

export default Experience;
