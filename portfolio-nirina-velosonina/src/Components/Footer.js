import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon from "../assets/Icons/index";


function Footer() {
  return (
    <Container className='footer d-flex justify-content-between'>
      <Row>
        <Col>
          	<p className="footer-text">Contact :</p>
				<ul>
					<li>Appelez-moi au 06 95 43 22 28</li>
					<li>Lun-Ven : 9h-18h</li>
				</ul>
        </Col>
        <Col>
			<p className="footer-text">Adresse :</p>
			<p>1, Avenue Louis Lachenal</p>
			<p>91280 Saint Pierre du Perray</p>
        </Col>
        <Col>
			<p className="footer-text">Copyright 2024 <a href="mailto:nirina.velosonina@gmail.com">Nirina VELOSONINA</a></p>
			<div>
			<a href="#linkedin">
				<Icon name="linkedin" />
			</a>
			<a href="#facebook">
				<Icon name="facebook" />
			</a>
			<a href="#twitter">
				<Icon name="twitter" />
			</a>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
