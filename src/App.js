import { Route, Redirect } from 'react-router-dom';
import classes from './App.module.css';
import AllConvos from './components/UI/AllConvos/AllConvos';
import DefaultScreen from './components/DefaultScreen';

import DisplayChat from './components/DisplayChat/DisplayChat';

function App() {

  // async function addContacts() {
  //   const response = await fetch('https://chatapi-b173c-default-rtdb.asia-southeast1.firebasedatabase.app/chathistory.json', {
  //     method: 'POST',
  //     body: JSON.stringify(chat_data),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  // }

  return (
    <div className={classes.container}>
      <AllConvos />
      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>
      <Route path='/home' exact>
        <DefaultScreen />
      </Route>
      <Route path='/chat/:username'>
        <DisplayChat />
      </Route>
    </div>
  );
}

export default App;
