import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl'; 
import './ContactForm.scss'

function ContactForm() {
    const captchaRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        captchaRef.current.execute().then((token) => {
            console.log(`Token du ReCAPTCHA : ${token}`);
        }).catch((error) => {
            console.error('Erreur lors de l\'exécution du ReCAPTCHA:', error);
        });
    }

    return (
        <div className="contact-container">
            <article className="form-container">
                <h2 className="text-center my-5">Contact</h2>
                <p>N'hésitez pas à m'écrire et à m'appeler!</p>
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-6">
                        <FormGroup className="mb-3">
                            <label htmlFor="nom">Nom</label>
                            <FormControl type="text" name="nom" id="nom" autoComplete="name" required />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <label htmlFor="prenom">Prénoms</label>
                            <FormControl type="text" name="prenom" id="prenom" autoComplete="surname" required />
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <label htmlFor="email">Email</label>
                            <FormControl type="email" name="email" id="email" autoComplete="email" required />
                        </FormGroup>
                    </div>
                    <div className="col-md-6">
                        <FormGroup className="mb-3">
                            <label htmlFor="message">Message</label>
                            <FormControl as="textarea" name="message" id="message" rows={5} required />
                        </FormGroup>
                    </div>
                    <Button type="submit" className="btn btn-secondary btn-lg">Envoyer</Button>
                </form>
                <div className="recaptchaContainer mt-3">
                    <ReCAPTCHA
                        ref={captchaRef}
                        sitekey="6LcYD3EaAAAAAM2GZpkWsEiCPTSMfAzSXiuG4k36"
                        onChange={(value) => {
                            console.log(`Valeur du captcha : ${value}`);
                        }}
                    />
                </div>
            </article>
        </div>
    );
};

export default ContactForm;
