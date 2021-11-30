import classes from './LoadingSpinner.module.css';

// When we are loading data from the server, it often takes time. This component is rendered when the data is loading

const LoadingSpinner = () => {
  return <div className={classes.spinner}></div>;
}

export default LoadingSpinner;
