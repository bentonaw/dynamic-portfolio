export default function Header() {
    return	(	
    <header>
            <a href="Index.html" id="logo">
                Huan
            </a>
            <nav className="menu-options">
                <label htmlFor="nav-toggle" className="nav-toggle-label">
                    Toggle Navigation
                </label>
                <input type="checkbox" id="nav-toggle" />
                <ul className="header-menu">
                    <li>
                        <a href="Main.html">Main</a>
                    </li>
                    <li>
                        <a href="About.html" className="active">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="Portfolio.html">Portfolio</a>
                    </li>
                    <li>
                        <a href="Contact.html">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="burger-menu">
                <label htmlFor="nav-toggle">
                    <i className="fa-solid fa-bars"></i>
                </label>
            </div>
        </header>)
		
}