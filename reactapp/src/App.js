import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name , setName]=useState("");
  return (
    <div>
    <h1>Digital Document Vault System </h1>
    <p>Securely store and manage your documents.</p>
     <input
                type="text"
                onChange={(e) => setName(e.target.value)}
            />
    <h2>{name}</h2>
    </div>
  );
}

export default App;
