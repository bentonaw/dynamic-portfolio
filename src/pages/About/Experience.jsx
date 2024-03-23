import data from "../../assets/data.json";
import "../../styles/card.css";

const Experience = () => {
  return (
		<div className="experience">
			{data.experience.map((experience, index) => (
				<div key={index} className="card">
					<h2>{experience.company}</h2>
					<p>{experience.title}</p>
					<p>{`${experience.from} - ${experience.to}`}</p>
					<p>{experience.location}</p>
				</div>
			))}
		</div>
	);
}

export default Experience