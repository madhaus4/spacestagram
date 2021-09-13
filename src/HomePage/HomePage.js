import { Component } from 'react';
import SpaceContainer from '../SpaceContainer/SpaceContainer';
import './HomePage.css'

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      epicData: [],
      likedPosts: [],
    }
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=1xvzSUJvKIPsf7PliA1VJPYWMTVNda8BblYK7z3r&count=10')
      .then(res => res.json())
      .then(data => this.setState({epicData: data}))
  }

  likeAPost = (newlyLiked) => {
    newlyLiked = {
      id: Date.now() 
    }
    this.setState({likedPosts: [...this.state.likedPosts, newlyLiked]})
  }

  render() {
    console.log('liked', this.state.likedPosts)
    return (
      <>
        <SpaceContainer 
          epicData={this.state.epicData}
          likeAPost={this.likeAPost}
        />
      </>
    )
  }
}


export default HomePage;