import { Component } from "react";
import './card-list.styles.css'

interface MyProps {
    monstersProp: any
}

interface MyState {
    filteredMonsters: []
}
class CardList extends Component<MyProps, MyState> {
    state: MyState = {
        filteredMonsters: []
    }
    render() {
        const { monstersProp } = this.props
        return (
            <div className="card-list">
                {monstersProp && monstersProp.map((monster: any) => {
                const {name, email, id} = monster
                    return (
                        // move to it's own component
                        <div className="card-container" key={id}>
                            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x200`} />
                            <h2 key={id}>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )
                }
                )}
            </div>
        )
    }
}

export default CardList