import './search-box.styles.css'

interface MyProps {
    onChangeHandler: any
    placeHolder: string
    className: string
}

export const SearchBox = ({onChangeHandler,placeHolder,className}: MyProps) => {
        return (
            <div>
            <input className={`search-box ${className}`} type="search" onChange={onChangeHandler} placeholder={placeHolder}/>
            </div>
        )
    }

export default SearchBox