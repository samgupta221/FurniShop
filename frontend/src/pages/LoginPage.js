import React, { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users/login', {email, password})
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.data));
        window.location = '/';
      })
      .catch(() => setErr('Invalid credentials'));
  }
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{minHeight: '60vh'}}>
      <form className="bg-white p-4 rounded shadow" onSubmit={handleSubmit} style={{width: 350}}>
        <h3 className="mb-4">Login</h3>
        {err && <div className="alert alert-danger">{err}</div>}
        <input type="email" className="form-control mb-3" placeholder="Email"
          value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" className="form-control mb-3" placeholder="Password"
          value={password} onChange={e => setPassword(e.target.value)} required />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
