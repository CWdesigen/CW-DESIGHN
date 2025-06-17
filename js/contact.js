    document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Clear previous errors
        document.querySelectorAll('.validation-error').forEach(error => {
            error.style.display = 'none';
        });

        // Validate Name
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            isValid = false;
            document.querySelector('.validation-error.name').style.display = 'block';
        }

        // Validate Email
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            document.querySelector('.validation-error.email').style.display = 'block';
        }

        // Validate Message
        const message = document.getElementById('message').value.trim();
        if (message === '') {
            isValid = false;
            document.querySelector('.validation-error.message').style.display = 'block';
        }

        if (isValid) {
            // Simulate form submission success
            document.querySelector('.success-submit-message').style.display = 'block';
            setTimeout(() => {
                document.querySelector('.success-submit-message').style.display = 'none';
                contactForm.reset();
            }, 3000);
        } 
    });
});

