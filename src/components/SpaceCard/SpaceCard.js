import './SpaceCard.css'
import unfavoritedIcon from '../images/unfavorited.svg'
import favoritedIcon from '../images/favorited.svg'

const SpaceCard = ({ epicData, updateFavorites }) => {
  // if (epicData.media_type !== 'video') {
    return (
      <article>
        <div className='img-container'>
          <img src={epicData.url} alt='this is something' />
        </div>
        <div className='article-btn-container'>
          <img
            className='favorite-btn'
            onClick={() => updateFavorites(epicData)}
            src={!epicData.isFavorited ? unfavoritedIcon : favoritedIcon} 
          />
        </div>
        <div className='card-info'>
          <h2>{epicData.title}</h2>
          <h3>{epicData.date}</h3>
          <p>{epicData.explanation}</p>
        </div>
      </article>
    )
  // }
}


export default SpaceCard;