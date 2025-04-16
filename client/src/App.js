import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import NewSimulation from './components/NewSimulation';
import ActionSelector from './components/ActionSelector';
import Results from './components/Results';

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState(null);

  const handleSimulation = async () => {
    const response = await fetch('http://localhost:5000/simulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    setResult(data);
    setStep(3);
  };

  return (
    <div className="App">
      {step === 0 && <Dashboard onNewSimulation={() => setStep(1)} />}
      {step === 1 && <NewSimulation setFormData={setFormData} next={() => setStep(2)} />}
      {step === 2 && <ActionSelector formData={formData} setFormData={setFormData} simulate={handleSimulation} />}
      {step === 3 && <Results result={result} />}
    </div>
  );
}

export default App;
