import Column from "./Column"

function Board() {
    console.log("Board succesfully loaded")

    return (
        <div className="board-wrapper">
            <Column />
        </div>
    )
}

export default Board