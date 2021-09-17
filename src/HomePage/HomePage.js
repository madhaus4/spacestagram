import React, { useState, useEffect } from 'react';
import { cleanData } from '../utilities'
import SpaceContainer from '../SpaceContainer/SpaceContainer';
import Header from '../Header/Header';
import './HomePage.css'

const HomePage = () => {
  const [epicData, setEpicData] = useState([])
  const [favoritedPosts, setFavoritedPosts] = useState([])
  const [isFavoritedDisplayed, setisFavoritedDisplayed] = useState(false)

  const fetchData = () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=1xvzSUJvKIPsf7PliA1VJPYWMTVNda8BblYK7z3r&count=10')
      .then(res => res.json())
      .then(data => setEpicData(cleanData(data)))
  }

  useEffect(() => {
      fetchData()
      retrieveFromStorage()
  }, [])

  const handleFavorite = (favorite) => {
    // console.log('favorite++ ', favorite)
    const foundPost = epicData.find(post => post.title === favorite.title)
    // console.log('foundPost++ ', foundPost)
    foundPost.isFavorited = !foundPost.isFavorited
  }

  const updateFavorites = (post) => {
    let foundFavorite = favoritedPosts.find(favorite => favorite.id === post.id)

    foundFavorite ? removeFromFavorites(foundFavorite) : addToFavorites(post)
  }

  const addToFavorites = (post) => {
    let likedPost = {
      id: `${post.title} ${post.date}`,
      isFavorited: true,
      ...post
    }
    // console.log('likedPost>>> ', likedPost)
    saveToStorage(likedPost)
    setFavoritedPosts([...favoritedPosts, likedPost])
    handleFavorite(likedPost)
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