import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';

const Login = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <LoginForm />
          <div className="text-center mt-3">
            <p className="mb-0">
              Hesabınız yok mu?{' '}
              <Link to="/register" className="text-decoration-none">
                Kayıt olun
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;