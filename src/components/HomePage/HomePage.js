import React, { useState, useEffect } from 'react';
import { getData } from '../../utils/apiCalls'
import { cleanData } from '../../utils/utilities'
import SpaceContainer from '../SpaceContainer/SpaceContainer';
import Header from '../Header/Header';
import './HomePage.css'

const HomePage = () => {
  const [epicData, setEpicData] = useState([])
  const [favoritedPosts, setFavoritedPosts] = useState([])
  const [isFavoritedDisplayed, setisFavoritedDisplayed] = useState(false)

  useEffect(() => {
      getData().then(data => setEpicData(cleanData(data)))
      retrieveFromStorage()
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
        <p className='footer-text'>Thanks for visiting!</p>
      </footer>
    </>
  )
}


export default HomePage;