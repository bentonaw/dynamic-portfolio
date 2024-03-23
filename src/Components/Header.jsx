import { Link, NavLink } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<Link to="/" id="logo">
				Huan
			</Link>
			<nav className="menu-options">
				<label htmlFor="nav-toggle" className="nav-toggle-label">
					Toggle Navigation
				</label>
				<input type="checkbox" id="nav-toggle" />
				<ul className="header-menu">
					<li>
						<NavLink to="/">Main</NavLink>
					</li>
					<li>
						<NavLink to="/about" className="active">
							About
						</NavLink>
					</li>
					<li>
						<NavLink to="/portfolio">Portfolio</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
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
