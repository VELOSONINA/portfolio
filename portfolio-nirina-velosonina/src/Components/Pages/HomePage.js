import React from 'react';
import HomeContainer from '../Containers/HomeContainers/HomeContainer.js';
import CarouselComponent  from '../Containers//Utils/CarouselComponent';
import Projets  from '../Containers//Utils/Projets';
import Skills  from '../Containers//Utils/Skills';
import ContactForm  from '../Containers/Utils/ContactForm.js';

const HomePage = () => {
  return (
    <HomeContainer
    CarouselComponent={CarouselComponent} 
        Projets={Projets} 
        Skills={Skills} 
        ContactForm={ContactForm} />
  );
};

export default HomePage;
