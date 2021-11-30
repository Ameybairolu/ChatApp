import { Link } from "react-router-dom";
import classes from './AddNewConvo.module.css';

// Component for the button that opens the contact list when we want to start a new conversation.

const AddNewConvo = (props) => {
    return (
        <Link to={'#/newchat'} onClick={props.close}>
            <button className={classes.convo_button}>Start New Conversation ➕</button>
        </Link>
    )
}

export default AddNewConvo;