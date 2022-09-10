import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface MyProps {
  msg?: string;
}

interface IfaceUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      },
      phone: string,
      website: string
    },
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

interface MyState {
  count: number;
  monstersList:
    {
      id: number
      name: string;
      age: number
    } []
  usersApi: IfaceUser[]
};

class App extends React.Component<MyProps, MyState> {
  state: MyState = {
    count: 10,
    monstersList: [
      {
        id: 8178,
        name: "Monster1",
        age: 23
      },
      {
        id: 8134,
        name: "Monster2",
        age: 20
      }
    ],
    usersApi: []
  }

  componentDidMount(): void {
    console.log("componentdid mount executed");
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users: IfaceUser[]) => this.setState(
        () => {
          return {
            usersApi: users
          }
        }, () => {
          console.log("Updated monsters: API:", this.state.usersApi);
        }
      ));
  }


  render() {
    console.log("render method after constructor");
    const {msg} = this.props
    const {count} = this.state

    return (
      <div className='text-align: center'>
        Message: {msg ? msg : "No message"} <br />
        Count: {count} <br />
        <button onClick={() => {
          this.setState((state, props) => {
            console.log("Previous state: ", state.count);
            return {count: 22};
          }, () => {
            // destructure again for re-rendering, runs after state change is applied
            const {count} = this.state
            console.log("Count", count)
          })
        }}>Change count</button> <br />
        <h1>List of monsters: </h1>
        {/* <p>{this.state.monster1.name}</p> */}
        {this.state.usersApi.map((monster) => {
          return (
          <div key={monster.id}>
           <p>{monster.name} lives in {monster.address.city} city.</p>
          </div>
          )
        })}
      </div>
    );
  }
}

export default App;
