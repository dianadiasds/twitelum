import React from 'react';
import ReactDOM from 'react-dom';

// CSS Global
import './assets/css/reset.css'
import './assets/css/btn.css'
import './assets/css/icon.css'
import './assets/css/iconHeart.css'
import './assets/css/notification.css'
import './assets/css/newTweet.css'


import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter} from 'react-router-dom'
import Roteamento from './routes.js'

ReactDOM.render(
    <BrowserRouter>
        <Roteamento/>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
