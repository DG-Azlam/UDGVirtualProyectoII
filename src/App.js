import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import ReactDOM from 'react-dom/client';

function App() {
  const [name,setName] = useState("");
  const [pass,setPass] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <form>
          <label> usuario: {"\n"}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          
          <label> contraseña: {"\n"}
            <input type="text" value={pass} onChange={(e) => setPass(e.target.value)}/>
          </label>
        </form>
      </header>
    </div>
  );
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<login />)

export default App;
