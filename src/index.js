import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(<BrowserRouter><Provider store={store}><PersistGate loading={null} persistor={persistor}><App /></PersistGate></Provider></BrowserRouter>, document.getElementById('root'));


// https://github.com/academind/react-complete-guide-code/tree/20-building-mpas-with-react-router/code/21-finished/src