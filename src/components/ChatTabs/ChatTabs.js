import { NavLink } from "react-router-dom";
import EachChatTab from "./EachChatTab/EachChatTab";

import classes from './ChatTabs.module.css';

import { useSelector } from 'react-redux';

const ChatTabs = (props) => {
    // const [odata, setData] = useState([]);

    let data = useSelector(state => state.chatdata);

    let eachChatTab = props.searchFor === '' ? data.map(eachConvo => {
        return <NavLink key={`index${eachConvo.id}`} to={`/chat/${eachConvo.username}`} className={isActive => {
            return isActive ? `${classes.active}` : "";
        }
        } style={{ textDecoration: 'none' }} ><EachChatTab data={eachConvo} /></NavLink>
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