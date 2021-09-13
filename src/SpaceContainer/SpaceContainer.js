import './SpaceContainer.css'
import SpaceCard from '../SpaceCard/SpaceCard'

const SpaceContainer = ({ epicData }) => {
  console.log('epicData', epicData)
  let theEpic = epicData.map(element => {
    return <SpaceCard epicData={element} key={Date.now()} />
  })
  return (
    <main>{theEpic}</main>
  )
}


export default SpaceContainer;