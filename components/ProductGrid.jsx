'use client';

import { useState, useEffect, useMemo } from 'react';
import ProductCard from './ProductCard';
import { ALL_CATEGORIES } from '../lib/sheets';

export default function ProductGrid() {
  const [products,  setProducts]  = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState(null);
  const [category,  setCategory]  = useState('All');
  const [search,    setSearch]    = useState('');

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then(data => {
        if (data.success) setProducts(data.products);
        else setError(data.error || 'Failed to load products.');
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCat    = category === 'All' || p.category === category;
      const matchSearch = (
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
      return matchCat && matchSearch;
    });
  }, [products, category, search]);

  if (loading) {
    return (
      <div className="shop-state">
        <div className="spinner" />
        <p className="shop-state__sub">Loading products…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shop-state">
        <div className="shop-state__icon">⚠️</div>
        <h3 className="shop-state__title">Could not load products</h3>
        <p className="shop-state__sub">Check your Google Sheets URL in <code>lib/sheets.js</code>.</p>
        <div className="shop-state__code">{error}</div>
      </div>
    );
  }

  return (
    <>
      <div className="shop-controls">
        <div className="shop-search-wrap">
          <span className="shop-search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search products…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="shop-search"
          />
        </div>

        <div className="shop-pills">
          {ALL_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`pill${category === cat ? ' active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="shop-meta">
        <p className="shop-meta__count">
          Showing <strong>{filtered.length}</strong> product{filtered.length !== 1 ? 's' : ''}
          {category !== 'All' ? ` in "${category}"` : ''}
          {search ? ` matching "${search}"` : ''}
        </p>
        {(category !== 'All' || search) && (
          <button className="shop-meta__clear" onClick={() => { setCategory('All'); setSearch(''); }}>
            Clear filters
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="shop-grid">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="shop-empty">
          <div className="shop-empty__icon">🌿</div>
          <h3 className="shop-empty__title">No products found</h3>
          <p className="shop-empty__sub">Try a different search term or category.</p>
        </div>
      )}
    </>
  );
}