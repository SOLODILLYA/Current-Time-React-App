import React from 'react';
import ReactDOM from 'react-dom/client';
import Clock from './Clock';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-heading">Current Time</h1>
      <Clock format="24-hour" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
