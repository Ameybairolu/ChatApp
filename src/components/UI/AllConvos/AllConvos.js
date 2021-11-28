import classes from './AllConvos.module.css';
import SearchConvo from './SearchConvo/SearchConvo';
import ChatTabs from '../../ChatTabs/ChatTabs';
import { useState } from 'react';
import AddNewConvo from './AddNewConvo/AddNewConvo';


const AllConvos = () => {

    const [searchedConvo, setSearchedConvo] = useState('');

    const searchHandler = (event) => {
        setSearchedConvo(event.target.value);
    }

    return (
        <div className={classes.chat_container}>
            <SearchConvo onSearch={searchHandler} />
            <AddNewConvo />
            <ChatTabs searchFor={searchedConvo} />
        </div>
    )
}

export default AllConvos;