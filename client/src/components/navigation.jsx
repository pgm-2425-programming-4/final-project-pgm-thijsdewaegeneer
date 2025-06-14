
import { Link } from "@tanstack/react-router";

function Navigation() {
    console.log("Navigation.jsx succesfully loaded in")
    return (
        <nav className="header__navigation">
            <Link className="header__navigation-item" to="/">HOME</Link>

            <div className="header__navigation-list">
                <h2 className="header__navigation-list-title">PROJECTS</h2>
                <ul className="header__navigation-list-items">
                    <li className="header__navigation-list-item"><Link to="/projects/pgm3">PGM3</Link></li>
                    <li className="header__navigation-list-item"><Link to="/projects/pgm3">PGM4</Link></li>
                </ul>
            </div>

            <h2 className="header__navigation-list-title">INFO</h2>
            <Link className="header__navigation-item" to="/about">ABOUT</Link>
        </nav>
    )
}

export default Navigation