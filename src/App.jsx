import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import './App.css';

import { Nav } from './containers/Nav';

const Tasks = lazy(() => import('./containers/Tasks'));
const Profile = lazy(() => import('./containers/Profile'));

const App = () => (
  <Router>
    <Nav />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Tasks}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
