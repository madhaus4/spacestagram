import './SpaceContainer.css'
import SpaceCard from '../SpaceCard/SpaceCard'

const SpaceContainer = ({ epicData, addToFavorites }) => {


  let theEpic = epicData.map(element => {
    // console.log(element)
    return <SpaceCard 
      key={element.title + element.date} 
      epicData={element} 
      addToFavorites={addToFavorites}
    />
  })
  return (
    <main>{theEpic}</main>
  )
}


export default SpaceContainer;