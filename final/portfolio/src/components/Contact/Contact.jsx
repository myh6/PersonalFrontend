import '../../BaseStyle.css';
import './Contact.css';
import ContactForm from '../ContactForm/ContactForm';
import FrostedGlass from '../FrostedGlass/FrostedGlass';

function Contact() {
    return (
        <div className='contact-container'>
            <h1>GET IN <br />TOUCH</h1>
            <FrostedGlass>
                <ContactForm />
            </FrostedGlass>
        </div>
    );
}

export default Contact;