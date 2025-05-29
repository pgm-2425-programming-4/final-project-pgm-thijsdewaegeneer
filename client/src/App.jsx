import Navigation from './components/Navigation';
import SearchWrapper from './components/SearchWrapper';
import TaskBoard from './components/TaskBoard';

function App() {

  return ( 
    <>  
      <header>
        <Navigation />
      </header>
      <main>
        <SearchWrapper />
        <TaskBoard />
      </main>
    </>
  );
}

export default App;