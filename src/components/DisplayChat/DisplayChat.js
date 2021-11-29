import { useEffect, useState } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import DisplayChatCloud from './DisplayChatCloud/DisplayChatCloud';

import classes from './DisplayChat.module.css';

import ReactScrollableFeed from 'react-scrollable-feed';

import { useSelector, useDispatch } from 'react-redux';

import { dataActions } from '../../store/index.js';

// import LoadData from '../LoadData/LoadData';

const DisplayChat = () => {
    // LoadData();

    const dispatch = useDispatch();
    const history = useHistory();

    const allChatData = useSelector(state => state.chatdata);

    const allContacts = useSelector(state => state.allContacts);

    const params = useParams();

    const [enteredText, setEnteredText] = useState('');

    const requiredChat = allChatData.filter(eachChat => {
        return eachChat.username === params.username;
    });

    useEffect(() => {
        if (requiredChat.length === 0) {
            dispatch(dataActions.initializeNewChat({
                chatToAdd: allContacts.filter(eachContact => {
                    return eachContact.username === params.username;
                }),
            }));
        }
    }, [allContacts, dispatch, params.username, requiredChat.length]);

    const obtainChatCloud = requiredChat.length === 0 ? "Kuch nahi hai" : <ReactScrollableFeed style={{
        height: '100% !important',
        maxHeight: '100% !important'
    }}> {
            requiredChat[0].messages.map((eachMessage, index) => {
                return (
                    <DisplayChatCloud key={`message${index}`} messageData={eachMessage} messageFrom={requiredChat[0].username} urlForDP={requiredChat[0].dp} />
                );
            })
        } </ReactScrollableFeed >;

    // The below 2 functions are required to handle text-sending from the user's end

    const saveEnteredTextHandler = (event) => {
        setEnteredText(event.target.value);
    };

    const addNewTextHandler = (event) => {
        event.preventDefault();
        if (enteredText === '') {
            return;
        }
        dispatch(dataActions.updateChatData({
            changeTo: params.username,
            text: enteredText,
            time: Date.now(),
        }));
        setEnteredText('');
        history.push(`/chat/${params.username}`);
    };

    return (
        <div className={classes.container}>
            {requiredChat.length !== 0 &&
                <div className={classes.details_of_chat}>
                    <img src={requiredChat[0].dp} alt="dp" />
                    <h4>{requiredChat[0].name}</h4>
                </div>
            }
            <div className={classes.chats}>
                {requiredChat.length !== 0 && obtainChatCloud}
            </div>
            <form onSubmit={addNewTextHandler.bind(this)}>
                <input type="text" onChange={saveEnteredTextHandler.bind(this)} value={enteredText} />
                <button type="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
            </form>
        </div>
    )

}

export default DisplayChat;