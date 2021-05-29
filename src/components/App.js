import './App.css';
import UsersList from './UsersList';
import ButtonFetchUsers from './ButtonFetchUsers';
import { Component } from 'react';

const API = 'https://randomuser.me/api/?results=';

class App extends Component {
  state = {
    users: null,
  }

  handleDataFetch = () => {
    fetch(`${API}5`)
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

  handleDataFetchOne = () => {
    console.log('handleDataFetchOne')
  }

  render() {
    const users = this.state.users;
    console.log(users)
    
    return (
      <div className="App">
        <ButtonFetchUsers click={this.handleDataFetch} text="Pokaż 5 użytkowników"/>
        <ButtonFetchUsers click={this.handleDataFetchOne} text="Dodaj użytkownika"/>
       { users ? <UsersList users={users}/> : users}
      </div>
    );
  }
}

export default App;
