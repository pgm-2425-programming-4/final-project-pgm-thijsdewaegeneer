function Column () {
    console.log("Column succesfully loaded in")
    return (
        <>

        <div className="board__list-wrapper">
            <h2 className="board__list-title">To Do</h2>
            <ul className="board__list">
                <li className="board__list-item">
                <div className="card">
                    <h3 className="card__title"></h3>
                    <p className="card__context">
                    </p>
                </div>
                </li>
            </ul>
        </div>

        <div className="board__list-wrapper">
        <h2 className="board__list-title">In Progress</h2>
        <ul className="board__list">
            <li className="board__list-item">
            <div className="card">
                <h3 className="card__title"></h3>
                <p className="card__context"></p>
            </div>
            </li>
        </ul>
        </div>

        <div className="board__list-wrapper">
        <h2 className="board__list-title">Ready for Review</h2>
        <ul className="board__list">
            <li className="board__list-item">
            <div className="card">
                <h3 className="card__title"></h3>
                <p className="card__context">.</p>
            </div>
            </li>
        </ul>
        </div>

        <div className="board__list-wrapper">
        <h2 className="board__list-title">Done</h2>
        <ul className="board__list">
            <li className="board__list-item">
            <div className="card">
                <h3 className="card__title"></h3>
                <p className="card__context"></p>
            </div>
            </li>
        </ul>
        </div>
        </>
        
    )
}

export default Column