import { HashLink } from "react-router-hash-link";
import "../styles/header.css";

export default function Header() {
	return (
		<header>
			<HashLink to="/" id="logo">
				Huan&apos;s page
			</HashLink>
			<nav className="menu-options">
				<label htmlFor="nav-toggle" className="nav-toggle-label">
					Toggle Navigation
				</label>
				<input type="checkbox" id="nav-toggle" />
				<ul className="header-menu">
					<li>
						<HashLink smooth to="#main">
							Main
						</HashLink>
					</li>
					<li>
						<HashLink smooth to="#about-me">About</HashLink>
					</li>
					<li>
						<HashLink smooth to="#portfolio">Portfolio</HashLink>
					</li>
					<li>
						<HashLink smooth to="#contact">Contact</HashLink>
					</li>
				</ul>
			</nav>
			<div className="burger-menu">
				<label htmlFor="nav-toggle">
					<i className="fa-solid fa-bars"></i>
				</label>
			</div>
		</header>
	);
}
