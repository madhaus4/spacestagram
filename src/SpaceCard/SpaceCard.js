import './SpaceCard.css'

const SpaceCard = ({ epicData }) => {
  return (
    <article>
      <div className='img-container'>
        <img src={epicData.url} alt='this is something' />
      </div>
      <div className='btn-container'>
        <button>Like</button>
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