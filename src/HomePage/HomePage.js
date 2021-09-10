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
    fetch('https://epic.gsfc.nasa.gov/api/enhanced?api_key=1xvzSUJvKIPsf7PliA1VJPYWMTVNda8BblYK7z3r')
      .then(res => res.json())
      .then(data => this.setState({epicData: data}))
  }

  render() {
    return (
      <>
        <h2>party ppl!</h2>
        <SpaceContainer epicData={this.state.epicData}/>
      </>
    )
  }
}


export default HomePage;