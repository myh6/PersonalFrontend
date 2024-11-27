import '../../BaseStyle.css';
import './Contact.css';
import ContactForm from '../ContactForm/ContactForm';
import FrostedGlass from '../FrostedGlass/FrostedGlass';
import HTMLDecorator from '../HTMLDecorator/HTMLDecorator';

function Contact() {
    return (
        <div className='contact-container'>
            <HTMLDecorator>
                <h1>GET IN <br />TOUCH</h1>
            </HTMLDecorator>
            <FrostedGlass>
                <ContactForm />
            </FrostedGlass>
        </div>
    );
}

export default Contact;