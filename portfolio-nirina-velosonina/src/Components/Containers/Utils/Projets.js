import React from "react";
import { Card } from 'react-bootstrap'; 
import './Projets.scss';

function Projets() {
    return (
        <div className='projet-container'>
            <h2 className="text-center my-5">Projets</h2>
            <div className="row">
                <div className="col-md-4">
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Card title that wraps to a new line</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="mb-3 p-3">
                        <blockquote className="blockquote mb-0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className="text-muted">
                                Last updated 3 mins ago
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <Card className="mb-3 bg-primary text-white text-center p-3">
                        <blockquote className="blockquote mb-0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                            <footer className="blockquote-footer">
                                <small>
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="mb-3 text-center">
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text className="text-muted">
                                Last updated 3 mins ago
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="mb-3 p-3 text-right">
                        <blockquote className="blockquote mb-0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                            </Card.Text>
                            <Card.Text className="text-muted">
                                Last updated 3 mins ago
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Projets;
