import React, { useEffect } from 'react';
import { useNavigate, Link} from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
        navigate.push('/');
    }, 5000); 

    return () => clearTimeout(timer); 
  }, [navigate]);
  
  return (
    <div className='container text-center mt-5'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 className='display-4'>404</h1>
          <p className='lead'>Oups La page que vous demandez n'existe pas.</p>
          <Link to='/' className='btn btn-primary mt-3'>Retour à la page d'accueil</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
