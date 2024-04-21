
import Education from "./Education";
import Skills from "../../pages/Skills/Skills";
import Experience from "./Experience";
import Summary from "./Summary";

const About = () => {
  return (
		<section className="about-me">
			<div>
				<Summary />
			</div>
			<div className="space summarySpace"></div>
			<div>
				<Education />
			</div>
			<div className="space educationSpace">
				<div className="educationSpaceStart"> </div>
			</div>
			<div>
				<Experience />
			</div>
			<div className="space experienceSpace"></div>
			<div className="skillsContainer">
				<div>
					<Skills />
				</div>
			</div>
		</section>
	);
}

export default About
