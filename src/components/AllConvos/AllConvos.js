import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import SearchConvo from './SearchConvo/SearchConvo';
import ChatTabs from '../ChatTabs/ChatTabs';
import AddNewConvo from './AddNewConvo/AddNewConvo';
import classes from './AllConvos.module.css';

// The below styles field is defined in order to set the styling for the side bar.


const styles = {
    /* Individual item */
    bmItem: {
        display: 'inline-block',

        /* Our sidebar item styling */
        textDecoration: 'none',
        /* margin-bottom: 10px; */
        color: '#d1d1d1',
        transition: 'color 0.2s',
    },

    /* Change color on hover */
    bmItemHover: {
        color: 'white',
    },

    /* The rest copied directly from react-burger-menu docs */

    /* Position and sizing of burger button */
    bmBurgerButton: {
        position: 'fixed',
        width: '30px',
        height: '25px',
        left: '30px',
        top: '10px',
        zIndex: '3'
    },

    /* Color/shape of burger icon bars */
    bmBurgerBars: {
        background: 'white',
    },

    /* Position and sizing of clickable cross button */
    bmCrossButton: {
        height: '30px',
        width: '30px',
    },

    /* Color/shape of close button cross */
    bmCross: {
        background: '#bdc3c7',
    },

    /* General sidebar styles */
    bmMenu: {
        background: '#373a47',
        padding: '50px 0',
        fontSize: '1.15em',
    },
    /* Morph shape necessary with bubble or elastic */
    bmMorphShape: {
        fill: '#373a47',
    },

    /* Wrapper for item list */
    bmItemList: {
        color: '#b8b7ad',
    },

    /* Styling of overlay */
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)',
    },
}

// The component is responsible for handling the search query and displays the contents needed to be displayed in the side-bar

const AllConvos = () => {

    const [openItIs, setOpen] = useState(false);

    const handleStateChange = (state) => {
        setOpen(state.isOpen);
    }

    const closeSideBar = () => {
        setOpen(false)
    }

    const [searchedConvo, setSearchedConvo] = useState('');

    const searchHandler = (event) => {
        setSearchedConvo(event.target.value);
    }

    return (
        <Menu isOpen={openItIs} onStateChange={(state) => handleStateChange(state)} width={window.innerWidth <= 600 ? '100%' : '300px'} styles={styles}
        >
            <div className={classes.chat_container}>
                <SearchConvo onSearch={searchHandler} />
                <AddNewConvo close={closeSideBar} />
                <ChatTabs searchFor={searchedConvo} close={closeSideBar} />
            </div>
        </Menu >
    )
}

export default AllConvos;