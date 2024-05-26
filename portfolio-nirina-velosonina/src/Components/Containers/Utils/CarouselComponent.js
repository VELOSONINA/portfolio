import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.scss';

const prefixUrl = 'https://velosonina.github.io/portfolio-nirina-velosonina/assets/images/';

function CarouselComponent() {
  const allFiles = [
    'Argent-Bank.jpeg',
    'Nina Carducci Photographe.jpg',
    'Ohmyfood.jpg',
    'Print-it.jpg'
    
  ];

  return (
    <Carousel>
      {allFiles.map((fileName, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={`${prefixUrl}${fileName}`} alt={`Slide ${index + 1}`} />
          <Carousel.Caption>
            <h3>{fileName}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
