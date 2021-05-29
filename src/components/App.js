import './App.css';
import UsersList from './UsersList';
import ButtonFetchUsers from './ButtonFetchUsers';
import { Component } from 'react';

const API = 'https://randomuser.me/api/?results=5';

class App extends Component {
  state = {
    users: null,
  }

  handleDataFetch = () => {
    fetch(API)
    .then(response => {
      if (response.ok) {
        return response;
      }
      throw Error("Błąd!");
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        users: data.results,
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    const users = this.state.users;
    console.log(users)
    
    return (
      <div className="App">
        <ButtonFetchUsers click={this.handleDataFetch}/>
       { users ? <UsersList users={users}/> : users}
      </div>
    );
  }
}

export default App;
