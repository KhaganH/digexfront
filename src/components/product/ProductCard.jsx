import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card h-100">
      <img
        src={product.image || '/placeholder-image.jpg'}
        className="card-img-top"
        alt={product.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text flex-grow-1">{product.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 text-primary mb-0">{product.price}₺</span>
          <div className="btn-group">
            <Link
              to={`/product/${product.id}`}
              className="btn btn-outline-primary btn-sm"
            >
              Detay
            </Link>
            <button className="btn btn-primary btn-sm">
              <i className="bi bi-cart-plus"></i> Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;