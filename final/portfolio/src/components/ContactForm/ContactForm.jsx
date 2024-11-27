import { useState } from 'react';
import '../../BaseStyle.css';
import './ContactForm.css';
import Button from '../Button/Button';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [communicationMethod, setCommunicationMethod] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!name.trim()) { newErrors.name = 'Name is required.' };
        if (!communicationMethod) { newErrors.communicationMethod = 'Please select a communication method.' };
        if (!message.trim()) { newErrors.message = 'Message is required.' };

        if (communicationMethod === 'email') {
            if (!email.trim()) {
                newErrors.email = 'Email is required.';
            } else if (!email.includes('@')) {
                newErrors.email = 'Please enter a valid email address.';
            }
        }

        if (communicationMethod === 'phone') {
            if (!phone.trim()) {
                newErrors.phone = 'Phone number is required.';
            } else if (isNaN(phone)) {
                newErrors.phone = 'Phone number must contain only numbers.';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    function handleSubmit(event) {
        event.preventDefault();
        if (validateForm()) {
            setSuccess(true);
            setTimeout(() => setSuccess(false), 5000);
        }
    }

    return (
        <div className='form-container'>
            <form action="/subscribe" method="POST" onSubmit={handleSubmit}>
                <div className="interaction-block">
                    <label htmlFor="name">Name: <strong className="required-note">* required</strong></label><br />
                    <input id="name" name="name" className={`name-input ${errors.name ? 'input-error' : ''}`} onChange={(e) => setName(e.target.value)}/>
                    {errors.name && <p className="error-text">{errors.name}</p>}
                </div>
                <div className='interaction-block'>
                    <label htmlFor='communication-method'>Preferred Communication Method:<strong className="required-note">* required</strong></label><br />
                    <select id='communication-method' name='communication-method' value={communicationMethod} onChange={(e) => setCommunicationMethod(e.target.value)}>
                        <option value="">Select an option</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="anonymous">Anonymous</option>
                    </select>
                    {errors.communicationMethod && (
                        <p className="error-text">{errors.communicationMethod}</p>
                    )}
                </div>
                {
                    communicationMethod === 'email' && (
                        <div className="interaction-block">
                            <label htmlFor="email">Email: <strong className="required-note">* required</strong></label><br />
                            <input id="email" name="email" className={`email-input ${errors.email ? 'input-error' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)}/>
                            {errors.email && <p className="error-text">{errors.email}</p>}
                        </div>
                    )
                }

                {
                    communicationMethod === 'phone' && (
                        <div className="interaction-block">
                            <label htmlFor="phone">Phone Number: <strong className="required-note">* required</strong></label><br />
                            <input id="phone" name="phone" className={`phone-input ${errors.phone ? 'input-error' : ''}`} value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            {errors.phone && <p className="error-text">{errors.phone}</p>}
                        </div>
                    )
                }

                <div className="interaction-block">
                    <label htmlFor="message">Message: <strong className="required-note">* required</strong></label><br />
                    <textarea id="message" name="message" className={`message-input ${errors.message ? 'input-error' : ''}`} onChange={(e) => setMessage(e.target.value)}/>
                    {errors.message && <p className="error-text">{errors.message}</p>}
                </div>
                <div className='button-group'>
                    <Button className="subscribe-form" type="submit" onClick={handleSubmit}>Submit</Button>
                    {success && (
                        <span className="success-message">
                            ✅ Success! Your form has been submitted.
                        </span>
                    )}
                </div>
            </form>
        </div>
    );
}

export default ContactForm;