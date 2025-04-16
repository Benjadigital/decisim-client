import React from 'react';

const ActionSelector = ({ formData, setFormData, simulate }) => {
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, accion: e.target.value }));
  };

  return (
    <div>
      <h2>Elegir Acción</h2>
      <select onChange={handleChange}>
        <option value="subir_precios">Subir precios</option>
        <option value="contratar_empleados">Contratar empleados</option>
        <option value="reducir_gastos">Reducir gastos</option>
        <option value="abrir_sucursal">Abrir nueva sucursal</option>
      </select>
      <button onClick={simulate}>Simular</button>
    </div>
  );
};

export default ActionSelector;
