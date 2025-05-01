import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="App hero-wrapper">
      <div className="hero">
        <h1>Welcome to the Team StackSquad</h1>
        <p className="subtitle">Effortlessly manage student members, track details, and celebrate your team.</p>
        <div className="hero-buttons">
          <Link to="/add"><button className="button">➕ Add Member</button></Link>
          <Link to="/members"><button className="button">👥 View Members</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;