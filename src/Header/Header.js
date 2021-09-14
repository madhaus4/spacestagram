import './Header.css'

function Header(props) {
  return (
    <header>
    <h1>Spacestagram</h1>
    <div className='btn-container'>
      <button 
        className='view-likes-btn'
        onClick={() => props.toggleFavoritesDisplay()}
        >View Likes
      </button>
      <button 
        className='view-all-btn'
        onClick={() => props.toggleFavoritesDisplay()}
        >View All
      </button>
    </div>
  </header>
  )
}

export default Header;