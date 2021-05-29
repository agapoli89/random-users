import './App.css';
import UsersList from './UsersList';
import ButtonFetchUsers from './ButtonFetchUsers';
import { Component } from 'react';

const API = 'https://randomuser.me/api/?results=';

class App extends Component {
  state = {
    users: [],
  }

  handleDataFetch = (usersNumber) => {
    fetch(`${API}${usersNumber}`)
    .then(response => {
      if (response.ok) {
        return response;
      }
      throw Error("Błąd!");
    })
    .then(response => response.json())
    .then(data => {
      if (Number(usersNumber) === 5) {
        this.setState({
          users: data.results,
        })
      } else if (Number(usersNumber) === 1) {
        const user = data.results;
        this.setState(prevState => ({
        users: prevState.users.concat(user)
      }))
      }
    })
    .catch(error => console.log(error))
  }

  render() {
    const users = this.state.users;

    return (
      <div className="App">
        <ButtonFetchUsers click={this.handleDataFetch} text="Pokaż 5 użytkowników" fetchedUsersNumber="5"/>
        <ButtonFetchUsers click={this.handleDataFetch} text="Dodaj użytkownika" fetchedUsersNumber="1"/>
       { users.length > 0 ? <UsersList users={users}/> : users}
      </div>
    );
  }
}

export default App;
