import React from 'react';

const Dashboard = ({ onNewSimulation }) => (
  <div className="dashboard">
    <h2>Dashboard</h2>
    <button onClick={onNewSimulation}>Crear nueva simulación</button>
  </div>
);

export default Dashboard;
