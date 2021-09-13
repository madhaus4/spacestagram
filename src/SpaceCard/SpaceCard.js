import './SpaceCard.css'

const SpaceCard = ({ epicData, likeAPost }) => {
  return (
    <article>
      <div className='img-container'>
        <img src={epicData.url} alt='this is something' />
      </div>
      <div className='btn-container'>
        <button onClick={() => likeAPost(epicData)}>Like</button>
      </div>
      <div className='card-info'>
        <h2>{epicData.title}</h2>
        <h3>{epicData.date}</h3>
        <p>{epicData.explanation}</p>
        {/* <h4>{epicData.copyright}</h4> */}
      </div>
    </article>
  )
}


export default SpaceCard;