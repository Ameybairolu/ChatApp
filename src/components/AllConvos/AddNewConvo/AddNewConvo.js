import { Link } from "react-router-dom";
import classes from './AddNewConvo.module.css';

const AddNewConvo = () => {
    return (
        <Link to={'/newchat'}>
            <button className={classes.convo_button}>Start New Conversation ➕</button>
        </Link>
    )
}

export default AddNewConvo;