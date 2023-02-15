import React from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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
          }
        )
      }
      );
  }

  render(): React.ReactNode {
    const divStyle = {
      fontFamily: "Arial",      
    };

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    })
    const OnChangeEvent = (event: any) => {
      const searchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return { searchField }
      })
    }
    return (
      <div className='App'>
        <h1 style={divStyle}>List of monsters</h1>
        <input type="search" className='search-box' placeholder='search monsters' 
        onChange={OnChangeEvent}/>
        <SearchBox />
       <CardList monstersProp={filteredMonsters}/>
      </div>
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