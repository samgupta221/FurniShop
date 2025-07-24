import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow product-card">
        <img
          src={product.image || 'https://via.placeholder.com/300'}
          className="card-img-top"
          alt={product.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="text-muted">{product.category}</p>
          <p className="text-primary h6 mb-2">₹{product.price}</p>
          <div className="mt-auto d-flex gap-2">
            <Link to={`/product/${product._id}`} className="btn btn-outline-primary btn-sm w-50">View</Link>
            <button className="btn btn-success btn-sm w-50">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
