import "../Skills/skills.css";
import Education from "./Education";
import DevSkills from "../Skills/DevSkills";
import MiscSkills from "../Skills/MiscSkills";
import Experience from "./Experience";
import Summary from "./Summary";

const About = () => {
  return (
		<section className="about-me">
			<div>
				<Summary />
			</div>
			<div className="space"></div>
			<div>
				<Education />
			</div>
			<div className="space"></div>
			<div>
				<Experience />
			</div>
			<div className="space"></div>
			<div className="skills">
				<div>
					<DevSkills />
				</div>
				<div>
					<MiscSkills />
				</div>
			</div>
		</section>
	);
}

export default About
