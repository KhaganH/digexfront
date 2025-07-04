import api from './api';
import Cookies from 'js-cookie';

export const authService = {
  async login(credentials) {
    try {
      const response = await api.post('/auth/login', credentials);
      const { token, user } = response.data;
      
      // Store token and user info
      localStorage.setItem('token', token);
      Cookies.set('user', JSON.stringify(user), { expires: 7 });
      
      return { success: true, data: { token, user } };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Giriş başarısız' 
      };
    }
  },

  async register(userData) {
    try {
      const response = await api.post('/auth/register', userData);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Kayıt başarısız' 
      };
    }
  },

  async logout() {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local storage regardless of API call success
      localStorage.removeItem('token');
      Cookies.remove('user');
    }
  },

  async getCurrentUser() {
    try {
      const response = await api.get('/auth/me');
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Kullanıcı bilgileri alınamadı' 
      };
    }
  },

  isAuthenticated() {
    const token = localStorage.getItem('token');
    return !!token;
  },

  getUser() {
    const user = Cookies.get('user');
    return user ? JSON.parse(user) : null;
  }
};

export default authService;