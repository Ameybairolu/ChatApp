import classes from './SearchConvo.module.css';

// component to display the search input and getting the search query.

const SearchConvo = (props) => {

    return <input className={classes.search} type="text" placeholder="&#xf002; Search for conversation" style={{ fontFamily: "Arial, FontAwesome" }} onChange={props.onSearch.bind(this)} />
}


export default SearchConvo;