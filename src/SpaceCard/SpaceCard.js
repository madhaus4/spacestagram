import './SpaceCard.css'

const SpaceCard = ({ epicData }) => {
  return (
    <article>
      <img src={epicData.url} alt='this is something' />
      <div className='card-info'>
        <h2>{epicData.title}</h2>
        <h3>{epicData.date}</h3>
        <p>{epicData.explanation}</p>
        <h4>{epicData.copyright}</h4>
      </div>
    </article>
  )
}


export default SpaceCard;