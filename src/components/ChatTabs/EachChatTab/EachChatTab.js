import classes from './EachChatTab.module.css';

// The component is responsible for rendering each and every chat tab.

const EachChatTab = (props) => {
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