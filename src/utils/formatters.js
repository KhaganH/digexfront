// Formatting utility functions

export const formatPrice = (price) => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(price);
};

export const formatPriceSimple = (price) => {
  return `${price.toLocaleString('tr-TR')}₺`;
};

export const formatNumber = (number) => {
  return new Intl.NumberFormat('tr-TR').format(number);
};

export const formatPercent = (value) => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  }).format(value);
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const formatDuration = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  } else {
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
};

export const formatRelativeTime = (date) => {
  const now = new Date();
  const diff = now - new Date(date);
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    return `${days} gün önce`;
  } else if (hours > 0) {
    return `${hours} saat önce`;
  } else if (minutes > 0) {
    return `${minutes} dakika önce`;
  } else {
    return 'Az önce';
  }
};

export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return `(${match[1]}) ${match[2]} ${match[3]} ${match[4]}`;
  }
  return phoneNumber;
};

export const formatAddress = (address) => {
  const parts = [
    address.street,
    address.district,
    address.city,
    address.zipCode
  ].filter(Boolean);
  
  return parts.join(', ');
};

export const formatRating = (rating, maxRating = 5) => {
  return `${rating.toFixed(1)}/${maxRating}`;
};

export const formatOrderStatus = (status) => {
  const statusMap = {
    pending: 'Beklemede',
    processing: 'İşleniyor',
    shipped: 'Kargoya Verildi',
    delivered: 'Teslim Edildi',
    cancelled: 'İptal Edildi'
  };
  
  return statusMap[status] || status;
};

export const formatPaymentMethod = (method) => {
  const methodMap = {
    'credit_card': 'Kredi Kartı',
    'debit_card': 'Banka Kartı',
    'paypal': 'PayPal',
    'bank_transfer': 'Havale/EFT',
    'crypto': 'Kripto Para'
  };
  
  return methodMap[method] || method;
};

export default {
  formatPrice,
  formatPriceSimple,
  formatNumber,
  formatPercent,
  formatFileSize,
  formatDuration,
  formatRelativeTime,
  formatPhoneNumber,
  formatAddress,
  formatRating,
  formatOrderStatus,
  formatPaymentMethod
};