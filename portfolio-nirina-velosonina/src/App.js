import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import Header from './Components/Header';
import RoutesTree from './Components/RoutesTree';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <Header/>
        <RoutesTree/>
        <Footer/>
      </div>
    </BrowserRouter> 
  );
}

export default App;
