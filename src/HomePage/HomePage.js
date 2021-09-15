import React, { useState, useEffect } from 'react';
import SpaceContainer from '../SpaceContainer/SpaceContainer';
import Header from '../Header/Header';
import './HomePage.css'

const HomePage = () => {
  const [epicData, setEpicData] = useState([])
  const [favoritedPosts, setFavoritedPosts] = useState([])
  const [isFavorited, setIsFavorited] = useState(false)

  const fetchData = () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=1xvzSUJvKIPsf7PliA1VJPYWMTVNda8BblYK7z3r&count=10')
      .then(res => res.json())
      .then(data => setEpicData(data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const addToFavorites = (post) => {
    let likedPost = {
      id: Date.now(),
      ...post
    }
    setFavoritedPosts([...favoritedPosts, likedPost])
  }

  const toggleFavoritesDisplay = () => {
    setIsFavorited(!isFavorited)
  }

  return (
    <>
      <Header 
        isFavorited={isFavorited}
        toggleFavoritesDisplay={toggleFavoritesDisplay}
      />
      <SpaceContainer 
        epicData={!isFavorited ? epicData : favoritedPosts}
        addToFavorites={addToFavorites}
        favoritedPosts={favoritedPosts}
      />
      <footer>
        <p className='footer-text'>Thanks for visiting!</p>
      </footer>
    </>
  )
}


export default HomePage;