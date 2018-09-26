import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Subwaze from '../../public/images/subwaze.png';
import Kanban from '../../public/images/Kanban.png';
import Awesome from '../../public/images/Awesome_ToDo.png';
import HHBBall from '../../public/images/HHBasketballLeague.png';
import MovieHunt from '../../public/images/MovieHuntPlus.png';
import LibraryApp from '../../public/images/Library_App.png';
import GithubBattle from '../../public/images/Github_Battle.png';

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="section-header" />

      <div className="project-list">
        <div className="container">
          <div className="named-project-box">
            <img className="github-battle" src={GithubBattle} alt={'Github Battle app'} />
          </div>
          <div className="gitdeploy">
            <a href="https://github.com/MadRiver44/Github-Battle">
              <h4>GitHub</h4>
            </a>
            <a href="https://github-battle-b7cc4.firebaseapp.com/" target="_blank" rel="noopener">
              <h3>Github Battle</h3>
            </a>
          </div>
        </div>
      </div>

      <div className="project-list">
        <div className="container">
          <div className="named-project-box">
            <img className="hhBBall" src={HHBBall} alt={'HHBasketballLeague app'} />
          </div>
          <div className="gitdeploy">
            <a href="https://github.com/MadRiver44/Hash-History-League">
              <h4>GitHub</h4>
            </a>
            <a href="https://agile-depths-17922.herokuapp.com/" target="_blank" rel="noopener">
              <h3>HH Basketball League</h3>
            </a>
          </div>
        </div>
      </div>

      <div className="project-list">
        <div className="container">
          <div className="named-project-box">
            <img className="library" src={LibraryApp} alt={'Library App'} />
          </div>
          <div className="gitdeploy proj2">
            <a href="https://github.com/MadRiver44/LibraryApp" target="relnoopener">
              <h4>GitHub</h4>
            </a>
            <a
              href="https://glacial-escarpment-66257.herokuapp.com/catalog"
              target="_blank"
              rel="noopener">
              <h3>LibraryApp</h3>
            </a>
          </div>
        </div>
      </div>

      <div className="project-list">
        <div className="container">
          <div className="named-project-box">
            <img className="movieHunt" src={MovieHunt} alt={'MovieHunt app'} />
          </div>
          <div className="gitdeploy proj5">
            <h4>GitHub</h4>

            <a
              href="http://confident-heyrovsky-662f33.bitballoon.com/"
              target="_blank"
              rel="noopener">
              <h3>Movie Hunt</h3>
            </a>
          </div>
        </div>
      </div>

      <div className="project-list">
        <div className="container">
          <div className="named-project-box">
            <img className="subwaze" src={Subwaze} alt={'Subwaze app'} />
          </div>
          <div className="gitdeploy proj4">
            <a href="https://github.com/MadRiver44/subwaze">
              <h4>GitHub</h4>
            </a>
            <a href="https://subwaze.herokuapp.com/" target="_blank" rel="noopener">
              <h3>Subwaze</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
