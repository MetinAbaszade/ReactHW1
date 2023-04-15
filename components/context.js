import React, { Component } from 'react'

const UserContext = React.createContext();

export class UserProvider extends Component {
  state = {
    isDarkMode: false,
    users: [
      {
        id: 1,
        name: "Matin",
        salary: 1000,
        department: "Taxi"
      },
      {
        id: 2,
        name: "Anara",
        salary: 2000,
        department: "Desinger"
      },
      {
        id: 3,
        name: "Fidan",
        salary: 2500,
        department: "Hacker"
      },
      {
        id: 4,
        name: "Cavid",
        salary: 10000,
        department: "Memur"
      }
    ],
    deleteUser: () => { console.log("delete function") },
    setisDarkMode: () => {
      console.log(this.state.isDarkMode);
      this.setState(prevState => ({ isDarkMode: (!prevState.isDarkMode) }));
      console.log(this.state.isDarkMode);
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;