import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4 fw-bold mb-4">DiGex'e Hoş Geldiniz</h1>
          <p className="lead mb-4">
            Dijital ürünler için güvenilir ve hızlı alışveriş platformu
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Link to="/products" className="btn btn-primary btn-lg">
              Ürünleri İncele
            </Link>
            <Link to="/register" className="btn btn-outline-primary btn-lg">
              Üye Ol
            </Link>
          </div>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <i className="bi bi-shield-check display-4 text-primary mb-3"></i>
              <h5>Güvenli Alışveriş</h5>
              <p className="text-muted">
                Tüm işlemleriniz SSL ile korunur
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <i className="bi bi-lightning display-4 text-primary mb-3"></i>
              <h5>Hızlı Teslimat</h5>
              <p className="text-muted">
                Dijital ürünler anında teslim edilir
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body text-center">
              <i className="bi bi-headset display-4 text-primary mb-3"></i>
              <h5>7/24 Destek</h5>
              <p className="text-muted">
                Her zaman yanınızdayız
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;