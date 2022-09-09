import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface MyProps {
  msg?: string;
}

interface MyState {
  count: number; // like this
};

class App extends React.Component<MyProps, MyState> {

  state: MyState = {
    count: 10
  }


  render() {
    const {msg} = this.props
    const {count} = this.state

    return (
      <div>
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
        }}>Change count</button>
      </div>
    );
  }
}

export default App;
