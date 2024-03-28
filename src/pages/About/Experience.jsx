import data from "../../assets/data.json";
import Accordion from "react-bootstrap/Accordion";
import "./about.css";

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
	return (
		<Accordion className="experience">
			{data.experience.map((experience, index) => (
				<Accordion.Item key={index} eventKey={index} className="accordion">
					<Accordion.Header>
						<div className="experience-header">
							<span>{experience.company}</span>
							<span>{`${experience.from} - ${experience.to}`}</span>
						</div>
					</Accordion.Header>
					<Accordion.Body>
						<div className="experience-title">
							<p>{experience.title}</p>
						</div>
						<div className="experience-location">
							<p>{experience.location}</p>
						</div>
						<div className="experience-description">
							<p>{experience.description}</p>
						</div>
					</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);
}

export default Experience;
