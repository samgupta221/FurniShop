import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-light vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-2 fw-bold text-primary">Welcome to FurniShop</h1>
      <p className="lead mb-5">Discover premium furniture to transform your home and office.</p>
      <Link to="/"
        className="btn btn-primary btn-lg shadow">Shop Now</Link>
      <div className="mt-4">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80"
          alt="Furniture"
          className="rounded shadow"
          style={{ width: '60vw', maxWidth: 700 }}
        />
      </div>
    </div>
  );
}
