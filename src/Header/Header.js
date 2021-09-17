import './Header.css'

function Header({ toggleFavoritesDisplay, isFavoritedDisplayed }) {
  return (
    <header>
    <h1>Spacestagram</h1>
    <div className='btn-container'>
      <button 
        className='view-likes-btn'
        onClick={() => toggleFavoritesDisplay()}
        >{isFavoritedDisplayed ? 'Home' : 'View Favorites'}
      </button>
    </div>
  </header>
  )
}

export default Header;