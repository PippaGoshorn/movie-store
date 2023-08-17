function EmailSignup(){
    document.addEventListener('DOMContentLoaded', function () {
        const emailForm = document.getElementById('emailForm');
        const emailInput = document.getElementById('emailInput');
    emailForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const emailValue = emailInput.value;
        if (isValidEmail(emailValue)) {
            alert('Thank you for signing up. Email submitted successfully: ' + emailValue);
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }
});

    return (
        <form className="email-signup" id="emailForm">
            <input type="email" id="emailInput" placeholder="Your email" name="email-signup"  className="email-input"></input>
            <button type="submit" className="email-signup-button">Subscribe</button>
        </form>
    )
}

export default EmailSignup;