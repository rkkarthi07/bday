// Vintage Birthday Website JavaScript

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeFloatingHearts();
    initializePhotoGallery();
    addScrollAnimations();
});

// Floating Hearts Animation
function initializeFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    const heartSymbols = ['❤️', '💛', '🧡', '💚', '💙', '💜', '🤍', '💕', '💖', '💗'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 20000);
    }
    
    // Create hearts periodically
    setInterval(createHeart, 2000);
    
    // Create initial hearts
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 400);
    }
}

// Photo Gallery Initialization (removed - now handled by photos.html page)
function initializePhotoGallery() {
    // Photos are now on a separate page (photos.html)
    // This function is kept for compatibility but does nothing on the main page
}

// Scroll Animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all vintage cards
    document.querySelectorAll('.vintage-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Photo Modal (for future enhancement)
function openPhotoModal(imagePath) {
    // You can implement a lightbox/modal here if needed
    console.log('Opening photo:', imagePath);
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to header
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.vintage-header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.3}px)`;
        header.style.opacity = 1 - (scrolled / 500);
    }
});

// Add confetti effect on page load (optional enhancement)
function createConfetti() {
    const confettiColors = ['#C9A961', '#8B6F47', '#D4C4A8', '#F5E6D3'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.opacity = Math.random();
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.zIndex = '9998';
            confetti.style.pointerEvents = 'none';
            
            document.body.appendChild(confetti);
            
            const animationDuration = Math.random() * 3 + 2;
            confetti.style.transition = `top ${animationDuration}s linear, opacity ${animationDuration}s linear`;
            
            setTimeout(() => {
                confetti.style.top = '100vh';
                confetti.style.opacity = '0';
            }, 10);
            
            setTimeout(() => {
                confetti.remove();
            }, animationDuration * 1000);
        }, i * 50);
    }
}

// Uncomment to enable confetti on load
// createConfetti();

