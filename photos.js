// Photo Gallery Page JavaScript

console.log('photos.js file loaded!');

let currentPhotoIndex = 0;
let photoPaths = [];

// Initialize on page load
function init() {
    console.log('Init function called!');
    initializeFloatingHearts();
    initializePhotoGallery();
    initializeLightbox();
}

// Run immediately if DOM is already loaded, otherwise wait
if (document.readyState === 'loading') {
    console.log('DOM is loading, waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOMContentLoaded fired!');
        init();
    });
} else {
    // DOM is already loaded
    console.log('DOM already loaded, running init immediately...');
    init();
}

// Also try on window load as a fallback
window.addEventListener('load', function() {
    console.log('Window load event - checking if gallery initialized...');
    const grid = document.getElementById('photoGalleryGrid');
    if (grid) {
        const hasPhotos = grid.querySelectorAll('.photo-item').length > 0;
        const hasPlaceholder = grid.querySelector('.photo-placeholder-card');
        if (!hasPhotos && hasPlaceholder && typeof initializePhotoGallery === 'function') {
            console.log('Gallery not initialized, retrying...');
            setTimeout(initializePhotoGallery, 100);
        }
    }
});

// Floating Hearts Animation
function initializeFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-container');
    if (!heartsContainer) return;
    
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

// Initialize Photo Gallery
function initializePhotoGallery() {
    console.log('=== Starting photo gallery initialization ===');
    
    const photoGalleryGrid = document.getElementById('photoGalleryGrid');
    
    // Check if element exists
    if (!photoGalleryGrid) {
        console.error('Photo gallery grid element not found!');
        alert('Error: Photo gallery grid element not found!');
        return;
    }
    
    console.log('Photo gallery grid element found:', photoGalleryGrid);
    
    // Photo paths - all photos from the photos folder
    photoPaths = [
        'photos/photo1.jpg',
        'photos/photo2.jpg',
        'photos/photo3.jpg',
        'photos/photo4.jpg',
        'photos/photo5.jpg',
        'photos/photo6.jpg',
        'photos/photo7.jpg',
        'photos/photo8.jpg',
        'photos/photo9.jpg',
        'photos/photo10.jpg',
        'photos/photo11.jpg'
    ];
    
    console.log('Photo paths array created with', photoPaths.length, 'photos');
    console.log('Photo paths:', photoPaths);
    
    // If no photos are added, show placeholder
    if (photoPaths.length === 0) {
        console.log('No photos to display');
        return; // Placeholder is already in HTML
    }
    
    // Clear placeholder
    console.log('Clearing placeholder...');
    photoGalleryGrid.innerHTML = '';
    console.log('Placeholder cleared. Grid innerHTML is now:', photoGalleryGrid.innerHTML);
    
    // Create photo items
    console.log('Creating photo items...');
    let loadedCount = 0;
    let errorCount = 0;
    
    photoPaths.forEach((path, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.setAttribute('data-index', index);
        photoItem.addEventListener('click', () => openLightbox(index));
        
        const img = document.createElement('img');
        img.src = path;
        img.alt = `Memory ${index + 1}`;
        img.loading = 'lazy';
        img.style.display = 'block';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        
        // Handle image load error
        img.onerror = function() {
            errorCount++;
            console.error('Failed to load image:', path);
            // Show a placeholder instead of broken image icon
            this.style.display = 'none';
            photoItem.style.display = 'flex';
            photoItem.style.alignItems = 'center';
            photoItem.style.justifyContent = 'center';
            photoItem.style.backgroundColor = '#D4C4A8';
            photoItem.style.color = '#8B6F47';
            photoItem.style.fontSize = '16px';
            photoItem.style.fontFamily = 'Arial, sans-serif';
            photoItem.textContent = 'Photo ' + (index + 1) + ' not found';
            this.alt = 'Image not found: ' + path;
            console.log(`Image ${index + 1} failed to load. Total errors: ${errorCount}`);
        };
        
        // Log successful load
        img.onload = function() {
            loadedCount++;
            console.log(`Successfully loaded: ${path} (${loadedCount}/${photoPaths.length})`);
        };
        
        photoItem.appendChild(img);
        photoGalleryGrid.appendChild(photoItem);
        console.log('Added photo item', index + 1, 'for path:', path);
    });
    
    // Log summary after a short delay
    setTimeout(() => {
        console.log(`Photo loading summary: ${loadedCount} loaded, ${errorCount} errors out of ${photoPaths.length} total`);
        if (errorCount > 0) {
            console.warn('Some images failed to load. Check the file paths and ensure images exist in the photos/ folder.');
        }
    }, 2000);
    
    console.log('Photo gallery initialized with', photoPaths.length, 'items');
    console.log('Final grid children count:', photoGalleryGrid.children.length);
    console.log('=== Photo gallery initialization complete ===');
}

// Make function globally accessible
window.initializePhotoGallery = initializePhotoGallery;

// Initialize Lightbox
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCounter = document.getElementById('lightboxCounter');
    
    // Check if all lightbox elements exist
    if (!lightbox || !lightboxClose || !lightboxImage || !lightboxPrev || !lightboxNext || !lightboxCounter) {
        console.warn('Some lightbox elements not found, lightbox may not work properly');
        return;
    }
    
    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Navigation
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
    });
    
    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(1);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            navigateLightbox(-1);
        } else if (e.key === 'ArrowRight') {
            navigateLightbox(1);
        }
    });
    
    // Update counter
    function updateCounter() {
        if (photoPaths.length > 0 && lightboxCounter) {
            lightboxCounter.textContent = `${currentPhotoIndex + 1} / ${photoPaths.length}`;
        } else if (lightboxCounter) {
            lightboxCounter.textContent = '';
        }
    }
    
    // Store updateCounter for use in other functions
    window.updateLightboxCounter = updateCounter;
}

// Open Lightbox
function openLightbox(index) {
    if (photoPaths.length === 0) return;
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    currentPhotoIndex = index;
    lightboxImage.src = photoPaths[currentPhotoIndex];
    lightboxImage.alt = `Memory ${currentPhotoIndex + 1}`;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    updateLightboxCounter();
    
    // Preload adjacent images
    preloadAdjacentImages();
}

// Close Lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Navigate Lightbox
function navigateLightbox(direction) {
    if (photoPaths.length === 0) return;
    
    currentPhotoIndex += direction;
    
    // Wrap around
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = photoPaths.length - 1;
    } else if (currentPhotoIndex >= photoPaths.length) {
        currentPhotoIndex = 0;
    }
    
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImage.src = photoPaths[currentPhotoIndex];
        lightboxImage.alt = `Memory ${currentPhotoIndex + 1}`;
        lightboxImage.style.opacity = '1';
        updateLightboxCounter();
        preloadAdjacentImages();
    }, 150);
}

// Preload adjacent images for smoother navigation
function preloadAdjacentImages() {
    if (photoPaths.length === 0) return;
    
    const prevIndex = currentPhotoIndex - 1 < 0 ? photoPaths.length - 1 : currentPhotoIndex - 1;
    const nextIndex = currentPhotoIndex + 1 >= photoPaths.length ? 0 : currentPhotoIndex + 1;
    
    const prevImg = new Image();
    prevImg.src = photoPaths[prevIndex];
    
    const nextImg = new Image();
    nextImg.src = photoPaths[nextIndex];
}

// Lazy loading enhancement
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    // Observe all images after gallery is created
    setTimeout(() => {
        document.querySelectorAll('.photo-item img').forEach(img => {
            imageObserver.observe(img);
        });
    }, 100);
}

