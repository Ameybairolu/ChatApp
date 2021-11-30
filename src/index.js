import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';

// BrowserRouter is required to provide the router services to all the child components

// PersistGate is required to provide persisted data to the child components

ReactDOM.render(<Provider store={store}><PersistGate loading={null} persistor={persistor}><HashRouter><App /></HashRouter></PersistGate></Provider>, document.getElementById('root'));
