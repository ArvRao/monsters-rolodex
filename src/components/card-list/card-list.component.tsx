import { Component } from "react";
import Card from "../card/card.component";
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
                    return (
                        <Card monsterProp={monster} key={monster.id}/>
                    )
                }
                )}
            </div>
        )
    }
}

export default CardList