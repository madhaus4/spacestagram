import logo from '../../images/spacestagramLogo-white.svg'
import './Header.css'


function Header({ toggleFavoritesDisplay, isFavoritedDisplayed }) {
  return (
    <header>
    {/* <h1 className='tracking-in-contract-bck'>Spacestagram</h1> */}
    <img className='spacesta-logo-header' src={logo} />
    <p>Brought to you by NASA's image API</p>
    <div class="container">
      <div class="center">
        <button class="btn"
          onClick={() => toggleFavoritesDisplay()}>
          <svg width="180px" height="35px" viewBox="0 0 180 35" class="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
          </svg>
          <span>{isFavoritedDisplayed ? 'Home' : 'View Favorites'}</span>
        </button>
      </div>
    </div>

    {/* <div className='btn-container'>
      <button 
        className='view-likes-btn'
        onClick={() => toggleFavoritesDisplay()}
        >{isFavoritedDisplayed ? 'Home' : 'View Favorites'}
      </button>
    </div> */}
  </header>
  )
}

export default Header;


{/* <div class="container">
  <div class="center">
    <button class="btn">
      <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
      </svg>
      <span>HOVER ME</span>
    </button>
  </div>
</div> */}