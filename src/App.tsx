import React from 'react';
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
  searchField: string;
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
    usersApi: [], 
    searchField: ""
  }

  componentDidMount(): void {
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

  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    })
  }


  render() {
    const {msg} = this.props
    const {count, monstersList, usersApi, searchField} = this.state
    const {onSearchChange} = this

    const filteredMonsters = usersApi.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className='App'>
       
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
         <input className='search-box' type="search" placeholder="search monsters" onChange={onSearchChange} /> <br />
        <h1>List of monsters: </h1>
        {/* <p>{this.state.monster1.name}</p> */}
        {filteredMonsters.map((monster) => {
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
