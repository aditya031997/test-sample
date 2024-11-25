import React from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Dashboard from './components/dashboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar /> 
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
