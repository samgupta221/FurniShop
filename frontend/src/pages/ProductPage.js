import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`).then(res => setProduct(res.data));
  }, [id]);
  if (!product._id) return <div className="container mt-5">Product not found.</div>;
  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-light mb-4">&lt; Back to products</Link>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image || ''} alt={product.name} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.category}</p>
          <p>{product.description}</p>
          <h4 className="text-primary mb-3">₹{product.price}</h4>
          <button
            className="btn btn-success btn-lg"
            disabled={product.countInStock === 0}
          >
            Add to Cart
          </button>
          <div className="mt-2">
            {product.countInStock > 0
              ? <span className="badge bg-success">In Stock</span>
              : <span className="badge bg-danger">Out of Stock</span>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
