import classes from './AllConvos.module.css';
import SearchConvo from './SearchConvo/SearchConvo';
import ChatTabs from '../../ChatTabs/ChatTabs';

const AllConvos = () => {
    return (
        <div className={classes.chat_container}>
            <SearchConvo />
            <ChatTabs />
        </div>
    )
}

export default AllConvos;