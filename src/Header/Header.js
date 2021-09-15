import './Header.css'

function Header({ toggleFavoritesDisplay, isFavorited}) {
  return (
    <header>
    <h1>Spacestagram</h1>
    <div className='btn-container'>
      <button 
        className='view-likes-btn'
        onClick={() => toggleFavoritesDisplay()}
        >{isFavorited ? 'Home' : 'View Favorites'}
      </button>
    </div>
  </header>
  )
}

export default Header;