// src/components/ProjectsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <h2>Mes Projets</h2>
      <div>
        <h3><Link to="/projects/project1">Projet 1</Link></h3>
      </div>
      <div>
        <h3><Link to="/projects/project2">Projet 2</Link></h3>
      </div>
    </div>
  );
};

export default ProjectsPage;
