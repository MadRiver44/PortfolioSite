import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Projects from './Projects';
import About from './About';

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <NavLink to="/">
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/about">
          <h3>About</h3>
        </NavLink>
        <NavLink to="/projects">
          <h3>Projects</h3>
        </NavLink>
        {/*<a href="https://github.com/MadRiver44" target="_blank">
          <h3>Github</h3>
        </a>*/}
      </div>
      {/*<hr />*/}
    </div>
  );
};

export default Nav;
