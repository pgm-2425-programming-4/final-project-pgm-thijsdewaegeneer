import Column from "./Column"

function Board({ projectId}) {
    console.log("Board succesfully loaded")

    return (
        <div className="board">
            <Column projectId={projectId} />
        </div>
    )
}

export default Board