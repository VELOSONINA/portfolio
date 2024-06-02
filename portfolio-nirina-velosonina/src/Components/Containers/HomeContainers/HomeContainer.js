import React from 'react';
// import CarouselComponent  from '../Utils/CarouselComponent';
// import Projets  from '../Utils/Projets';
// import Skills  from '../Utils/Skills';
// import ContactForm  from '../Utils/ContactForm';
// import './HomeContainer.scss'; 

const HomeContainer = ({ CarouselComponent, Projets, Skills, ContactForm }) =>{
  return (
    <div className='container'>
      <CarouselComponent />
      <Projets />
      <Skills />
      <ContactForm />
    </div>
  );
};

export default HomeContainer;
