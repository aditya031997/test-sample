import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3>Welcome to the Dashboard</h3>
      <p>Here is your quick overview:</p>
      <div className="stats">
        <div className="card">Users: 50</div>
        <div className="card">Tasks: 120</div>
        <div className="card">Revenue: $500</div>
      </div>
    </div>
  );
};

export default Dashboard;
