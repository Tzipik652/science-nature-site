document.querySelector('.contact-form').addEventListener('submit', function(event) {
    const email = document.getElementById('floatingEmail').value.trim();
    if (!validateEmail(email)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}