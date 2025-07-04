import api from './api';

export const productsService = {
  async getAllProducts(filters = {}) {
    try {
      const params = new URLSearchParams();
      
      if (filters.category) params.append('category', filters.category);
      if (filters.priceRange) params.append('priceRange', filters.priceRange);
      if (filters.sort) params.append('sort', filters.sort);
      if (filters.search) params.append('search', filters.search);
      
      const response = await api.get(`/products?${params}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Ürünler yüklenemedi' 
      };
    }
  },

  async getProductById(id) {
    try {
      const response = await api.get(`/products/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Ürün bulunamadı' 
      };
    }
  },

  async getFeaturedProducts() {
    try {
      const response = await api.get('/products/featured');
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Öne çıkan ürünler yüklenemedi' 
      };
    }
  },

  async getCategories() {
    try {
      const response = await api.get('/products/categories');
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Kategoriler yüklenemedi' 
      };
    }
  },

  async searchProducts(query) {
    try {
      const response = await api.get(`/products/search?q=${encodeURIComponent(query)}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Arama başarısız' 
      };
    }
  }
};

export default productsService;