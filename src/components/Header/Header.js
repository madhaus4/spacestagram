import logo from '../../images/spacestagramLogo-white.svg'
import './Header.css'


function Header({ isLoading, toggleFavoritesDisplay, isFavoritedDisplayed }) {
  return (
    <header>
    <img className='spacesta-logo-header' src={logo} alt='spacestagram logo white text and white semi circle around a planet that is purple, blue and pink ish' />
    <p>Brought to you by NASA's image API</p>
    <div className="container">
      <div className="center">
        <button className="btn"
          onClick={() => {
            toggleFavoritesDisplay();
            window.scrollTo(0, 0);
          }}>
          <svg width="180px" height="35px" viewBox="0 0 180 35" className="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
          </svg>
          {!isLoading && <span>{isFavoritedDisplayed ? 'Home' : 'View Favorites'}</span>}
          {isLoading && <span>Welcome</span>}
        </button>
      </div>
    </div>
  </header>
  )
}

export default Header;
