import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function AddMember() {
  const [form, setForm] = useState({
    name: '', rollNumber: '', year: '', degree: '',
    project: '', hobbies: '', certificates: '',
    internship: '', aim: '', email: '', image: null, file: null
  });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleImage  = e => setForm({ ...form, image: e.target.files[0] });
  const handleFile   = e => setForm({ ...form, file: e.target.files[0] });

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(form).forEach(key => data.append(key, form[key]));
    await axios.post('/api/members', data);
    const again = window.confirm("Member added!\nAdd another?");
    if (again) setForm({ name:'',rollNumber:'',year:'',degree:'',project:'',hobbies:'',certificates:'',internship:'',aim:'',email:'',image:null,file:null });
    else navigate('/');
  };

  return (
    <div className="App">
      <h2 className="header">Add New Member</h2>
      <form className="card" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required value={form.name} onChange={handleChange} />
        <input type="text" name="rollNumber" placeholder="Roll Number" required value={form.rollNumber} onChange={handleChange} />
        <input type="text" name="year" placeholder="Year" required value={form.year} onChange={handleChange} />
        <input type="text" name="degree" placeholder="Degree" required value={form.degree} onChange={handleChange} />

        <textarea className="full-width" name="project" placeholder="About Project" required value={form.project} onChange={handleChange} />
        <textarea name="hobbies" placeholder="Hobbies" required value={form.hobbies} onChange={handleChange} />
        <textarea name="certificates" placeholder="Certificates" required value={form.certificates} onChange={handleChange} />
        <textarea name="internship" placeholder="Internship" required value={form.internship} onChange={handleChange} />
        <textarea className="full-width" name="aim" placeholder="About Your Aim" required value={form.aim} onChange={handleChange} />

        <input className="full-width" type="email" name="email" placeholder="Email" required value={form.email} onChange={handleChange} />

        <label className="full-width">Profile Image</label>
        <input type="file" name="image" accept="image/*" required onChange={handleImage} />
        <label className="full-width">Upload File</label>
        <input type="file" name="file" onChange={handleFile} />

        <div className="full-width button-row">
          <button className="button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddMember;
