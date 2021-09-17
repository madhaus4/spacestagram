import SpaceCard from '../SpaceCard/SpaceCard'
import './SpaceContainer.css'

const SpaceContainer = ({ epicData, isFavoritedDisplayed, updateFavorites }) => {
  const filteredData = epicData.filter(element => element.media_type !== 'video' || element.media_type !== 'other')
  const theEpic = filteredData.map(element => {
    return <SpaceCard 
      key={element.title + element.date} 
      epicData={element} 
      updateFavorites={updateFavorites}
      isFavoritedDisplayed={isFavoritedDisplayed}
    />
  });

  return (
    <main>{theEpic}</main>
  )
}


export default SpaceContainer;