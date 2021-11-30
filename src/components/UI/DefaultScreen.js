import classes from './DefaultScreen.module.css';

// The default message when we are at the home page

const DefaultScreen = () => {
    return <div className={classes.default_screen}>
        <h1>Select a conversation to view</h1>
    </div>
}

export default DefaultScreen;