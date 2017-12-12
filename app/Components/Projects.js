import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Subwaze from '../../public/images/subwaze.png';
import Kanban from '../../public/images/Kanban.png';
import Awesome from '../../public/images/Awesome_ToDo.png';
import NetVids from '../../public/images/NetVids.png';
import LibraryApp from '../../public/images/Library_App.png';

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="section-header" />

      <div>
        <div className="project-list">
          <div className="container">
            <div className="named-project-box">
              <img className="kanban" src={Kanban} alt={'Kanban app'} />
            </div>
            <div className="gitdeploy">
              <h4>GitHub</h4>
              <h3>Kanban</h3>
              <h4>Deployed</h4>
            </div>
          </div>

          <div className="container">
            <div className="named-project-box">
              <img className="library" src={LibraryApp} alt={'Library App'} />
            </div>
            <div className="gitdeploy proj2">
              <h4>GitHub</h4>
              <h3>LibraryApp</h3>
              <h4>Deployed</h4>
            </div>
          </div>

          <div className="container">
            <div className="named-project-box">
              <img className="awesome" src={Awesome} alt={'Awesome_ToDo app'} />
            </div>
            <div className="gitdeploy proj3">
              <h4>GitHub</h4>
              <h3>AwesomeToDo</h3>
              <h4>Deployed</h4>
            </div>
          </div>

          <div className="container">
            <div className="named-project-box">
              <img className="subwaze" src={Subwaze} alt={'Subwaze app'} />
            </div>
            <div className="gitdeploy proj4">
              <h4>GitHub</h4>
              <h3>Subwaze</h3>
              <h4>Deployed</h4>
            </div>
          </div>

          <div className="container">
            <div className="named-project-box">
              <img className="netvids" src={NetVids} alt={'NetVids app'} />
            </div>
            <div className="gitdeploy proj5">
              <h4>GitHub</h4>
              <h3>NetVids</h3>
              <h4>Deployed</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
