import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  return (
    <div className="name-title-nav-container">
      <div className="name-title-container">
        <div className="name">
          <h1>Kevin Turney</h1>
        </div>
        <div className="title">
          <h2>Full Stack Web Developer </h2>
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default Header;
