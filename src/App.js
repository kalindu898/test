import React from 'react';
import './App.css';
import StatsTable from './components/StatsTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ryu Switch Monitor</h1>
        <StatsTable />
      </header>
    </div>
  );
}

export default App;
