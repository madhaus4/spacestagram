import './SpaceContainer.css'

const SpaceContainer = ({ epicData }) => {
  console.log(epicData)
  return epicData.map(element => {
    return (
      <article key={Date.now()}>
        <img src={element.url} alt='this is something' />
        <h2>{element.title}</h2>
        <h3>{element.date}</h3>
        <p>{element.explanation}</p>
        <h4>{element.copyright}</h4>
      </article>
    ) 
  })
}


export default SpaceContainer;