import Navigation from "./Navigation";
import Searcher from "./Searcher"
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
        </main>
        </>
    )
}
export default App