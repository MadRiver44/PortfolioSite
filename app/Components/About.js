import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Cookies from '../../public/images/cookies.jpg';
import Kody from '../../public/images/kody.jpg';
import Reacto from '../../public/images/react.svg';
import Elvis from '../../public/images/kevin_heather_candid_067.jpg';
import ReactSVG from '../../public/images/react.svg';
import ReduxSVG from '../../public/images/redux.svg';
import ES6SVG from '../../public/images/es6.svg';
import CSS3SVG from '../../public/images/css3.svg';
import RubySVG from '../../public/images/ruby.svg';
import NodeJsSVG from '../../public/images/nodejs.svg';
import RailsSVG from '../../public/images/rails.svg';
import ExpressSVG from '../../public/images/express.svg';
import BabelSVG from '../../public/images/babel.svg';
import GulpSVG from '../../public/images/gulp.svg';
import WebpackSVG from '../../public/images/webpack.svg';
import SassSVG from '../../public/images/sass.svg';
import PugSVG from '../../public/images/pug.svg';
import MochaSVG from '../../public/images/mocha.svg';
import ChaiSVG from '../../public/images/chai.svg';
import GruntSVG from '../../public/images/grunt.svg';
import ImmutableSVG from '../../public/images/immutable.svg';
import MaterialUISVG from '../../public/images/material-ui.svg';
import JestSVG from '../../public/images/jest.svg';
import ReactRouterSVG from '../../public/images/react-router.svg';
import MongoDBSVG from '../../public/images/mongodb.svg';
import PostGreSQLSVG from '../../public/images/postgesql.svg';
import GitSVG from '../../public/images/git.svg';
import GitHubSVG from '../../public/images/github-icon.svg';
import FirebaseSVG from '../../public/images/firebase.svg';
import JquerySVG from '../../public/images/jquery.svg';
import JadeSVG from '../../public/images/jade.svg';
import HerokuSVG from '../../public/images/heroku.svg';
import GraphQlSVG from '../../public/images/graphql.svg';
import BootstrapSVG from '../../public/images/bootstrap.svg';
import PythonSVG from '../../public/images/python.svg';
import DjangoSVG from '../../public/images/django.svg';
import FlaskSVG from '../../public/images/flask.svg';

const About = () => {
  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="fun-facts">
          <div className="fun-block elvis">
            <img className="elvis" src={Elvis} alt="elvis" />
            <p>
              My beautiful and wickedly smart wife and I got married by Elvis in Vegas. We had a
              super fun time with friends and family and had over 200 people livestreaming it!
            </p>
          </div>

          <div className="fun-block whiteboard">
            <img src={Kody} alt="whiteboard" />
            <p> My boy, Kody. He just turned nine. I love this animal, such a good boy.</p>
          </div>

          <div className="fun-block skies">
            <img src={Cookies} alt="baking" />
            <p>I Love to bake. Strangely enough, this always happens Sunday evenings.</p>
          </div>
        </div>
        <div className="about-me">
          <h3>Who am I</h3>
          <p>
            Builder. I've built a house, a small business, and even dabbled in electronics. Software
            development is just an extention of that for me. I love creating.
          </p>
          <p>
            Undaunted. When faced with a challenge, I put my head down and quietly get on with it. I
            stilll like to have fun while doing it though!
          </p>
          <p>
            Resourceful. I learned a long time ago that if you ask the right questions, the answers
            will reveal themselves quickly. I always do my homework before jumping into anything
            new.
          </p>
          <h3>What I know</h3>
          <div className="tech-skills">
            <img src={ReactSVG} alt="react" />
            <img src={ReduxSVG} alt="redux" />
            <img src={ES6SVG} alt="es6" />
            <img src={NodeJsSVG} alt="node" />
            <img src={ExpressSVG} alt="express" />
            <img src={PythonSVG} alt="python" />
            <img src={DjangoSVG} alt="django" />
          </div>
          <div className="tech-skills">
            <img src={CSS3SVG} alt="css3" />
            <img src={BootstrapSVG} alt="bootstrap" />
            <img src={SassSVG} alt="sass" />
            <img src={PugSVG} alt="pug" />
            <img src={JadeSVG} alt="jade" />
            <img src={JquerySVG} alt="jquery" />
            <img src={MaterialUISVG} alt="material" />
          </div>
          <div className="tech-skills">
            <img src={MochaSVG} alt="mocha" />
            <img src={ChaiSVG} alt="chai" />
            <img src={JestSVG} alt="jest" />
            <img src={GruntSVG} alt="grunt" />
            <img src={ImmutableSVG} alt="immutable" />
            <img src={ReactRouterSVG} alt="react-router" />
            <img src={RubySVG} alt="ruby" />
          </div>
          <div className="tech-skills">
            <img src={MongoDBSVG} alt="mongo" />
            <img src={PostGreSQLSVG} alt="postgresql" />
            <img src={FirebaseSVG} alt="firebase" />
            <img src={GraphQlSVG} alt="graphql" />
            <img src={GitHubSVG} alt="github" />
            <img src={GitSVG} alt="git" />
          </div>
          <div className="tech-skills">
            <img src={RailsSVG} alt="rails" />
            <img src={FlaskSVG} alt="flask" />
            <img src={WebpackSVG} alt="webpack" />
            <img src={BabelSVG} alt="Babel" />
            <img src={GulpSVG} alt="gulp" />
            <img src={HerokuSVG} alt="heroku" />
          </div>
          <p>... and I'll never be done learning.</p>
        </div>
      </div>
    </div>
  );
};
export default About;
