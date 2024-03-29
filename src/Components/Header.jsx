import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import "../styles/header.css";

export default function Header() {
	const [color, setColor] = useState("white");

	useEffect(() => {
		const backgroundColor = getComputedStyle(document.body).backgroundColor;
		const [r, g, b] = backgroundColor.match(/\d+/g).map(Number);

		// Simple check for brightness
		const isDarkBackground = r * 0.299 + g * 0.587 + b * 0.114 < 186;

		setColor(isDarkBackground ? "white" : "black");
	}, []);

	return (
		<header style={{ color: color }}>
			<HashLink to="/" id="logo" style={{ color: color }}>
				Huan&apos;s page
			</HashLink>
			<nav className="menu-options">
				<label htmlFor="nav-toggle" className="nav-toggle-label">
					Toggle Navigation
				</label>
				<input type="checkbox" id="nav-toggle" />
				<ul className="header-menu">
					<li>
						<HashLink smooth to="#main" style={{ color: color }}>
							Main
						</HashLink>
					</li>
					<li>
						<HashLink smooth to="#about-me" style={{ color: color }}>
							About
						</HashLink>
					</li>
					<li>
						<HashLink smooth to="#portfolio" style={{ color: color }}>
							Portfolio
						</HashLink>
					</li>
					<li>
						<HashLink smooth to="#contact" style={{ color: color }}>
							Contact
						</HashLink>
					</li>
				</ul>
			</nav>
			<div className="burger-menu" style={{ color: color }}>
				<label htmlFor="nav-toggle">
					<i className="fa-solid fa-bars"></i>
				</label>
			</div>
		</header>
	);
}
