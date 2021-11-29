import classes from './DisplayChatCloud.module.css';

import ConvertTime from '../../nonJSFunctions/ConvertTime';

const DisplayChatCloud = (props) => {
    // console.log(props.messageData);
    return (
        <div className={`${classes.common_to_cloud} ${props.messageData.fromUser ? classes.div_align_right : ""}`} >
            <p>
                {props.messageData.text}
            </p>
            <h5>
                <span>
                    {!props.messageData.fromUser && <img src={props.urlForDP} alt="dp" />}
                    <span>
                        {props.messageData.fromUser ? "You" : props.messageFrom}
                    </span>
                </span>
                <span>
                    {ConvertTime(props.messageData.time)}
                </span>
            </h5>
        </div>
    )
}

export default DisplayChatCloud;