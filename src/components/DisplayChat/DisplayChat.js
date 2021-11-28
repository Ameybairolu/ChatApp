import { useCallback, useState, useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import DisplayChatCloud from './DisplayChatCloud/DisplayChatCloud';

import classes from './DisplayChat.module.css';

import ReactScrollableFeed from 'react-scrollable-feed';

import { useSelector, useDispatch } from 'react-redux';

const DisplayChat = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const allChatData = useSelector(state => {
        return state.chatdata;
    });

    const params = useParams();

    const [data, setData] = useState([]);

    const [enteredText, setEnteredText] = useState('');

    const fetchChatDataFromFirebase = useCallback(
        async () => {
            try {
                const response = await fetch('https://chatapi-b173c-default-rtdb.asia-southeast1.firebasedatabase.app/chathistory.json');
                const result = await response.json();
                const allKeys = Object.keys(result);
                dispatch({
                    type: 'databaseDataSet',
                    obtainedData: result[allKeys[0]],
                });

                // setTimeout(() => {
                //     getRequiredChatHistory();
                // }, 3000);
            } catch (e) {
                console.log(e);
            }
        }, [dispatch]
    )

    useEffect(() => {
        // console.log(allChatData);
        if (!allChatData) {
            return;
        }
        const requiredChat = allChatData.filter(eachChat => {
            return eachChat.username === params.username;
        });

        setData(requiredChat);
    }, [params.username, allChatData])

    useEffect(() => {
        fetchChatDataFromFirebase()
    }, [fetchChatDataFromFirebase]);

    const obtainChatCloud = data.length === 0 ? "Kuch nahi hai" : <ReactScrollableFeed> {data[0].messages.map((eachMessage, index) => {
        console.log(eachMessage);
        return (
            <DisplayChatCloud key={`message${index}`} messageData={eachMessage} messageFrom={data[0].username} />
        );
    })} </ReactScrollableFeed>;

    const saveEnteredTextHandler = (event) => {
        console.log(event.target.value);
        setEnteredText(event.target.value);
    };

    const addNewTextHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: 'updateChatData',
            changeTo: params.username,
            text: enteredText,
            time: new Date(),
        });
        setEnteredText('');
        history.push(`/chat/${params.username}`);
    };

    return (
        <div className={classes.container}>
            {data.length !== 0 && obtainChatCloud}
            <form onSubmit={addNewTextHandler.bind(this)}>
                <input type="text" onChange={saveEnteredTextHandler.bind(this)} value={enteredText} />
                <button type="submit">Send</button>
            </form>
        </div>
    )

}

export default DisplayChat;