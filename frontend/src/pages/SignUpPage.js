import React, { useState } from 'react';
import axios from 'axios';

export default function SignUpPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/register', form);
      setMessage('✅ Registration successful. Please login.');
      setForm({ name: '', email: '', password: '' });
    } catch {
      setMessage('❌ Registration failed. Try different email.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
      <form className="bg-white p-4 rounded shadow" style={{ width: 350 }} onSubmit={handleSubmit}>
        <h3 className="mb-4 text-center">Create Account</h3>
        {message && <div className="alert alert-info">{message}</div>}
        <input name="name" value={form.name} onChange={handleChange} className="form-control mb-3" placeholder="Name" required />
        <input name="email" type="email" value={form.email} onChange={handleChange} className="form-control mb-3" placeholder="Email" required />
        <input name="password" type="password" value={form.password} onChange={handleChange} className="form-control mb-3" placeholder="Password" required />
        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
    </div>
  );
}

