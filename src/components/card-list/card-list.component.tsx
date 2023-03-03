import Card from "../card/card.component";
import './card-list.styles.css'
interface MyProps {
    monstersProp: any
}

const CardList = ({monstersProp}: MyProps) => {
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

export default CardList