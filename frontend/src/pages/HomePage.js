import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [display, setDisplay] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then(res => {
      setProducts(res.data);
      setDisplay(res.data);
    });
  }, []);

  useEffect(() => {
    let filtered = products;

    if (search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== 'All') {
      filtered = filtered.filter(p => p.category === category);
    }

    setDisplay(filtered);
  }, [search, category, products]);

  const uniqueCategories = ['All', ...new Set(products.map(p => p.category))];

  return (
    <div className="container">
      <section className="py-5 text-center bg-light rounded mb-4">
        <h1 className="display-5 fw-bold text-primary">Explore Our Furniture</h1>
        <p className="lead">Stylish. Durable. Affordable.</p>
      </section>

      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select className="form-select" value={category} onChange={e => setCategory(e.target.value)}>
            {uniqueCategories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="row">
        {display.length > 0 ? display.map(product => (
          <ProductCard key={product._id} product={product} />
        )) : <div className="text-center">No Products Found</div>}
      </div>
    </div>
  );
}
