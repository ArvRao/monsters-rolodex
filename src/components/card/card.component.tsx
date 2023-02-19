import { Component } from "react";

interface MyProps {
    monsterProp: any
}

class Card extends Component<MyProps,{}> {
    render() {
        const {id, name, email} = this.props.monsterProp;
        return (
            <div className="card-container" key={id}>
                            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x200`} />
                            <h2 key={id}>{name}</h2>
                            <p>{email}</p>
                        </div>
        )
    }
}

export default Card