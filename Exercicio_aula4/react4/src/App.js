import React4 from './React4';
import { useState } from 'react';
import './App.css';

function App() {
  const [texto, setTexto] = useState("");

  return (
    <>
     <div className="container m-0">
        <label>Entre com um texto: </label>
        <input
          value={texto} 
          type="text" onChange={(event) => setTexto(event.target.value)}
        />
      </div>
      <React4 Texto={texto}/>
     </>
  );
}

export default App;
