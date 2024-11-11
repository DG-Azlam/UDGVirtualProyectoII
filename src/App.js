import React, { useState } from 'react';
import UserPage from './pages/UserPage';
import MainPage from './pages/MainPage'; 
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('user');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <button onClick={() => handleSectionChange('user')}>Sección Usuario</button>
        <button onClick={() => handleSectionChange('main')}>Sección Principal</button>
      </nav>

      <div className="section">
        {activeSection === 'user' && <UserPage />}
        {activeSection === 'main' && <MainPage />}
      </div>
    </div>
  );
}

export default App;