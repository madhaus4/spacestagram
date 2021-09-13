import './SpaceContainer.css'
import SpaceCard from '../SpaceCard/SpaceCard'

const SpaceContainer = ({ epicData, addToFavorites }) => {


  let theEpic = epicData.map(element => {
    return <SpaceCard 
      // key={Date.now()} 
      epicData={element} 
      addToFavorites={addToFavorites}
    />
  })
  return (
    <main>{theEpic}</main>
  )
}


export default SpaceContainer;