// Navigation Smooth scroll for navigation links
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
            });
        } else {
            console.warn(`Section with ID ${targetId} not found`);
        }
    });
});



// Contact form fix
const contactForm = document.querySelector('.contact-form');

if (!(contactForm instanceof HTMLFormElement)) {
    console.error('.contact-form is not a form element');
} else {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(contactForm);
            const response = await fetch('http://localhost:3000/submit', {
                method: 'POST',
                body: new URLSearchParams(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            alert(data.message);
            contactForm.reset();
        } catch (error) {
            console.error(error);
            alert('Error sending message: ' + error.message);
        }
    });
}

// Add typing animation
const typing = new Typed('.typing', {
    strings: ['Web Developer', 'Mobile Developer', 'UI/UX Designer', 'Graphic Designer','IT Specialist','Digital Marketer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
