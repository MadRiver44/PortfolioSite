import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Header from './Header';
import Nav from './Nav';
import Publications from './Publications';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/publications" component={Publications} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
};

export default App;
