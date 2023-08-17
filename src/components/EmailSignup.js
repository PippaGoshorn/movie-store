import React, { useState } from 'react';

function EmailSignup() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleEmailSubmit = (event) => {
        event.preventDefault();
        
        if (email.length > 10) {
            console.log('Thank you for signing up');
            alert('[DUMMY TEXT - email address won\'t be stored] Thank you for signing up. Email submitted successfully: ' + email);
            setEmail('');
        } else {
            alert('Please enter a valid email address.');
        }
    };

    return (
        <form className="email-signup" onSubmit={handleEmailSubmit}>
            <input
                type="email"
                placeholder="Your email"
                name="email-signup"
                className="email-input"
                value={email}
                onChange={handleEmailChange}
            />
            <button type="submit" className="email-signup-button">Subscribe</button>
        </form>
    );
}

export default EmailSignup;