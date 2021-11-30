import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import EachChatTab from '../ChatTabs/EachChatTab/EachChatTab';

import classes from './DisplayAllContacts.module.css';
import LoadingSpinner from '../UI/LoadingSpinner';

// This component renders the contact list

const DisplayAllContacts = () => {

    const [isLoading, setIsLoading] = useState(true);

    const allContacts = useSelector(state => {
        return state.allContacts;
    });

    const [obtainAllContactLinks, setAllContactLinks] = useState([]);

    useEffect(() => {
        setAllContactLinks(allContacts.map((eachConvo, index) => {
            if (allContacts.length !== 0 && index === (allContacts.length - 1)) {
                setIsLoading(false);
            }
            return <Link key={`index${eachConvo.id}`} to={`/chat/${eachConvo.username}`} style={{
                color: 'white',
                textDecoration: 'none',
            }} ><EachChatTab data={eachConvo} /></Link>;
        }));
    }, [allContacts]);

    return (
        <div className={classes.container}>
            <div className={classes.nav_bar}>
            </div>
            {
                isLoading && <LoadingSpinner />
            }
            {!isLoading && <div className={classes.area_for_chat}>
                {obtainAllContactLinks}
            </div>}
        </div>
    );

}

export default DisplayAllContacts;