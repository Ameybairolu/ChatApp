const SearchConvo = (props) => {

    return <input type="text" placeholder="Search for conversation" onChange={props.onSearch.bind(this)} />
}

export default SearchConvo;