import './SpaceContainer.css'
import SpaceCard from '../SpaceCard/SpaceCard'

const SpaceContainer = ({ epicData }) => {
  console.log('epicData', epicData)
  let theEpic = epicData.map(element => {
    return <SpaceCard 
      // key={Date.now()} 
      epicData={element} 
    />
  })
  return (
    <main>{theEpic}</main>
  )
}


export default SpaceContainer;