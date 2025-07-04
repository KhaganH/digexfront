import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';
import Button from '../components/ui/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setProduct({
          id: parseInt(id),
          name: 'Premium Yazılım Paketi',
          description: 'Profesyonel yazılım geliştirme araçları paketi. Bu paket ile web ve mobil uygulamalar geliştirebilirsiniz.',
          price: 299,
          category: 'yazilim',
          image: '/api/placeholder/400/300',
          features: [
            'Visual Studio Code Pro',
            'GitHub Pro Hesap',
            'Azure Credits',
            'Premium Temalar',
            '24/7 Destek'
          ],
          rating: 4.8,
          reviews: 42
        });
        setLoading(false);
      }, 1000);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <LoadingSpinner text="Ürün yükleniyor..." />;
  }

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Ürün bulunamadı</h2>
        <Button onClick={() => navigate('/products')}>
          Ürünlere Geri Dön
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <div className="mb-3">
            <span className="badge bg-secondary">{product.category}</span>
            <span className="ms-2">
              <i className="bi bi-star-fill text-warning"></i>
              {product.rating} ({product.reviews} değerlendirme)
            </span>
          </div>
          <p className="lead">{product.description}</p>
          
          <div className="mb-4">
            <h5>Özellikler:</h5>
            <ul className="list-unstyled">
              {product.features.map((feature, index) => (
                <li key={index} className="mb-1">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="h2 text-primary">{product.price}₺</span>
            </div>
            <div>
              <Button
                variant="primary"
                size="lg"
                onClick={() => console.log('Add to cart:', product.id)}
              >
                <i className="bi bi-cart-plus me-2"></i>
                Sepete Ekle
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;