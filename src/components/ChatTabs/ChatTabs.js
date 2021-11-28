import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import EachChatTab from "./EachChatTab/EachChatTab";

import classes from './ChatTabs.module.css';

const ChatTabs = () => {

    const [data, setData] = useState([]);

    const fetchChatDataFromFirebase = useCallback(
        async () => {
            try {
                const response = await fetch('https://chatapi-b173c-default-rtdb.asia-southeast1.firebasedatabase.app/chathistory.json');
                const result = await response.json();
                const allKeys = Object.keys(result);
                const requiredData = result[allKeys[0]];
                setData(requiredData);
            } catch (e) {
                console.log(e);
            }
        }, []
    )



    useEffect(() => {
        fetchChatDataFromFirebase()
    }, [fetchChatDataFromFirebase]);

    let eachChatTab = data.map(eachConvo => {
        return <NavLink key={`index${eachConvo.id}`} to={`/chat/${eachConvo.username}`} className={isActive => {
            return isActive ? `${classes.active}` : "";
        }
        } style={{ textDecoration: 'none' }} ><EachChatTab data={eachConvo} /></NavLink>
    })

    return <div>
        {eachChatTab}
    </div>

}

export default ChatTabs;