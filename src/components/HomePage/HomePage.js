import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/apiCalls'
import { cleanData } from '../../utils/utilities'
import Header from '../Header/Header';
import SpaceContainer from '../SpaceContainer/SpaceContainer';
import logo from '../../images/spacestagramLogo-black.svg'
import './HomePage.css'

const HomePage = () => {
  const [epicData, setEpicData] = useState([])
  const [favoritedPosts, setFavoritedPosts] = useState([])
  const [isFavoritedDisplayed, setisFavoritedDisplayed] = useState(false)

  useEffect(() => {
    retrieveFromStorage()
    getData()
      .then(data => setEpicData(cleanData(data)))
      .catch(error => console.log('ERR: ', error))
  }, [])

  const updateFavorites = (post) => {
    let foundFavorite = favoritedPosts.find(favorite => favorite.title === post.title)

    handleFavorite(foundFavorite || post)
    foundFavorite ? removeFromFavorites(foundFavorite) : addToFavorites(post)
  }

  const addToFavorites = (post) => {
    let likedPost = {
      id: `${post.title} ${post.date}`,
      isFavorited: true,
      ...post
    }
    setFavoritedPosts([...favoritedPosts, likedPost])
    saveToStorage(likedPost)
  }

  const handleFavorite = (favorite) => {
    const foundPost = epicData.find(post => post.title === favorite.title)
    foundPost.isFavorited = !foundPost.isFavorited
  }

  const removeFromFavorites = (post) => {
    let currentPosts = favoritedPosts.filter(favorite => favorite.title !== post.title)
    deleteFromStorage(post)
    setFavoritedPosts(currentPosts);
  }

  const toggleFavoritesDisplay = () => {
    setisFavoritedDisplayed(!isFavoritedDisplayed)
  }



  // LOCAL STORAGE
  const saveToStorage = (post) => {
    localStorage.setItem(post.id, JSON.stringify(post))
  }

  const retrieveFromStorage = () => {
    const getStoredPosts = Object.keys(localStorage).map(post => {
      return JSON.parse(localStorage.getItem(post))
    })
    setFavoritedPosts(getStoredPosts)
  }

  const deleteFromStorage = (post) => {
    localStorage.removeItem(post.id)
  }

  return (
    <>
      <Header 
        isFavoritedDisplayed={isFavoritedDisplayed}
        toggleFavoritesDisplay={toggleFavoritesDisplay}
      />
      <SpaceContainer 
        epicData={!isFavoritedDisplayed ? epicData : favoritedPosts}
        isFavoritedDisplayed={isFavoritedDisplayed}
        updateFavorites={updateFavorites}
      />
      <footer>
        <div className='closing-title'>Refresh the page for more images</div>
        <p className='footer-text'>Thanks for visiting!</p>
        <a href='#'><img 
          className='spacesta-logo' 
          src={logo} 
          alt='spacestagram logo of a purple, blue, pinkish planet with a black semi circle and black font color' 
        /></a>
        <a href='https://www.nasa.gov/'>Click here to visit NASA's website</a>
      </footer>
    </>
  )
}


export default HomePage;