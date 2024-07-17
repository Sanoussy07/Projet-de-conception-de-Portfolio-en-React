import React from 'react';
import './AddTestimonialPage.css';


const AddTestimonialPage = () => {
  return (
    <div className="add-testimonial-container">

      <h2>Laisser un témoignage</h2>
      <form>
        <label>Nom: <input type="text" name="name" required /></label>
        <label>Message: <textarea name="message" required></textarea></label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default AddTestimonialPage;
