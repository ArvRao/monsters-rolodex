import { Component, ReactNode } from "react"
import './search-box.styles.css'

interface MyProps {
    onChangeHandler: any
    placeHolder: string
    className: string
}

class SearchBox extends Component<MyProps, {}> {
    render(): ReactNode {
        return (
            <div>
            <input className={`search-box ${this.props.className}`} type="search" onChange={this.props.onChangeHandler} placeholder={this.props.placeHolder}/>
            </div>
        )
    }
}

export default SearchBox