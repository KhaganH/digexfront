// CSRF Token utility functions
export const getCsrfToken = () => {
  // Try to get CSRF token from meta tag
  const csrfMetaTag = document.querySelector('meta[name="_csrf"]');
  if (csrfMetaTag) {
    return csrfMetaTag.getAttribute('content');
  }
  
  // Try to get from cookie
  const csrfCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('XSRF-TOKEN='));
  
  if (csrfCookie) {
    return csrfCookie.split('=')[1];
  }
  
  // Return null if no token found
  return null;
};

export const getCsrfHeader = () => {
  const csrfHeaderMetaTag = document.querySelector('meta[name="_csrf_header"]');
  return csrfHeaderMetaTag ? csrfHeaderMetaTag.getAttribute('content') : 'X-CSRF-TOKEN';
};

export const getAuthHeaders = () => {
  const token = getCsrfToken();
  const headerName = getCsrfHeader();
  
  const headers = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers[headerName] = token;
  }
  
  return headers;
};

export const makeApiRequest = async (url, options = {}) => {
  const headers = getAuthHeaders();
  
  const config = {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  };
  
  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};