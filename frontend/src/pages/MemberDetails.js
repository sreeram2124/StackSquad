import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/members/${id}`).then(res => setMember(res.data)).catch(console.error);
  }, [id]);

  if (!member) return <p className="loading">Loading member details...</p>;

  return (
    <div className="App page-wrapper">
      <div className="card detail-card">
        <img className="profile" src={`http://localhost:5001/uploads/${member.image}`} alt={member.name} />
        <h2>{member.name}</h2>
        <p><strong>Roll Number:</strong> {member.rollNumber}</p>
        <p><strong>Year:</strong> {member.year}</p>
        <p><strong>Degree:</strong> {member.degree}</p>
        <p><strong>Project:</strong> {member.project}</p>
        <p><strong>Hobbies:</strong> {member.hobbies}</p>
        <p><strong>Certificates:</strong> {member.certificates}</p>
        <p><strong>Internship:</strong> {member.internship}</p>
        <p><strong>Aim:</strong> {member.aim}</p>
        <p><strong>Email:</strong> {member.email}</p>
        {member.file ? (
          <p><strong>Download File:</strong>{' '}
            <a className="download-link" href={`http://localhost:5001/uploads/${member.file}`} download>
              Click to download
            </a>
          </p>
        ) : <p><strong>No file uploaded.</strong></p>}
        <div className="button-row">
          <button className="button" onClick={() => navigate('/')}>🏠 Home</button>
          <button className="button" onClick={() => navigate('/members')}>👥 Back to List</button>
        </div>
      </div>
    </div>
  );
}

export default MemberDetails;