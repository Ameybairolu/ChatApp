import { Route, Switch, Redirect } from 'react-router-dom';

import classes from './App.module.css';
import AllConvos from './components/AllConvos/AllConvos';
import DefaultScreen from './components/DefaultScreen';

import DisplayChat from './components/DisplayChat/DisplayChat';

import DisplayAllContacts from './components/DisplayAllContacts/DisplayAllContacts';

import LoadData from './components/LoadData/LoadData';

function App() {

  LoadData();

  return (
    <div className={classes.container}>
      <AllConvos />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact>
          <DefaultScreen />
        </Route>
        <Route path='/chat/:username'>
          <DisplayChat />
        </Route>
        <Route path='/newchat'>
          <DisplayAllContacts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
