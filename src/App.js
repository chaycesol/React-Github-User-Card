import React from 'react';
import axios from 'axios';
// import { v4 as uuid } from 'uuid';
// import styled from 'styled-components'
import './App.css';

const username = "chaycesol"
const base_url = `https://api.github.com/users/${username}`
const follow_url = `https://api.github.com/users/${username}/followers`

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      followers: []
    }
  }

componentDidMount() {
  axios
      .get(base_url)
      .then(res => {
        this.setState({
          ...this.state,
          data: res.data
        });
        console.log(res.data)
      })
      .then(() =>{
        axios.get(follow_url).then(res => {
          this.setState({
            ...this.state,
            followers: res.data
          })
          console.log(res.data)
        })
      })
      .catch(err => console.log(err));
  }


componentDidUpdate(prevProps, prevState) {
  if(prevState.users !== this.state.users) {
    axios.get(base_url)
    .then(res => {
      this.setState({
        ...this.state,
        data: res.data        
    });
  })
  .catch(err => console.log(err));
}
}


  render() {
    return (
      <div className="App">
        <h1>Github UserCards: React Version</h1>
        <div className="userCards">
          <div>
            Card Place Holder
          </div>
        </div>
      </div>
     );
   }
}

export default App;
