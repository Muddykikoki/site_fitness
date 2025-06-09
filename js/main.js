document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    setTimeout(function() {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.loading-screen').style.display = 'none';
        }, 500);
    }, 2000);

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        });
    }
    
    // Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated');
                
                if (entry.target.classList.contains('counter')) {
                    animateCounters();
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    document.querySelectorAll('.animate__animated').forEach(element => {
        observer.observe(element);
    });
    
    // Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email });
            
            // Show success message
            alert(`Obrigado, ${name}! Você foi inscrito com sucesso.`);
            
            // Reset form
            this.reset();
        });
    }

    // Add animation classes based on position
    function checkScroll() {
        const scrollPosition = window.scrollY;
        
        // Hero section
        if (scrollPosition < window.innerHeight) {
            document.querySelector('.hero-content').classList.add('animate__fadeInLeft');
            document.querySelector('.hero-image').classList.add('animate__fadeInRight');
        }
        
        // Features section
        const featuresSection = document.querySelector('.features');
        if (scrollPosition > featuresSection.offsetTop - window.innerHeight + 100) {
            document.querySelectorAll('.feature-card').forEach((card, index) => {
                card.style.animationDelay = `${index * 0.2}s`;
                card.classList.add('animate__fadeInUp');
            });
        }
        
        // Download section
        const downloadSection = document.querySelector('.download');
        if (scrollPosition > downloadSection.offsetTop - window.innerHeight + 100) {
            document.querySelector('.download-content').classList.add('animate__fadeInLeft');
            document.querySelector('.download-image').classList.add('animate__fadeInRight');
        }
        
        // Newsletter section
        const newsletterSection = document.querySelector('.newsletter');
        if (scrollPosition > newsletterSection.offsetTop - window.innerHeight + 100) {
            document.querySelector('.newsletter-content').classList.add('animate__zoomIn');
        }
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});