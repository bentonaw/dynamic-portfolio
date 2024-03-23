import data from "../../assets/data.json";

const MiscSkills = () => {
  return (
		<div className="skills">
			{data.miscSkills.map((skills, index) => (
				<div key={index} className="card">
					<h2>{skills.name}</h2>
				</div>
			))}
		</div>
	);
}

export default MiscSkills
