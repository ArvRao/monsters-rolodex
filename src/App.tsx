import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import UseEffectEg from './components/test-folder/useEffectEg';
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

const App = () => {
    const [searchField, setSearchField] = useState('')
    const [changeString, setChangeString] = useState('')
    const [monsters, setMonsters] = useState<IfaceUser[]>([])
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users: IfaceUser[]) =>
                setMonsters(users))
    }, [])

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster: IfaceUser) => {
            return monster.name.toLocaleLowerCase().includes(searchField)
          })
        setFilteredMonsters(newFilteredMonsters)
        console.log('effect is firing')
    }, [monsters, searchField])

    const OnChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString)
    }

    const OnChangeString = (event: React.ChangeEvent<HTMLInputElement>) => {
        const changeStringField = event.target.value.toLocaleLowerCase();
        setChangeString(changeStringField)
    }

    return (
        <div className='App'>
            <h1 className='app-title'>Monsters Rolodex</h1>
            <SearchBox className="monsters-search-box" onChangeHandler={OnChangeEvent} placeHolder="search monsters" /> <br />
            <SearchBox className="monsters-search-box" onChangeHandler={OnChangeString} placeHolder="search monsters" />
            <CardList monstersProp={filteredMonsters}/> <br />
            <UseEffectEg />
        </div>
    )
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