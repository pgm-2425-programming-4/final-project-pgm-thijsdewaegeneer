    function Searcher () {
        console.log("Searcher loaded in succesfully")
        return (
            <section className="searcher">

                <h2 className="searcher__active-project">Active project: PGM3</h2>

                <div className="searcher__buttons">

                    <button className="searcher__button searcher__button--left">Add new task</button>
                    <button className="searcher__button searcher__button--right"><a href="/backlog" className="searcher__button link">View backlog</a></button>

                </div>
            </section>
        )
        
    }

    export default Searcher