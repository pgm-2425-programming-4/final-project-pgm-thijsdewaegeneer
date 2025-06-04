
function Navigation() {
    console.log("Navigation.jsx succesfully loaded in")
    return (
        <nav className="header__navigation">
            <a className="header__navigation-item" href="">HOME</a>

            <div className="header__navigation-list">
                <h2 className="header__navigation-list-title">PROJECTS</h2>
                <ul className="header__navigation-list-items">
                    <li className="header__navigation-list-item">PGM3</li>
                    <li className="header__navigation-list-item">PGM4</li>
                </ul>
            </div>

            <h2 className="header__navigation-list-title">INFO</h2>
            <a className="header__navigation-item" href="">ABOUT</a>
        </nav>
    )
}

export default Navigation