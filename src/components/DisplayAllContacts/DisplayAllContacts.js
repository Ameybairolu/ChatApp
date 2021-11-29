import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EachChatTab from '../ChatTabs/EachChatTab/EachChatTab';

import classes from './DisplayAllContacts.module.css';

const DisplayAllContacts = () => {
    const allContacts = useSelector(state => {
        return state.allContacts;
    });

    const obtainAllContactLinks = allContacts.map(eachConvo => {
        return <Link key={`index${eachConvo.id}`} to={`/chat/${eachConvo.username}`} style={{
            color: 'white',
            textDecoration: 'none',
        }} ><EachChatTab data={eachConvo} /></Link>
    });

    return <div className={classes.container}>
        {obtainAllContactLinks}
    </div>;

}

export default DisplayAllContacts;