import React from 'react';
import './App.css';

interface IAddress {
  street?: string,
  suite?: string,
  city: string,
  zipcode?: string,
  geo?: {
    lat: string,
    lng: string
  },
  phone: string,
  website?: string
}

interface ICompany {
name: string,
catchPhrase?: string,
bs: string
}
interface IfaceUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    company: ICompany
}

interface MyState {
  monsters: IfaceUser[]
  searchField: string;
};

class App extends React.Component<{}, MyState> {

  state: MyState = {
    monsters: [],
    searchField: ''
  }
    
  componentDidMount(): void {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users: IfaceUser[]) =>
      {
        this.setState(
          () => {
            return {
              monsters: users
            }
          }, () => {
            console.log(this.state.monsters)
          }
        )
      }
      );
  }

  render(): React.ReactNode {
    const divStyle = {
      fontFamily: "Arial",      
    };

    const OnChangeEvent = (event: any) => {
      const searchString = event.target.value.toLocaleLowerCase();
      const filteredMonsters = this.state.monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchString)
      })
      console.log(filteredMonsters)
      this.setState(() => {
        return {
          monsters: filteredMonsters
        }
      })
    }
    return (
      <div className='App'>
        <h1 style={divStyle}>List of monsters</h1>
        <input type="search" className='search-box' placeholder='search monsters' 
        onChange={OnChangeEvent}/>
        {this.state.monsters.map((monster) => {
        return (
          <h1 key={monster.id}>{monster.name}</h1>
        )
      })}</div>
    )
  }
}

export default App;


/* 
control flow
1. Render
2. Did mount
3. setState
4. render
5. Second parameter of setState
*/