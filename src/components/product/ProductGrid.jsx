import React from 'react';
import ProductCard from './ProductCard';
import LoadingSpinner from '../common/LoadingSpinner';

const ProductGrid = ({ products, loading }) => {
  if (loading) {
    return <LoadingSpinner text="Ürünler yükleniyor..." />;
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center p-5">
        <i className="bi bi-box-seam display-1 text-muted"></i>
        <p className="text-muted">Henüz ürün bulunmamaktadır.</p>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {products.map((product) => (
        <div key={product.id} className="col-md-6 col-lg-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;