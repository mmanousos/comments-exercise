import React from 'react';
import ReactDOM from 'react-dom';
import CommentDashboard from './components/CommentDashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommentDashboard />, document.getElementById('root'));
registerServiceWorker();