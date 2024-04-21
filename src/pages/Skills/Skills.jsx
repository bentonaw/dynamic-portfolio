import DevSkills from "../Skills/DevSkills";
import MiscSkills from "../Skills/MiscSkills";
import "../Skills/skills.css";

const Skills = () => {
	return (
		<div className="skillsContainer">
			<h2 className="skillsTitle title">Developer Skills:</h2>
			<div>
				<DevSkills />
			</div>
			<h2 className="skillsTitle title">Miscellaneous Skills:</h2>
			<div>
				<MiscSkills />
			</div>
		</div>
	);
};

export default Skills;
