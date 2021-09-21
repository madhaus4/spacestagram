import unfavoritedIcon from '../../images/unfavorited.svg'
import favoritedIcon from '../../images/favorited.svg'
import './SpaceCard.css'

const SpaceCard = ({ epicData, updateFavorites }) => {
  return (
    <article>
      <div className='img-container'>
        <img src={epicData.url} alt={`${epicData.title}`} />
      </div>
      <div className='article-btn-container'>
        <img
          className='favorite-btn flip-vertical-right'
          onClick={() => updateFavorites(epicData)}
          src={!epicData.isFavorited ? unfavoritedIcon : favoritedIcon} 
          alt='heart shape with black outline when not favorited and black fill when post is favorited'
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

