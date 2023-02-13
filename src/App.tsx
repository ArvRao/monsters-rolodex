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
  componentDidMount(): void {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users: IfaceUser[]) =>
      {
        console.log("users: ", users)
        this.setState(
          () => {
            return {
              monsters: users
            }
          }, () => {
            console.log("users data:", this.state.monsters)
          }
        )
      }
      );
  }

  render(): React.ReactNode {
    return (
     <></>
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