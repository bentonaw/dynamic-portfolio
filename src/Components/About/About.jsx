import "../../styles/about.css";
import Education from "./Education";
import DevSkills from "./DevSkills";
import MiscSkills from "./MiscSkills";
import Experience from "./Experience";
import "../../styles/skills.css";

export default function About() {
	return (
		<section className="about-me">
			<h2>About Me:</h2>
			<div>
				<p>
					I am a web developer with a passion for creating beautiful and
					functional websites. I have experience with HTML, CSS, JavaScript,
					React, and Node.js. I am always looking to learn new technologies and
					improve my skills.
				</p>
			</div>
			<div>
				<Education />
			</div>
			<div>
				<Experience />
			</div>
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
