import classes from './EachChatTab.module.css';
const EachChatTab = (props) => {
    // console.log(props.data);
    return (
        <div className={classes.common}>
            <img src={props.data.dp} alt="dp" />
            <div>
                <h3>{props.data.name}</h3>
                <span>{props.data.latest}</span>
            </div>
        </div>
    );
}

export default EachChatTab;