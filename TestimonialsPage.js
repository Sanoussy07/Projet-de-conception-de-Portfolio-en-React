import React from 'react';
import './testimoniale.css';




const TestimonialsPage = () => {
  return (
    <div className="testimonials-container">

      <h2>Témoignages</h2>
      <p>Aucun témoignage pour l'instant.</p>
      <a href="/add-testimonial">Laisser un témoignage</a>
    </div>
  );
};

export default TestimonialsPage;
