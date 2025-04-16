import React from 'react';

const Results = ({ result }) => (
  <div className="results">
    <h2>Resultado</h2>
    <p><strong>Proyección de ganancias:</strong> ${result.proyeccion}</p>
    <p><strong>Opinión del equipo:</strong> {result.opinion}</p>
    <p><strong>Recomendación IA:</strong> {result.recomendacion}</p>
  </div>
);

export default Results;
