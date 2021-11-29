import classes from './SearchConvo.module.css';

const SearchConvo = (props) => {

    return <input className={classes.search} type="text" placeholder="Search for conversation" onChange={props.onSearch.bind(this)} />
}

export default SearchConvo;