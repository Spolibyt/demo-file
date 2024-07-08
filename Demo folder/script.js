// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const contactForm = document.getElementById('contactForm');

    // Smooth scroll to sections
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll to the "About Us" section when the "Learn More" button is clicked
    learnMoreBtn.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Handle the contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
