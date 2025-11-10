/**
 * Sam's Interiors - Main JavaScript
 * Handles navigation, portfolio filtering, lightbox, form validation, and animations
 */

(function() {
    'use strict';

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ============================================
    // Initialize on DOM ready
    // ============================================
    document.addEventListener('DOMContentLoaded', function() {
        initNavigation();
        initPortfolio();
        initLightbox();
        initContactForm();
        initCounters();
        initLazyLoading();
        initCurrentYear();
        initSmoothScroll();
    });

    // ============================================
    // Navigation - Mobile menu toggle
    // ============================================
    function initNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('#main-nav');
        
        if (!navToggle || !nav) return;

        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            nav.setAttribute('aria-hidden', isExpanded);
            
            // Toggle body scroll lock
            document.body.style.overflow = isExpanded ? '' : 'hidden';
        });

        // Close nav when clicking outside
        document.addEventListener('click', function(e) {
            if (nav.getAttribute('aria-hidden') === 'false' && 
                !nav.contains(e.target) && 
                !navToggle.contains(e.target)) {
                navToggle.setAttribute('aria-expanded', 'false');
                nav.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }
        });

        // Close nav on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && nav.getAttribute('aria-hidden') === 'false') {
                navToggle.setAttribute('aria-expanded', 'false');
                nav.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
                navToggle.focus();
            }
        });

        // Close nav when clicking a link (mobile)
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 768) {
                    navToggle.setAttribute('aria-expanded', 'false');
                    nav.setAttribute('aria-hidden', 'true');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    // ============================================
    // Portfolio - Load and filter
    // ============================================
    function initPortfolio() {
        const portfolioGrid = document.getElementById('portfolio-grid');
        const featuredPortfolio = document.getElementById('featured-portfolio');
        
        if (!portfolioGrid && !featuredPortfolio) return;

        // Load portfolio data
        fetch('portfolio.json')
            .then(response => {
                if (!response.ok) throw new Error('Failed to load portfolio');
                return response.json();
            })
            .then(data => {
                if (portfolioGrid) {
                    renderPortfolio(portfolioGrid, data.items);
                    initPortfolioFilters(portfolioGrid, data.items);
                }
                if (featuredPortfolio) {
                    // Show first 3 items on homepage
                    const featured = data.items.slice(0, 3);
                    renderPortfolio(featuredPortfolio, featured);
                }
            })
            .catch(error => {
                console.error('Error loading portfolio:', error);
                if (portfolioGrid) {
                    portfolioGrid.innerHTML = '<p>Portfolio items could not be loaded. Please try again later.</p>';
                }
            });
    }

    function renderPortfolio(container, items) {
        if (!container || !items || items.length === 0) return;

        container.innerHTML = items.map(item => `
            <article class="portfolio-item" data-category="${item.category}" tabindex="0" role="button" aria-label="View ${item.title}">
                <img src="${item.image}" 
                     srcset="${item.imageSrcset || item.image}"
                     alt="${item.alt || item.title}"
                     class="portfolio-image"
                     loading="lazy">
                <div class="portfolio-overlay">
                    <h3 class="portfolio-title">${item.title}</h3>
                    <p class="portfolio-description">${item.description}</p>
                    <div class="portfolio-tags">
                        ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </article>
        `).join('');

        // Add click/keyboard handlers for lightbox
        const portfolioItems = container.querySelectorAll('.portfolio-item');
        portfolioItems.forEach((item, index) => {
            const itemData = items[index];
            item.addEventListener('click', () => openLightbox(itemData, items));
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(itemData, items);
                }
            });
        });
    }

    function initPortfolioFilters(container, items) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        if (!filterButtons.length) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active state
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-selected', 'false');
                });
                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');

                // Filter items
                const portfolioItems = container.querySelectorAll('.portfolio-item');
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });

                // Update focus for keyboard navigation
                const firstVisible = container.querySelector('.portfolio-item:not(.hidden)');
                if (firstVisible) {
                    firstVisible.focus();
                }
            });

            // Keyboard support
            button.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const buttons = Array.from(filterButtons);
                    const currentIndex = buttons.indexOf(this);
                    const nextIndex = e.key === 'ArrowRight' 
                        ? (currentIndex + 1) % buttons.length
                        : (currentIndex - 1 + buttons.length) % buttons.length;
                    buttons[nextIndex].focus();
                    buttons[nextIndex].click();
                }
            });
        });
    }

    // ============================================
    // Lightbox - Image gallery
    // ============================================
    function initLightbox() {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox) return;

        const closeBtn = lightbox.querySelector('.lightbox-close');
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');

        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => navigateLightbox(-1));
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => navigateLightbox(1));
        }

        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.getAttribute('aria-hidden') === 'false') {
                closeLightbox();
            }
            if (e.key === 'ArrowLeft' && lightbox.getAttribute('aria-hidden') === 'false') {
                navigateLightbox(-1);
            }
            if (e.key === 'ArrowRight' && lightbox.getAttribute('aria-hidden') === 'false') {
                navigateLightbox(1);
            }
        });

        // Close on backdrop click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    let currentLightboxItems = [];
    let currentLightboxIndex = 0;

    function openLightbox(item, allItems = []) {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox) return;

        currentLightboxItems = allItems.length > 0 ? allItems : [item];
        currentLightboxIndex = allItems.length > 0 ? allItems.findIndex(i => i.title === item.title) : 0;

        updateLightboxContent();
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Focus management
        const closeBtn = lightbox.querySelector('.lightbox-close');
        if (closeBtn) closeBtn.focus();
    }

    function closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox) return;

        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function navigateLightbox(direction) {
        if (currentLightboxItems.length === 0) return;

        currentLightboxIndex += direction;
        if (currentLightboxIndex < 0) {
            currentLightboxIndex = currentLightboxItems.length - 1;
        } else if (currentLightboxIndex >= currentLightboxItems.length) {
            currentLightboxIndex = 0;
        }

        updateLightboxContent();
    }

    function updateLightboxContent() {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox || currentLightboxItems.length === 0) return;

        const item = currentLightboxItems[currentLightboxIndex];
        const img = lightbox.querySelector('#lightbox-image');
        const title = lightbox.querySelector('#lightbox-title');
        const description = lightbox.querySelector('#lightbox-description');

        if (img) {
            img.src = item.image;
            img.alt = item.alt || item.title;
        }
        if (title) title.textContent = item.title;
        if (description) description.textContent = item.description || '';
    }

    // ============================================
    // Contact Form - Validation and submission
    // ============================================
    function initContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            // Real-time validation
            input.addEventListener('blur', function() {
                validateField(this);
            });

            // Clear errors on input
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    clearFieldError(this);
                }
            });
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });

            if (isValid) {
                submitForm(form);
            } else {
                // Focus first invalid field
                const firstInvalid = form.querySelector('.form-input:invalid, .form-input.error');
                if (firstInvalid) {
                    firstInvalid.focus();
                }
            }
        });
    }

    function validateField(field) {
        const errorElement = document.getElementById(field.id + '-error');
        let isValid = true;
        let errorMessage = '';

        // Required field check
        if (field.hasAttribute('required') && !field.value.trim()) {
            isValid = false;
            errorMessage = 'This field is required.';
        }
        // Email validation
        else if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address.';
            }
        }
        // Phone validation (optional but if provided, should be valid)
        else if (field.type === 'tel' && field.value) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(field.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number.';
            }
        }

        // Update UI
        if (isValid) {
            field.classList.remove('error');
            if (errorElement) {
                errorElement.textContent = '';
            }
        } else {
            field.classList.add('error');
            if (errorElement) {
                errorElement.textContent = errorMessage;
            }
        }

        return isValid;
    }

    function clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = document.getElementById(field.id + '-error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    function submitForm(form) {
        const formData = new FormData(form);
        const successMessage = document.getElementById('form-success');
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        // Simulate form submission (replace with actual endpoint)
        // For production: Replace this with actual API call
        setTimeout(() => {
            // Example: Using a placeholder endpoint
            // fetch('/api/contact', { method: 'POST', body: formData })
            //     .then(response => response.json())
            //     .then(data => {
            //         showSuccessMessage();
            //         form.reset();
            //     })
            //     .catch(error => {
            //         showErrorMessage();
            //     })
            //     .finally(() => {
            //         submitBtn.disabled = false;
            //         submitBtn.textContent = originalText;
            //     });

            // Placeholder success (remove in production)
            showSuccessMessage();
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }, 1000);
    }

    function showSuccessMessage() {
        const successMessage = document.getElementById('form-success');
        if (successMessage) {
            successMessage.style.display = 'block';
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Hide after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    }

    // ============================================
    // Animated Counters
    // ============================================
    function initCounters() {
        if (prefersReducedMotion) return;

        const counters = document.querySelectorAll('.stat-number');
        if (counters.length === 0) return;

        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, observerOptions);

        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // ============================================
    // Lazy Loading Images (IntersectionObserver)
    // ============================================
    function initLazyLoading() {
        // Check if browser supports IntersectionObserver
        if (!('IntersectionObserver' in window)) {
            // Fallback: load all images
            const lazyImages = document.querySelectorAll('img[loading="lazy"]');
            lazyImages.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
            });
            return;
        }

        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });

        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ============================================
    // Current Year (Footer)
    // ============================================
    function initCurrentYear() {
        const yearElements = document.querySelectorAll('#current-year');
        const currentYear = new Date().getFullYear();
        yearElements.forEach(el => {
            el.textContent = currentYear;
        });
    }

    // ============================================
    // Smooth Scroll (with reduced motion support)
    // ============================================
    function initSmoothScroll() {
        if (prefersReducedMotion) return;

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#main-content') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ============================================
    // Hero Slider (Optional - if multiple slides)
    // ============================================
    function initHeroSlider() {
        if (prefersReducedMotion) return;

        const slides = document.querySelectorAll('.hero-slide');
        if (slides.length <= 1) return;

        let currentSlide = 0;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Auto-advance every 5 seconds
        setInterval(nextSlide, 5000);
    }

    // Initialize hero slider if slides exist
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.hero-slide');
        if (slides.length > 1) {
            initHeroSlider();
        }
    });

})();

