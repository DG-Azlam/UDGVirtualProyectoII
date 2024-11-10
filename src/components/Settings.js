import React from 'react';
//import '../App.css';

function Settings({ theme, updateTheme }) {
    const handleThemeChange = (e) => updateTheme(e.target.value);

    return (
        <div className="settings container">
            <h3>Configuración</h3>
            <label>
                Tema:
            <select value={theme} onChange={handleThemeChange}>
                <option value="light">Claro</option>
                <option value="dark">Oscuro</option>
            </select>
            </label>
        </div>
    );
}

export default Settings;
