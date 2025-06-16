import Navigation from "./Navigation";
import Searcher from "./Searcher"
import Board from "./Board";
import "../styles/base/main.css";

function App() {
    console.log("App.jsx succesfully loaded in")
    return(
        <>
        <header>
            <Navigation /> 
        </header>
        
        <main>
            <Searcher />
            <Board />
        </main>
        </>
    )
}
export default App