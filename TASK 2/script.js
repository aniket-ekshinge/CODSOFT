document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const message = contactForm.querySelector('textarea[name="message"]').value;

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            contactForm.reset();
        });
    }
});
