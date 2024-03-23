import "./splash.css";

const Splash = () => {
  return (
	<section className="splash">
			<h1>Welcome to My Portfolio</h1>
			<p>
				I am a web developer with a passion for creating beautiful and
				functional websites. I have experience with HTML, CSS, JavaScript,
				React, and Node.js. I am always looking to learn new technologies and
				improve my skills.
			</p>
			<div id="scroll-down-animation">
				<span className="mouse">
					<span className="move"></span>
				</span>
				<h2 className="scroll">Scroll down</h2>
			</div>
		</section>
  )
}

export default Splash
