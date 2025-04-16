import React, { useState } from 'react';

const NewSimulation = ({ setFormData, next }) => {
  const [data, setData] = useState({
    ventasMensuales: '',
    costosFijos: '',
    costosVariables: '',
    empleados: '',
  });

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setFormData(prev => ({ ...prev, ...data }));
    next();
  };

  return (
    <div>
      <h2>Nueva Simulación</h2>
      <input name="ventasMensuales" placeholder="Ventas mensuales" onChange={handleChange} />
      <input name="costosFijos" placeholder="Costos fijos" onChange={handleChange} />
      <input name="costosVariables" placeholder="Costos variables" onChange={handleChange} />
      <input name="empleados" placeholder="Empleados" onChange={handleChange} />
      <button onClick={handleSubmit}>Siguiente</button>
    </div>
  );
};

export default NewSimulation;
