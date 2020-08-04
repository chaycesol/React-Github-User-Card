import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import './App.css';

// import App components
import UserCard from './components/UserCard';


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

//COMMENTING OUT - WILL MAKE YOU HIT API RATE LIMIT TOO QUICKLY! NOT NEEDED FOR PROJECT
// componentDidUpdate(prevProps, prevState) {
//   if(prevState.users !== this.state.users) {
//     axios.get(base_url)
//     .then(res => {
//       this.setState({
//         ...this.state,
//         data: res.data        
//     });
//   })
//   .catch(err => console.log(err));
// }
// }

loadUsers() {
  return (
    <div>
      <h3>Github User Cards</h3>
      <UserCard data={this.state.data} />
      <div>
      {this.state.followers.map(follower => {
        return <UserCard key={this.state.data.id} data={follower} />
      })}
      </div>
      
    </div>
  )
}

  render() {
    return (
      <div className="App">
            <StyledAppContainer>
        <header className="App-header">
          {this.state.data.length === 0 ? 
          'Please wait while data loads...' : 
          this.loadUsers()}
        </header>
      </StyledAppContainer>
      </div>
     );
   }
}

export default App;

const StyledAppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`