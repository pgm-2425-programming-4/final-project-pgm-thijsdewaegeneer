
import { Link } from "@tanstack/react-router";

function Navigation() {
    console.log("Navigation.jsx succesfully loaded in")
    return (
        <nav className="header__navigation">
            <Link className="header__navigation-item" to="/">HOME</Link>

            <div className="header__navigation-list">
                <h2 className="header__navigation-list-title">PROJECTS</h2>
                <ul className="header__navigation-list-items">
                    <li className="header__navigation-list-item"><Link to="/projects/nil5uohbhtd7s8xkkf2yjo5k">PGM3</Link></li>
                    <li className="header__navigation-list-item"><Link to="/projects/b7x9qqj5a2wood1wvxsoy72m">PGM4</Link></li>
                </ul>
            </div>

            <h2 className="header__navigation-list-title">INFO</h2>
            <Link className="header__navigation-item" to="/about">ABOUT</Link>
        </nav>
    )
}

export default Navigation