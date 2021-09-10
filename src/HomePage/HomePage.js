import { Component } from 'react';
import SpaceContainer from '../SpaceContainer/SpaceContainer';
import './HomePage.css'

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      epicData: []
    }
  }

  

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=1xvzSUJvKIPsf7PliA1VJPYWMTVNda8BblYK7z3r&count=10')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => this.setState({epicData: data}))
  }

  render() {
    console.log('data', this.state.epicData)
    return (
      <>
        <h2>party ppl!</h2>
        <SpaceContainer epicData={this.state.epicData}/>
      </>
    )
  }
}


export default HomePage;