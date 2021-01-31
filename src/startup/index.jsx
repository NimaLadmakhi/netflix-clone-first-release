/** @format */

import Home from 'pages/home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';

export default () => {
     return (
          <Router>
               <Switch>
                    <Route path='/' component={Home} />
               </Switch>
          </Router>
     );
};
