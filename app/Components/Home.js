import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Nav from './Nav';
import Header from './Header';
// import Hiking from '../../public/images/hiking.jpg';
// import Family from '../../public/images/family.jpg';
// import Kody from '../../public/images/kody.jpg';

const Home = () => {
  return (
    <div className="container">
      <Header />

      <div className="section-about">
        <div className="my-intro">
          <p>
            Hello! I'm Kevin Turney and I help teams build great products. Every project for me is
            an opportunity to not only learn and grow as a Dev, but to creatively solve complex
            problems and deliver solid results.
          </p>

          <p className="links">
            {' '}
            <a href="https://www.linkedin.com/in/kevinturney">LinkedIn</a>
            <a href="mailto:kmturney@optonline.net">kmturney@optonline.net</a>
          </p>

          {/* ---------- Component Expertise-------------*/}
          <div className="parent">
            <div className="expertise expertise1">
              <i className="fa fa-lightbulb-o blue" aria-hidden="true" />
              <h3>Ideas</h3>
              <p>
                Combine analytical ability and creativity and fantastic ideas happen. Solutions are
                sometimes simple to understand, yet complex to implement. Creativity and imagination
                cross that bridge.
              </p>
            </div>
            {/* ---------- Component Expertise-------------*/}
            <div className="expertise expertise2">
              <i className="fa fa-magic blue" aria-hidden="true" />
              <h3>Ui/Ux</h3>
              <p>
                Collaboration with the client, the design team, project manager, and dev team is
                crucial to creating an all star product. Each stakeholder has a vision and it is up
                to a full stack dev to bring that vision to life. I've got the skills to bring it
                home!
              </p>
            </div>
            {/* ---------- Component Expertise-------------*/}
            <div className="expertise expertise3">
              <i className="fa fa-code blue" aria-hidden="true" />
              <h3>Code</h3>
              <p>
                I constantly hone my skills to be current and fluent in the most current
                technologies. From Async/Await to React, Redux, or Rails, I choose my tools wisely
                and evaluate precisely what the job requires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
