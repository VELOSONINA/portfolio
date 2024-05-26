import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Components/Pages/HomePage'; 
import AboutPage from '../Components/Pages/AboutPage';
import NotFoundPage from './Pages/404NotFoundPage'; 

const RoutesTree = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesTree; 
