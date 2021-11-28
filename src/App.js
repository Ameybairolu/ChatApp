import { Route, Switch, Redirect } from 'react-router-dom';
import classes from './App.module.css';
import AllConvos from './components/UI/AllConvos/AllConvos';
import DefaultScreen from './components/DefaultScreen';

import DisplayChat from './components/DisplayChat/DisplayChat';

import DisplayAllContacts from './components/DisplayAllContacts/DisplayAllContacts';

import { useEffect, useCallback } from "react";

import { useDispatch } from 'react-redux';
import { dataActions } from './store/index.js';

function App() {

  const dispatch = useDispatch();

  const fetchChatDataFromFirebase = useCallback(
    async () => {
      try {
        const response = await fetch('https://chatapi-b173c-default-rtdb.asia-southeast1.firebasedatabase.app/chathistory.json');
        const result = await response.json();
        const allKeys = Object.keys(result);
        dispatch(dataActions.databaseDataSet({
          obtainedData: result[allKeys[0]],
        }));
      } catch (e) {
        console.log(e);
      }
    }, [dispatch]
  )

  useEffect(() => {
    fetchChatDataFromFirebase()
  }, [fetchChatDataFromFirebase]);


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
