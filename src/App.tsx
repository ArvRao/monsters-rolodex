import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface MyProps {
  msg?: string;
}

interface MyState {
  count: number;
  monstersList:
    {
      id: number
      name: string;
      age: number
    } []
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
    ]
  }


  render() {
    const {msg} = this.props
    const {count} = this.state

    return (
      <>
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
        {this.state.monstersList.map((monster) => {
          return (
          <div key={monster.id}>
           <p>{monster.name} is {monster.age} years old.</p>
          </div>
          )
        })}
      </>
    );
  }
}

export default App;
