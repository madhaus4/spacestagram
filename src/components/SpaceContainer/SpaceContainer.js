import './SpaceContainer.css'
import SpaceCard from '../SpaceCard/SpaceCard'

const SpaceContainer = ({ epicData, isFavoritedDisplayed, updateFavorites }) => {
  let theEpic = epicData.map(element => {
    if (element.media_type !== 'video') {
      return <SpaceCard 
        key={element.title + element.date} 
        epicData={element} 
        updateFavorites={updateFavorites}
        isFavoritedDisplayed={isFavoritedDisplayed}
      />
    }
  });

  return (
    <main>{theEpic}</main>
  )
}


export default SpaceContainer;