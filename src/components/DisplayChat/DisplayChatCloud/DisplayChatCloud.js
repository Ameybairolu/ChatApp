import classes from './DisplayChatCloud.module.css';

const DisplayChatCloud = (props) => {
    // console.log(props.messageData);
    return (
        <div className={`${classes.common_to_cloud} ${props.messageData.fromUser ? classes.div_align_right : ""}`} >
            <p>
                {props.messageData.text}
            </p>
            <h3>
                {props.messageData.fromUser ? "You" : props.messageFrom}
            </h3>
        </div>
    )
}

export default DisplayChatCloud;