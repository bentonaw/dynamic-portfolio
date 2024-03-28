import data from "../../assets/data.json";
import "../../styles/card.css";
import "./about.css";

const Education = () => {
  return (
		<div className="education">
			{data.education.map((education, index) => (
				<div key={index} className="card">
					<h2>{education.school}</h2>
					<p>{education.degree}</p>
					<p>{education.graduated}</p>
				</div>
			))}
		</div>
	);
}

export default Education