import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
   <div className="contact-container">

      <h2>Contactez-moi</h2>
      <form>
        <label>Nom: <input type="text" name="name" required /></label>
        <label>Email: <input type="email" name="email" required /></label><br></br><br></br>
        <label>Message: <textarea name="message" required></textarea></label><br></br><br></br>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactPage;
