import './SpaceCard.css'
import unfavoritedIcon from '../unfavorited.svg'
import favoritedIcon from '../favorited.svg'

const SpaceCard = ({ epicData, addToFavorites }) => {
  return (
    <article>
      <div className='img-container'>
        <img src={epicData.url} alt='this is something' />
      </div>
      <div className='article-btn-container'>
        <img
          className='favorite-btn'
          onClick={() => addToFavorites(epicData)}
          src={unfavoritedIcon} 
        />
      </div>
      <div className='card-info'>
        <h2>{epicData.title}</h2>
        <h3>{epicData.date}</h3>
        <p>{epicData.explanation}</p>
      </div>
    </article>
  )
}


export default SpaceCard;