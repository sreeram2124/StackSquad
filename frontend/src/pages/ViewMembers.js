import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function ViewMembers() {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/members')
         .then(res => setMembers(res.data))
         .catch(err => console.error(err));
  }, []);

  return (
    <div className="App page-wrapper">
      <div className="page-header">
        <h1>👥 Team Members</h1>
        <p className="subtitle, color:orange">Here are all the students in your team.</p>
        <div className="nav-buttons">
          <button className="button" onClick={() => navigate('/')}>🏠 Home</button>
          <button className="button" onClick={() => navigate('/add')}>➕ Add Member</button>
        </div>
      </div>
      <div className="container-grid">
        {members.map(member => (
          <div className="card" key={member._id}>
            <img className="profile" src={`http://localhost:5001/uploads/${member.image}`} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.rollNumber}</p>
            <Link to={`/members/${member._id}`}><button className="button">🔎 Details</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMembers;
