
import NavigationMenu from "./NavigationMenu";
import NavigationHeader from './NavigationHeader';
import SocialLinks from './SocialLinks';
import styled from "styled-components";
import '../styles/Buttons.css';
import emailjs from 'emailjs-com';
import { useState } from "react";

const ContactResizeContainer = styled.div`
    margin-top: 6.2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 4em;
        width: 100%;
    }
`;

const ContactInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    @media (max-width: 1400px) {
        width: 80%;
    }
`;

const ContactButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    margin-top: 1em;
    gap: 1em;
`;

const ContactInputItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: .5em;
    border-radius: 8px;
    border: 1px solid #333;
    background-color: transparent;
    padding: .2em .8em;
    margin-bottom: 1em;
    width: 95%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const ContactInputItemLarge = styled.div`
    display: flex;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: .5em;
    border-radius: 8px;
    border: 1px solid #333;
    background-color: transparent;
    padding: .2em 1em;
    margin-bottom: 1em;
    width: 95%;
    height: 10em;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
    }
`;


const ContactInput = styled.input`
    width: 100%;
    height: 2em;
    border-radius:  8px;
    border: none;
    font-size: 1.1em;
    outline: none;
    background-color: transparent;
    color: #eee;

    @media (max-width: 768px) {
        width: 100%;
    }

    &:focus {
        border: none;
    }
`;

const ContactLargeInput = styled.textarea`
    width: 100%;
    border-radius: 10px;
    border: none;
    font-size: 1.1em;
    outline: none;
    background-color: transparent;
    resize: none;
    position: absolute;
    top: 0.6em;
    left: 2.3em;
    font-family: 'Roboto', sans-serif;
    color: #eee;

    @media (max-width: 768px) {
        width: 80%;
    }   
`;

const ContactIcon = styled.svg`
    width: 1.4em;
    height: 1.4em;
    stroke: #bbb;
`;

const ContactIconLock = styled.svg`
    width: 1.4em;
    height: 1.4em;
    stroke: #bbb;
    position: absolute;
    top: .8em;
    left: .8em;
`;


const Contact = ({ isMenuOpen, toggleMenu }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        if (!name || !email || !message) {
            setError('Please fill in all fields.');
            setLoading(false);
            setTimeout(() => {
                setError('');
            }, 2000);
            return;
        }

        // Send the form data to EmailJS
        emailjs.send('service_hc9akgh', 'template_2cjai8y', { name, email, message }, '5zJalJbOIpV3-eipy')
            .then((response) => {
                setLoading(false);
                setSuccess(true);
            })
            .catch((err) => {
                setLoading(false);
            });
    };

    return (
        <div>
            <NavigationMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <NavigationHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <ContactResizeContainer isMenuOpen={isMenuOpen}>
                <ContactInputContainer>
                    <ContactInputItem>
                        <ContactIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-user">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </ContactIcon>
                        <ContactInput type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </ContactInputItem>
                    <ContactInputItem>
                        <ContactIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send">
                            <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </ContactIcon>
                        
                        <ContactInput type="text" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </ContactInputItem>
                    <ContactInputItemLarge>
                        {!message &&
                        <ContactIconLock xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </ContactIconLock>}
                        <ContactLargeInput type="text" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} style={!message ? {left: '2.3em'} : {left: '.5em'}} />
                    </ContactInputItemLarge>
                    <ContactButtonContainer>
                        <button className="button" onClick={handleSubmit}>
                            {loading ? 'Sending...' : success ? 'Sent!' : error ? error : 'Send Message'}
                            {/* Send Message */}
                            <div className="arrow-wrapper"><div className="arrow"></div></div>
                        </button>
                    </ContactButtonContainer>
                </ContactInputContainer>
            </ContactResizeContainer>
            <SocialLinks />
        </div>
    );
};

export default Contact;