import data from "../../assets/data.json";

const DevSkills = () => {
  return (
	<div className="skills">
			{data.developerSkills.map((skills, index) => (
				<div key={index} className="card">
					<h2>{skills.name}</h2>
				</div>
			))}
		</div>
  )
}

export default DevSkills
