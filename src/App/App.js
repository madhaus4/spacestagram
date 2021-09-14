import HomePage from '../HomePage/HomePage'
import './App.css';


const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Spacestagram</h1>
        <div>
          <button>View Likes</button>
          <button>View All</button>
        </div>
      </header>
      <HomePage />
    </div>
  );
}

export default App;
