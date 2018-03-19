import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './Register/Register';
import Routers from './Routes/React.Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routers />, document.getElementById('root'));
registerServiceWorker();
