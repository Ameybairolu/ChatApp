import { Route, Redirect } from 'react-router-dom';
import classes from './App.module.css';
import AllConvos from './components/UI/AllConvos/AllConvos';
import DefaultScreen from './components/DefaultScreen';

function App() {
  return (
    <div className={classes.container}>
      <AllConvos />
      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>
      <Route path='/home' exact>
        <DefaultScreen />
      </Route>
    </div>
  );
}

export default App;
