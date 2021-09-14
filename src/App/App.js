import HomePage from '../HomePage/HomePage'
import './App.css';


const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Spacestagram</h1>
        <div className='btn-container'>
          <button className='view-likes-btn'>View Likes</button>
          <button className='view-all-btn'>View All</button>
        </div>
      </header>
      <HomePage />
    </div>
  );
}

export default App;
