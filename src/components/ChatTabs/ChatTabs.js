import { NavLink } from "react-router-dom";
import EachChatTab from "./EachChatTab/EachChatTab";

import classes from './ChatTabs.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";

import { useParams, useHistory } from 'react-router-dom';
import { dataActions } from '../../store/index.js';

// This component renders the link to display each tab

const ChatTabs = (props) => {

    let data = useSelector(state => state.chatdata);
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        let noUseChatData = data.filter(eachData => {
            return eachData.messages.length === 0;
        });
        if (noUseChatData.length === 0) {
            return;
        }
        if (!history.location.pathname.includes(noUseChatData[0].username)) {
            dispatch(dataActions.removeEmptyChat());
        }

    }, [data, dispatch, history.location.pathname, params.username]);

    let eachChatTab = data.filter(eachConvo => eachConvo.name.toLowerCase().includes(props.searchFor.toLowerCase())
    ).map(eachConvo => {
        return <NavLink key={`index${eachConvo.id}`} to={`/chat/${eachConvo.username}`} onClick={props.close} className={isActive => {
            return isActive ? `${classes.active}` : "";
        }
        } style={{
            textDecoration: 'none', color: 'white', backgroundColor: '#003153'
        }} > <EachChatTab data={eachConvo} /></NavLink >
    });

    return <div>
        {eachChatTab.length > 0 && eachChatTab}
        {eachChatTab.length === 0 && <div style={{ textAlign: 'center' }}><h3>No chats to Load.</h3> Start a new conversation!</div>}
    </div>

}

export default ChatTabs;