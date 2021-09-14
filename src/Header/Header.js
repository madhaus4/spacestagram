import './Header.css'

function Header() {
  return (
    <header>
    <h1>Spacestagram</h1>
    <div className='btn-container'>
      <button 
        className='view-likes-btn'
        >View Likes
      </button>
      <button 
        className='view-all-btn'
        >View All
      </button>
    </div>
  </header>
  )
}

export default Header;