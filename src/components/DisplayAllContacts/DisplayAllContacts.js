import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EachChatTab from '../ChatTabs/EachChatTab/EachChatTab';

const DisplayAllContacts = () => {
    const allContacts = useSelector(state => {
        return state.allContacts;
    });

    const obtainAllContactLinks = allContacts.map(eachConvo => {
        return <Link key={`index${eachConvo.id}`} to={`/chat/${eachConvo.username}`} style={{ textDecoration: 'none' }} ><EachChatTab data={eachConvo} /></Link>
    });

    return <div>
        {obtainAllContactLinks}
    </div>;

}

export default DisplayAllContacts;