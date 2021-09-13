import './SpaceContainer.css'
import SpaceCard from '../SpaceCard/SpaceCard'

const SpaceContainer = ({ epicData, likeAPost }) => {
  console.log('epicData', epicData)
  let theEpic = epicData.map(element => {
    return <SpaceCard 
      key={Date.now()} 
      epicData={element} 
      likeAPost={likeAPost}
    />
  })
  return (
    <main>{theEpic}</main>
  )
}


export default SpaceContainer;