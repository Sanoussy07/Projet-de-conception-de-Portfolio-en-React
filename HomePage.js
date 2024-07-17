import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="header-content">
          <img src="https://i.pinimg.com/originals/71/b3/bd/71b3bd96477aa44881347e535d5b96b0.jpg" alt="" className="profile-image" />
          <div className="contact-info">
          <p className="name">Nom: Mamadou Sanoussy Barry</p>
            <p>Email: <a href="mailto:barrymamadousanoussy1017@gmail.com">barrymamadousanoussy1017@gmail.com</a></p>
            <p>Téléphone: 514 467 7874</p>
          </div>
        </div>
      </header>

      <section className="about-me">
        <h2>À Propos de Moi</h2>
        <p>Passionné par l'informatique et la résolution de problèmes complexes,
           je suis un développeur web diplômé récemment dans
            le développement d'applications web et mobiles. J'aime créer des solutions
             innovantes et efficaces qui répondent aux besoins des utilisateurs.</p>
      </section>

      <section className="skills">
        <h2>Compétences</h2>
        <ul>
          <li>Langages de Programmation : Java, C#, JavaScript, HTML/CSS</li>
          <li>Frameworks et Bibliothèques : React, Angular, Node.js</li>
          <li>Bases de Données : SQL, Cassandra, MongoDB</li>
          <li>Outils de Développement : Git, VS Code, IntelliJ IDEA, NetBeans</li>
          <li>Méthodologies : Agile, Scrum, DevOps</li>
        </ul>
      </section>

      <section className="education">
        <h2>Éducation</h2>
        <p>DEC en Programmation informatique</p>
        <p>Collège Lacité, Août 2024</p>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Certification en Cyber Sécurité, Udemy, 2024</li>
          <li>Power BI, Udemy, 2024</li>
        </ul>
      </section>

      <section className="languages">
        <h2>Langues</h2>
        <p>Français: Courant</p>
        <p>Anglais: Intermédiaire</p>
      </section>

      <section className="interests">
        <h2>Intérêts</h2>
        <p>Intelligence Artificielle, Conception de
          Cybersecurité, Cryptographie, bases de données, etc.</p>
      </section>
    </div>
  );
};

export default HomePage;
