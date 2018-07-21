import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './views/Dashboard';
import Graphics from './views/Graphics';
import registerServiceWorker from './registerServiceWorker';

if (document.getElementById('dashboard')) {
  ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}
if (document.getElementById('graphics')) {
  ReactDOM.render(<Graphics />, document.getElementById('graphics'));
}


registerServiceWorker();
