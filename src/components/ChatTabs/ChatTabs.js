import { NavLink } from "react-router-dom";
import EachChatTab from "./EachChatTab/EachChatTab";

import classes from './ChatTabs.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";

import { useParams, useHistory } from 'react-router-dom';
import { dataActions } from '../../store/index.js';

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

    let eachChatTab = props.searchFor === '' ? data.map(eachConvo => {
        return <NavLink key={`index${eachConvo.id}`} to={`/chat/${eachConvo.username}`} className={isActive => {
            return isActive ? `${classes.active}` : "";
        }
        } style={{ textDecoration: 'none', color: 'white' }} ><EachChatTab data={eachConvo} /></NavLink>
    }) : data.filter(eachConvo => eachConvo.name.includes(props.searchFor)
    ).map(eachConvo => {
        return <NavLink key={`index${eachConvo.id}`} to={`/chat/${eachConvo.username}`} className={isActive => {
            return isActive ? `${classes.active}` : "";
        }
        } style={{ textDecoration: 'none' }} ><EachChatTab data={eachConvo} /></NavLink>
    });

    return <div>
        {eachChatTab}
    </div>

}

export default ChatTabs;