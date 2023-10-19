import React from 'react';
import './App.css';
import Sidebar from './App/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="content">
        {/* Contenido principal */}
      </main>
    </div>
  );
}

export default App;