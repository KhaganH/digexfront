import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/product/ProductGrid';
import ProductFilters from '../components/product/ProductFilters';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    sort: ''
  });

  // Mock data - replace with API call
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setProducts([
          {
            id: 1,
            name: 'Premium Yazılım Paketi',
            description: 'Profesyonel yazılım geliştirme araçları',
            price: 299,
            category: 'yazilim',
            image: '/api/placeholder/300/200'
          },
          {
            id: 2,
            name: 'Indie Oyun Koleksiyonu',
            description: 'En popüler indie oyunlar',
            price: 89,
            category: 'oyun',
            image: '/api/placeholder/300/200'
          },
          {
            id: 3,
            name: 'Dijital Müzik Albümü',
            description: 'Yeni çıkan müzik albümü',
            price: 25,
            category: 'muzik',
            image: '/api/placeholder/300/200'
          }
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchProducts();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-3">
          <ProductFilters
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Ürünler</h2>
            <span className="text-muted">
              {products.length} ürün bulundu
            </span>
          </div>
          <ProductGrid products={products} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default Products;