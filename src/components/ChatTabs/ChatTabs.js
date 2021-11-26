import { NavLink } from "react-router-dom";
import EachChatTab from "./EachChatTab/EachChatTab";

import classes from './ChatTabs.module.css';

const SAMPLE_CHAT_LIST = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "leanne",
        "dp": "https://image.shutterstock.com/image-vector/silhouette-people-unknown-male-person-260nw-1372192277.jpg",
        "latest": "Kya re"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "ervin",
        "dp": "https://image.shutterstock.com/image-vector/silhouette-people-unknown-male-person-260nw-1372192277.jpg",
        "latest": "Sure"
    }
];

const ChatTabs = () => {
    let eachChatTab = SAMPLE_CHAT_LIST.map(eachConvo => {
        return <NavLink to={`/${eachConvo.username}`} className={isActive => {
            return isActive ? `${classes.active}` : "";
        }
        }><EachChatTab /></NavLink>
    })

    return <div>
        {eachChatTab}
    </div>

}

export default ChatTabs;