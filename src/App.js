import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
      </div>
    </Router>
  );
}

export default App;
