import './SpaceContainer.css'

const SpaceContainer = ({ epicData }) => {
  console.log(epicData)
  return epicData.map(element => {
    return (
      <article>
        <h3>{element.explanation}</h3>
        <img src={element.url} alt='this is something' />
      </article>
    ) 
  })
}


export default SpaceContainer;