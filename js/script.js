// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize carousel with interval if it exists on the page
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        // Bootstrap carousel is already initialized via data attributes
        // Adding pause on hover functionality
        carousel.addEventListener('mouseenter', function() {
            const carouselInstance = bootstrap.Carousel.getInstance(this);
            carouselInstance.pause();
        });
        
        carousel.addEventListener('mouseleave', function() {
            const carouselInstance = bootstrap.Carousel.getInstance(this);
            carouselInstance.cycle();
        });
    }
    
    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const scrollPosition = window.scrollY + window.innerHeight - 100;
            
            if (position < scrollPosition) {
                element.classList.add('animated');
            }
        });
    }
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    

    
    // Check on scroll
    window.addEventListener('scroll', checkCounter);
    
    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.classList.add('btn', 'btn-primary', 'back-to-top');
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.zIndex = '100';
    backToTopButton.style.display = 'none';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.width = '50px';
    backToTopButton.style.height = '50px';
    backToTopButton.style.padding = '0';
    document.body.appendChild(backToTopButton);
    
    // Show/hide back to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // Back to top functionality
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Form validation for registration page
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const requiredFields = this.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            // Email validation
            const emailField = this.querySelector('input[type="email"]');
            if (emailField && emailField.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('is-invalid');
                }
            }
            
            if (isValid) {
                // Form is valid, you can submit it here
                alert('Form submitted successfully!');
                this.reset();
            }
        });
    }
});
// Initialize hero carousel with custom settings
// Initialize hero carousel with custom settings
function initHeroCarousel() {
    const heroCarousel = document.getElementById('heroCarousel');
    if (heroCarousel) {
        // Set carousel to change slides every 3 seconds (3000ms)
        const carousel = new bootstrap.Carousel(heroCarousel, {
            interval: 3000,
            wrap: true
        });
        
        // Pause on hover
        heroCarousel.addEventListener('mouseenter', () => {
            carousel.pause();
        });
        
        heroCarousel.addEventListener('mouseleave', () => {
            carousel.cycle();
        });
    }
}

// Call the function when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    initHeroCarousel();
    
    // ... rest of your existing code
});
// Feedback Form Validation
const feedbackForm = document.getElementById('feedbackForm');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        let isValid = true;
        const requiredFields = this.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('is-invalid');
            } else {
                field.classList.remove('is-invalid');
            }
        });
        
        // Email validation
        const emailField = this.querySelector('input[type="email"]');
        if (emailField && emailField.value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailField.value)) {
                isValid = false;
                emailField.classList.add('is-invalid');
            }
        }
        
        if (isValid) {
            // Form is valid - you can submit it here
            alert('Thank you for your feedback! We will get back to you soon.');
            this.reset();
            
            // Close modal after successful submission
            const modal = bootstrap.Modal.getInstance(document.getElementById('feedbackModal'));
            modal.hide();
        }
    });
    
    // Clear validation on input
    feedbackForm.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('is-invalid');
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const constitutionContent = `
        <h3>AGRAWAL PROFESSIONALS CULTURAL ASSOCIATION CONSTITUTION</h3>
        <p><em>The Constitution adopted unanimously in the General Body Meeting held on March 27, 1994 and as amended from time to time with the approval of General Body Meeting. (Updated up to October 2012.)</em></p>
        
        <h4>AIMS AND OBJECTIVES</h4>
        <p>To promote socio-cultural interaction amongst the Professional Agrawal community in Ahmedabad with a view to contribute towards the up-liftment of Agrawal community, in particular and the society at large.</p>
        
        <h4>ACTIVITIES</h4>
        <ol type="a">
            <li>Encouragement to the members and their families, for excellence in their respective sphere of activities.</li>
            <li>Joint celebration of the festivals relevant to the community i.e. Birth Anniversary of Maharaja Agrasen (Kulpravartak) Jayanti.</li>
            <li>Maintenance of a directory of all the members and families including their background.</li>
            <li>Moral and material support to the member families at the time of special occasions like marriages, childbirth, diseases or any emergency.</li>
            <li>Organization of excursion tours to the places of community interest.</li>
            <li>Assistance to the new entrants to Ahmedabad regarding accommodation and other welfare.</li>
            <li>Unliftment of the outlook of the member families.</li>
            <li>Organization of welfare activities in the interest of the society at large.</li>
            <li>Member and his/her family means Member, his/her spouse, unmarried children up to the age of 25 years and dependent parents.</li>
        </ol>
        
        <!-- Continue with the rest of the content from the PDF -->
    `;
    
    document.querySelector('.constitution-content').innerHTML = constitutionContent;
});