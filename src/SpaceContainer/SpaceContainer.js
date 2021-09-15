import './SpaceContainer.css'
import SpaceCard from '../SpaceCard/SpaceCard'

const SpaceContainer = ({ epicData, addToFavorites, favoritedPosts }) => {

  
  
  let theEpic = epicData.map(element => {
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