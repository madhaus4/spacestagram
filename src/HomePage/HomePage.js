// import { Component } from 'react';
import React, { useState, useEffect } from 'react';
import SpaceContainer from '../SpaceContainer/SpaceContainer';
import Header from '../Header/Header';
import './HomePage.css'

const HomePage = () => {
  const [epicData, setEpicData] = useState([])
  const [favoritedPosts, setFavoritedPosts] = useState([])

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
  console.log('favoritedPosts', favoritedPosts)


  return (
    <>
      <Header />
      <SpaceContainer 
        epicData={epicData}
        addToFavorites={addToFavorites}
      />
    </>
  )
}


// class HomePage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       epicData: [],
//       likedPosts: [],
//     }
//   }

  // componentDidMount() {
  //   fetch('https://api.nasa.gov/planetary/apod?api_key=1xvzSUJvKIPsf7PliA1VJPYWMTVNda8BblYK7z3r&count=10')
  //     .then(res => res.json())
  //     .then(data => this.setState({epicData: data}))
  // }

//   likeAPost = (newlyLiked) => {
//     newlyLiked = {
//       id: Date.now() 
//     }
//     this.setState({likedPosts: [...this.state.likedPosts, newlyLiked]})
//   }

//   render() {
//     console.log('liked', this.state.likedPosts)
//     return (
//       <>
//         <SpaceContainer 
//           epicData={this.state.epicData}
//           likeAPost={this.likeAPost}
//         />
//       </>
//     )
//   }
// }


export default HomePage;