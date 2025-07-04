import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>DiGex</h5>
            <p className="mb-0">Dijital ürünler için güvenilir platform</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">&copy; 2024 DiGex. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;