import { Component } from "react";

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
        // console.log(this.props)
        const { monstersProp } = this.props
        return (
            <>
                {monstersProp && monstersProp.map((monster: any) => {
                    return (
                        <h1 key={monster.id}>{monster.name}</h1>
                    )
                }
                )}
            </>
        )
    }
}

export default CardList