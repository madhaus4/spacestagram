import loadingLogo from '../../images/spacestaLoadingLogo-black.png'
import loadingLogo2 from '../../images/spacestaLoadingLogo.png'
import './Loading.css'


const Loading = () => {
  console.log('blooop')
  return (
    <section className='loading-container'>
      <h1>loading...</h1>
      <img className='loading-logo2' src={loadingLogo2} alt='' />
      <img className='loading-logo1' src={loadingLogo} alt='' />
    </section>
  )
}


export default Loading;