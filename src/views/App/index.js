import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {Card} from 'antd';
import {createHashHistory} from 'history';

import Index from '../Index';
import BlogLayout from '../BlogLayout';
import Home from '../Home';
import Resume from '../Resume';
import './index.css';

export default App;

const history = createHashHistory();

function App() {
  return(
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/index' component={Index} />
        <Route exact path='/blog/:details' component={BlogLayout}/>
        <Route exact path='/resume' component={Resume}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

function NotFound() {
  return(
    <div>
      <Card>
        You seem to be lost.
      </Card>
    </div>
  );
}

