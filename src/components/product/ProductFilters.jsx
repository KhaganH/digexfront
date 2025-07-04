import React from 'react';

const ProductFilters = ({ filters, onFilterChange }) => {
  const handleCategoryChange = (category) => {
    onFilterChange({ ...filters, category });
  };

  const handlePriceRangeChange = (priceRange) => {
    onFilterChange({ ...filters, priceRange });
  };

  const handleSortChange = (sort) => {
    onFilterChange({ ...filters, sort });
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h5 className="mb-0">Filtreler</h5>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Kategori</label>
          <select
            className="form-select"
            value={filters.category || ''}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">Tüm Kategoriler</option>
            <option value="yazilim">Yazılım</option>
            <option value="oyun">Oyun</option>
            <option value="ebook">E-kitap</option>
            <option value="muzik">Müzik</option>
          </select>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Fiyat Aralığı</label>
          <select
            className="form-select"
            value={filters.priceRange || ''}
            onChange={(e) => handlePriceRangeChange(e.target.value)}
          >
            <option value="">Tüm Fiyatlar</option>
            <option value="0-50">0-50₺</option>
            <option value="50-100">50-100₺</option>
            <option value="100-500">100-500₺</option>
            <option value="500+">500₺+</option>
          </select>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Sıralama</label>
          <select
            className="form-select"
            value={filters.sort || ''}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="">Varsayılan</option>
            <option value="price-asc">Fiyat (Artan)</option>
            <option value="price-desc">Fiyat (Azalan)</option>
            <option value="name-asc">İsim (A-Z)</option>
            <option value="name-desc">İsim (Z-A)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;