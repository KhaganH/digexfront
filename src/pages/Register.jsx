import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';

const Register = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <RegisterForm />
          <div className="text-center mt-3">
            <p className="mb-0">
              Zaten hesabınız var mı?{' '}
              <Link to="/login" className="text-decoration-none">
                Giriş yapın
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;