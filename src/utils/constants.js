// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

// Application Constants
export const APP_NAME = 'DiGex';
export const APP_VERSION = '1.0.0';

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PRODUCTS: '/products',
  PRODUCT_DETAIL: '/product/:id',
  CART: '/cart',
  PROFILE: '/profile',
  ORDERS: '/orders'
};

// Product Categories
export const CATEGORIES = {
  YAZILIM: 'yazilim',
  OYUN: 'oyun',
  EBOOK: 'ebook',
  MUZIK: 'muzik',
  VIDEO: 'video'
};

// Alert Types
export const ALERT_TYPES = {
  SUCCESS: 'success',
  ERROR: 'danger',
  WARNING: 'warning',
  INFO: 'info'
};

// Local Storage Keys
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  CART: 'cart',
  PREFERENCES: 'preferences'
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  PAGE_SIZE_OPTIONS: [12, 24, 48, 96]
};

// Form Validation
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 6,
  NAME_MIN_LENGTH: 2
};

export default {
  API_BASE_URL,
  APP_NAME,
  APP_VERSION,
  ROUTES,
  CATEGORIES,
  ALERT_TYPES,
  STORAGE_KEYS,
  HTTP_STATUS,
  PAGINATION,
  VALIDATION
};