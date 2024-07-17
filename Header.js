import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Bienvenue sur mon porfolio</h1>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/projects">Projets</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/testimonials">Témoignages</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
