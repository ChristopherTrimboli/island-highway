import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// "proxy": "http://localhost:5000/",

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
