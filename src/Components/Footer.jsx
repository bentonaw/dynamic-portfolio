import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer>
			<nav className="footer-nav">
				<p> &copy; 2024 Huan Yang Ooi</p>
				<ul className="footer-socials">
					<li>
						<Link
							to="https://github.com/bentonaw"
							target="_blank"
							rel="noopener noreferrer"
							title="link to github"
						>
							<i className="fa-brands fa-github"></i>
						</Link>
					</li>
					<li>
						<Link
							to="https://www.linkedin.com/in/huan-yang-ooi-74a824127/"
							target="_blank"
							rel="noopener noreferrer"
							title="link to linkedin"
						>
							<i className="fa-brands fa-linkedin"></i>
						</Link>
					</li>
					<li>
						<Link
							to="https://www.instagram.com/yoedmund/"
							target="_blank"
							rel="noopener noreferrer"
							title="link to instagram"
						>
							<i className="fa-brands fa-instagram"></i>
						</Link>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
