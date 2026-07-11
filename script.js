document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       Preloader Animation
       ========================================================================== */
    const loader = document.getElementById('loader');
    const loaderPercent = document.querySelector('.loader-percent');
    const loaderBar = document.querySelector('.loader-bar');
    
    let percent = 0;
    const progressInterval = setInterval(() => {
        percent += Math.floor(Math.random() * 8) + 3;
        if (percent >= 100) {
            percent = 100;
            clearInterval(progressInterval);
            
            // Hide Loader
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
                
                // Trigger Hero animations after load completes
                initHeroAnimations();
            }, 400);
        }
        loaderPercent.textContent = `${percent}%`;
        loaderBar.style.width = `${percent}%`;
    }, 40);

    /* ==========================================================================
       Custom Cursor Glow
       ========================================================================== */
    const cursorGlow = document.getElementById('cursor-glow');
    const cursorDot = document.getElementById('cursor-dot');
    
    document.addEventListener('mousemove', (e) => {
        // Position elements centering on cursor coordinates
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
        
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    });

    // Make cursor expand or glow brighter on hover of interactive elements
    const hoverables = document.querySelectorAll('a, button, .skill-item, .project-card, .service-card, .contact-card, .social-panel a');
    
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorGlow.style.width = '450px';
            cursorGlow.style.height = '450px';
            cursorGlow.style.background = 'radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, rgba(255, 107, 74, 0.06) 50%, rgba(0,0,0,0) 70%)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(2.0)';
            cursorDot.style.backgroundColor = 'var(--glow)';
            cursorDot.style.boxShadow = '0 0 15px var(--glow), 0 0 30px var(--glow)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorGlow.style.width = '350px';
            cursorGlow.style.height = '350px';
            cursorGlow.style.background = 'radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, rgba(255, 107, 74, 0.04) 50%, rgba(0,0,0,0) 70%)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.0)';
            cursorDot.style.backgroundColor = 'var(--accent)';
            cursorDot.style.boxShadow = '0 0 10px var(--accent), 0 0 20px var(--accent)';
        });
    });

    /* ==========================================================================
       Particles Constellation Background
       ========================================================================== */
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#FF6B4A", "#00E5FF", "#ffffff"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    }
                },
                "opacity": {
                    "value": 0.35,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 0.8,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1.5,
                        "size_min": 0.5,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 140,
                    "color": "#a5a5a5",
                    "opacity": 0.08,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 180,
                        "line_linked": {
                            "opacity": 0.2
                        }
                    },
                    "push": {
                        "particles_nb": 3
                    }
                }
            },
            "retina_detect": true
        });
    }

    /* ==========================================================================
       Typed.js Role Animation
       ========================================================================== */
    if (typeof Typed !== 'undefined') {
        new Typed('#typing-text', {
            strings: [
                'Full Stack Developer',
                'UI/UX & Graphic Designer',
                'Automation Test Engineer'
            ],
            typeSpeed: 60,
            backSpeed: 45,
            backDelay: 2200,
            startDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    /* ==========================================================================
       Sticky Navigation Bar
       ========================================================================== */
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active navbar highlighting logic
        highlightActiveSection();
    });

    /* ==========================================================================
       Mobile Navigation Drawer
       ========================================================================== */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    /* ==========================================================================
       Active Section Scrolling Highlight
       ========================================================================== */
    const sections = document.querySelectorAll('section');
    
    function highlightActiveSection() {
        let currentSectionId = 'home';
        const scrollPosition = window.scrollY + 160; // offset to detect a bit early
        
        sections.forEach(sec => {
            const sectionTop = sec.offsetTop;
            const sectionHeight = sec.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                currentSectionId = sec.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    /* ==========================================================================
       Interactive Mouse Parallax on Hero Section
       ========================================================================== */
    const heroVisual = document.querySelector('.hero-visual');
    const parallaxProfile = document.getElementById('parallax-profile');
    
    if (heroVisual && parallaxProfile) {
        const floatingShapes = parallaxProfile.querySelectorAll('.floating-shape');
        
        heroVisual.addEventListener('mousemove', (e) => {
            const width = heroVisual.offsetWidth;
            const height = heroVisual.offsetHeight;
            
            // Calculate mouse delta from center
            const mouseX = e.clientX - (heroVisual.getBoundingClientRect().left + width / 2);
            const mouseY = e.clientY - (heroVisual.getBoundingClientRect().top + height / 2);
            
            // Shift floating shapes based on depth data-attributes
            floatingShapes.forEach(shape => {
                const depth = parseFloat(shape.getAttribute('data-depth')) || 0.1;
                const shiftX = mouseX * depth;
                const shiftY = mouseY * depth;
                shape.style.transform = `translate3d(${shiftX}px, ${shiftY}px, 0)`;
            });
            
            // Subtle tilt of core image container itself
            const imgContainer = parallaxProfile.querySelector('.profile-img-container');
            const tiltX = (mouseY / height) * 15;
            const tiltY = -(mouseX / width) * 15;
            imgContainer.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
        });
        
        heroVisual.addEventListener('mouseleave', () => {
            floatingShapes.forEach(shape => {
                shape.style.transform = 'translate3d(0, 0, 0)';
            });
            const imgContainer = parallaxProfile.querySelector('.profile-img-container');
            imgContainer.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1.0)';
        });
    }

    /* ==========================================================================
       3D Tilt Effect on Cards (Service & Projects)
       ========================================================================== */
    const tiltCards = document.querySelectorAll('.tilt');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            
            // Mouse coordinate relative to the card top-left corner
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            // Set variables for CSS glow tracking
            card.style.setProperty('--mouse-x', `${(mouseX / width) * 100}%`);
            card.style.setProperty('--mouse-y', `${(mouseY / height) * 100}%`);
            
            // Tilt calculate
            const tiltX = -((mouseY - height / 2) / (height / 2)) * 12; // max tilt 12 degrees
            const tiltY = ((mouseX - width / 2) / (width / 2)) * 12;
            
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });

    /* ==========================================================================
       Project Filtering Logic
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Set active class
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                // GSAP smooth transition for filter fade out/in
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hide');
                    gsap.fromTo(card, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" });
                } else {
                    gsap.to(card, { 
                        opacity: 0, 
                        scale: 0.9, 
                        duration: 0.3, 
                        ease: "power2.inOut",
                        onComplete: () => card.classList.add('hide')
                    });
                }
            });
        });
    });

    /* ==========================================================================
       GSAP Animations & ScrollTriggers
       ========================================================================== */
    gsap.registerPlugin(ScrollTrigger);
    
    function initHeroAnimations() {
        const tl = gsap.timeline();
        
        tl.from('.hero-sub', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' })
          .from('.hero-title', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out' }, '-=0.4')
          .from('.typing-container', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.4')
          .from('.hero-description', { opacity: 0, y: 30, duration: 0.7, ease: 'power3.out' }, '-=0.4')
          .from('.hero-actions', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' }, '-=0.4')
          .from('.hero-visual', { opacity: 0, scale: 0.9, duration: 1.0, ease: 'power3.out' }, '-=0.8');
    }
    
    // Register scroll animations for other sections
    const fadeUpElements = document.querySelectorAll('[data-aos="fade-up"]');
    fadeUpElements.forEach(el => {
        const delay = el.getAttribute('data-aos-delay') ? parseFloat(el.getAttribute('data-aos-delay')) / 1000 : 0;
        
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: delay,
            ease: 'power2.out'
        });
    });

    const fadeRightElements = document.querySelectorAll('[data-aos="fade-right"]');
    fadeRightElements.forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%'
            },
            opacity: 0,
            x: -60,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    const fadeLeftElements = document.querySelectorAll('[data-aos="fade-left"]');
    fadeLeftElements.forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%'
            },
            opacity: 0,
            x: 60,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    /* ==========================================================================
       Stats Count-Up Animation
       ========================================================================== */
    const statsSection = document.querySelector('.about-info');
    const statNumbers = document.querySelectorAll('.stat-number');
    let counted = false;
    
    if (statsSection && statNumbers.length > 0) {
        ScrollTrigger.create({
            trigger: statsSection,
            start: 'top 80%',
            onEnter: () => {
                if (!counted) {
                    counted = true;
                    statNumbers.forEach(num => {
                        const target = parseInt(num.getAttribute('data-target'));
                        gsap.fromTo(num, 
                            { textContent: 0 }, 
                            { 
                                textContent: target, 
                                duration: 2.2, 
                                ease: 'power2.out',
                                snap: { textContent: 1 } 
                            }
                        );
                    });
                }
            }
        });
    }

    /* ==========================================================================
       Contact Form Validation & Submission
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const formSuccessAlert = document.getElementById('form-success');
    const successCloseBtn = document.getElementById('success-close');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isFormValid = true;
            
            // Validate Name
            const nameInput = document.getElementById('name');
            const nameGroup = nameInput.closest('.form-group');
            if (nameInput.value.trim() === '') {
                nameGroup.classList.add('invalid');
                isFormValid = false;
            } else {
                nameGroup.classList.remove('invalid');
            }
            
            // Validate Email
            const emailInput = document.getElementById('email');
            const emailGroup = emailInput.closest('.form-group');
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                emailGroup.classList.add('invalid');
                isFormValid = false;
            } else {
                emailGroup.classList.remove('invalid');
            }
            
            // Validate Subject
            const subjectInput = document.getElementById('subject');
            const subjectGroup = subjectInput.closest('.form-group');
            if (subjectInput.value.trim() === '') {
                subjectGroup.classList.add('invalid');
                isFormValid = false;
            } else {
                subjectGroup.classList.remove('invalid');
            }
            
            // Validate Message
            const messageInput = document.getElementById('message');
            const messageGroup = messageInput.closest('.form-group');
            if (messageInput.value.trim() === '') {
                messageGroup.classList.add('invalid');
                isFormValid = false;
            } else {
                messageGroup.classList.remove('invalid');
            }
            
            // If all fields are valid, submit to Web3Forms
            if (isFormValid) {
                const submitBtn = contactForm.querySelector('.form-btn');
                const originalBtnContent = submitBtn.innerHTML;
                
                // Show loading state on button
                submitBtn.disabled = true;
                submitBtn.innerHTML = `<span>Sending Transmissions...</span> <i class="fa-solid fa-circle-notch fa-spin"></i>`;
                
                // Collect form data
                const formData = new FormData(contactForm);
                
                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Show success modal
                        formSuccessAlert.classList.add('active');
                        // Reset fields
                        contactForm.reset();
                    } else {
                        alert('Something went wrong. Please try again.');
                    }
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;
                })
                .catch(error => {
                    console.error('Web3Forms Error:', error);
                    alert('Failed to send message. Please check your connection and try again.');
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;
                });
            }
        });
        
        // Remove invalid classes on input change
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', () => {
                input.closest('.form-group').classList.remove('invalid');
            });
        });
    }
    
    // Close success overlay
    if (successCloseBtn && formSuccessAlert) {
        successCloseBtn.addEventListener('click', () => {
            formSuccessAlert.classList.remove('active');
        });
    }

    /* ==========================================================================
       Back to Top Scroll Handler
       ========================================================================== */
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ==========================================================================
       Scroll Navigation Offset Adjust
       ========================================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==========================================================================
       Graphic Design Gallery Lightbox & UI/UX Modal Handlers
       ========================================================================== */

    // Images for Graphic Design Collection
    const graphicDesignImages = [
        { src: 'assets/Untitled-1.png', fallback: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop', title: 'RZ Designs Logo', category: 'Logo Design' },
        { src: 'assets/Untitled-2.jpg', fallback: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop', title: 'Personal Brand Banner Design', category: 'Brand Identity' },
        { src: 'assets/SIG Ps.jpg', fallback: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop', title: 'Signature Perfume Advertisement', category: 'Advertising' },
        { src: 'assets/SPRITE Ps.jpg', fallback: 'https://images.unsplash.com/photo-1561070791-26c113006238?q=80&w=1000&auto=format&fit=crop', title: 'Sprite Product Poster', category: 'Poster Design' },
        { src: 'assets/ALPHA Ps.jpg', fallback: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop', title: 'Alpha Industries Logo Design', category: 'Brand Identity' },
        { src: 'assets/BOULT Ps.jpg', fallback: 'https://images.unsplash.com/photo-1626785774625-ddc7c8241314?q=80&w=1000&auto=format&fit=crop', title: 'Boult Mustang Series', category: 'Product Design' },
        { src: 'assets/NIKE Ps.jpg', fallback: 'https://images.unsplash.com/photo-1561070791-26c113006238?q=80&w=1000&auto=format&fit=crop', title: 'Nike Poster Design', category: 'Poster Design' },
        { src: 'assets/ORIENT Ps.jpg', fallback: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop', title: 'Orient Electric Ad', category: 'Advertising' },
        { src: 'assets/BMW Ps.jpg', fallback: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop', title: 'BMW Motorsport Poster', category: 'Poster Design' }
    ];

    let currentImageIndex = 0;
    let thumbnailsGenerated = false;

    // Zoom & Pan State Variables
    let zoomScale = 1;
    let isDragging = false;
    let startX = 0, startY = 0;
    let translateX = 0, translateY = 0;

    // Cache elements
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCategory = document.getElementById('lightbox-category');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const lightboxLoader = document.getElementById('lightbox-loader');
    const thumbnailsContainer = document.getElementById('lightbox-thumbnails-container');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');
    const closeBtn = document.getElementById('lightbox-close-btn');

    // Zoom Buttons and Percentage Display
    const zoomInBtn = document.getElementById('zoom-in-btn');
    const zoomOutBtn = document.getElementById('zoom-out-btn');
    const zoomResetBtn = document.getElementById('zoom-reset-btn');
    const zoomPercentEl = document.getElementById('zoom-percentage');

    // UI/UX Modal Elements
    const uiuxModal = document.getElementById('uiux-links-modal');
    const uiuxCloseBtn = document.querySelector('.uiux-modal-overlay #uiux-close-btn');

    // 1. Gallery Lightbox Logic
    function initGalleryThumbnails() {
        if (thumbnailsGenerated || !thumbnailsContainer) return;
        
        thumbnailsContainer.innerHTML = '';
        graphicDesignImages.forEach((img, idx) => {
            const thumb = document.createElement('img');
            thumb.className = 'lightbox-thumb';
            thumb.src = img.src;
            thumb.alt = img.title;
            thumb.dataset.index = idx;

            // Robust thumbnail error fallback
            thumb.onerror = () => {
                thumb.onerror = null;
                thumb.src = img.fallback;
            };

            thumb.addEventListener('click', (e) => {
                e.stopPropagation();
                showImage(idx);
            });
            thumbnailsContainer.appendChild(thumb);
        });
        thumbnailsGenerated = true;
    }

    // Zoom and Pan transform helper
    function updateTransform() {
        if (!lightboxImg) return;
        
        if (zoomScale === 1) {
            translateX = 0;
            translateY = 0;
        } else {
            // Get actual dimensions
            const imgWidth = lightboxImg.offsetWidth;
            const imgHeight = lightboxImg.offsetHeight;
            
            // Constrain translation limits to keep image within view boundaries
            const maxTx = Math.max(0, (imgWidth * zoomScale - imgWidth) / 2);
            const maxTy = Math.max(0, (imgHeight * zoomScale - imgHeight) / 2);
            
            translateX = Math.min(Math.max(translateX, -maxTx), maxTx);
            translateY = Math.min(Math.max(translateY, -maxTy), maxTy);
        }
        
        lightboxImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${zoomScale})`;
        
        if (zoomPercentEl) {
            zoomPercentEl.textContent = `${Math.round(zoomScale * 100)}%`;
        }
        
        // Update cursor state
        if (zoomScale > 1) {
            lightboxImg.style.cursor = isDragging ? 'grabbing' : 'grab';
        } else {
            lightboxImg.style.cursor = 'zoom-in';
        }
    }

    function resetZoom() {
        zoomScale = 1;
        translateX = 0;
        translateY = 0;
        if (lightboxImg) {
            lightboxImg.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
            updateTransform();
            setTimeout(() => {
                if (lightboxImg) lightboxImg.style.transition = '';
            }, 300);
        }
    }

    // Setup zoom control button events
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            zoomScale = Math.min(4, zoomScale + 0.25);
            if (lightboxImg) lightboxImg.style.transition = 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)';
            updateTransform();
            setTimeout(() => { if (lightboxImg) lightboxImg.style.transition = ''; }, 250);
        });
    }

    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            zoomScale = Math.max(1, zoomScale - 0.25);
            if (lightboxImg) lightboxImg.style.transition = 'transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)';
            updateTransform();
            setTimeout(() => { if (lightboxImg) lightboxImg.style.transition = ''; }, 250);
        });
    }

    if (zoomResetBtn) {
        zoomResetBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            resetZoom();
        });
    }

    // Drag / Pan & mouse scroll zoom events
    if (lightboxImg) {
        lightboxImg.addEventListener('mousedown', (e) => {
            if (zoomScale <= 1) return;
            e.preventDefault();
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            lightboxImg.style.transition = 'none';
            updateTransform();
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            updateTransform();
        });

        window.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                updateTransform();
            }
        });

        // Touch support for mobile devices
        lightboxImg.addEventListener('touchstart', (e) => {
            if (zoomScale <= 1 || e.touches.length !== 1) return;
            isDragging = true;
            startX = e.touches[0].clientX - translateX;
            startY = e.touches[0].clientY - translateY;
            lightboxImg.style.transition = 'none';
        });

        window.addEventListener('touchmove', (e) => {
            if (!isDragging || e.touches.length !== 1) return;
            translateX = e.touches[0].clientX - startX;
            translateY = e.touches[0].clientY - startY;
            updateTransform();
        });

        window.addEventListener('touchend', () => {
            if (isDragging) {
                isDragging = false;
                updateTransform();
            }
        });

        // Mouse Wheel Zoom
        lightboxImg.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.25 : 0.25;
            const newScale = Math.min(4, Math.max(1, zoomScale + delta));
            
            if (newScale !== zoomScale) {
                zoomScale = newScale;
                lightboxImg.style.transition = 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)';
                updateTransform();
                setTimeout(() => { if (lightboxImg) lightboxImg.style.transition = ''; }, 100);
            }
        }, { passive: false });

        // Double Click to toggle zoom
        lightboxImg.addEventListener('dblclick', (e) => {
            if (zoomScale > 1) {
                resetZoom();
            } else {
                zoomScale = 2.5;
                // Focus zoom on the clicked location
                const rect = lightboxImg.getBoundingClientRect();
                const clickX = e.clientX - rect.left - (rect.width / 2);
                const clickY = e.clientY - rect.top - (rect.height / 2);
                translateX = -clickX * 1.5;
                translateY = -clickY * 1.5;
                
                lightboxImg.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)';
                updateTransform();
                setTimeout(() => { if (lightboxImg) lightboxImg.style.transition = ''; }, 300);
            }
        });
    }

    function showImage(index) {
        if (!lightboxImg) return;

        resetZoom(); // Reset scale & position for the new image

        // Wrap around index
        if (index < 0) {
            index = graphicDesignImages.length - 1;
        } else if (index >= graphicDesignImages.length) {
            index = 0;
        }

        currentImageIndex = index;
        const currentImg = graphicDesignImages[index];

        // Setup loading state
        lightboxLoader.style.display = 'block';
        lightboxImg.style.opacity = '0';

        let hasFailedOnce = false;

        lightboxImg.onload = () => {
            lightboxLoader.style.display = 'none';
            lightboxImg.style.opacity = '1';
        };

        lightboxImg.onerror = () => {
            if (!hasFailedOnce) {
                hasFailedOnce = true;
                lightboxImg.src = currentImg.fallback;
            } else {
                lightboxImg.onerror = null;
                lightboxLoader.style.display = 'none';
                lightboxImg.src = 'assets/ALPHA Ps.jpg'; // Final safety image
                lightboxImg.style.opacity = '1';
            }
        };

        lightboxImg.src = currentImg.src;

        // Set Texts
        if (lightboxCounter) lightboxCounter.textContent = `${index + 1} / ${graphicDesignImages.length}`;
        if (lightboxTitle) lightboxTitle.textContent = currentImg.title;
        if (lightboxCategory) lightboxCategory.textContent = currentImg.category;

        // Update Thumbnails classes
        const thumbs = document.querySelectorAll('.lightbox-thumb');
        thumbs.forEach((thumb, idx) => {
            if (idx === index) {
                thumb.classList.add('active');
                thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    function openGallery(startIndex) {
        if (!lightbox) return;
        initGalleryThumbnails();
        
        lightbox.style.display = 'flex';
        setTimeout(() => {
            lightbox.classList.add('active');
        }, 10);
        
        document.body.style.overflow = 'hidden';
        showImage(startIndex);
    }

    function closeGallery() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.style.display = 'none';
            resetZoom(); // Reset zoom state when gallery is closed
        }, 400);
        document.body.style.overflow = '';
    }

    // Bind Gallery triggers
    document.querySelectorAll('.open-graphics-gallery').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openGallery(0);
        });
    });

    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentImageIndex - 1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentImageIndex + 1); });
    if (closeBtn) closeBtn.addEventListener('click', (e) => { e.stopPropagation(); closeGallery(); });
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-container')) {
                closeGallery();
            }
        });
    }

    // Keyboard support for Gallery & Modals
    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeGallery();
            if (e.key === 'ArrowLeft') showImage(currentImageIndex - 1);
            if (e.key === 'ArrowRight') showImage(currentImageIndex + 1);
        }
        if (uiuxModal && uiuxModal.classList.contains('active')) {
            if (e.key === 'Escape') closeUIUXModal();
        }
    });

    // 2. UI/UX Links Modal Logic
    function openUIUXModal() {
        if (!uiuxModal) return;
        uiuxModal.style.display = 'flex';
        setTimeout(() => {
            uiuxModal.classList.add('active');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    function closeUIUXModal() {
        if (!uiuxModal) return;
        uiuxModal.classList.remove('active');
        setTimeout(() => {
            uiuxModal.style.display = 'none';
        }, 400);
        document.body.style.overflow = '';
    }

    // Bind UI/UX triggers
    document.querySelectorAll('.open-uiux-modal').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openUIUXModal();
        });
    });

    if (uiuxCloseBtn) {
        uiuxCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeUIUXModal();
        });
    }

    if (uiuxModal) {
        uiuxModal.addEventListener('click', (e) => {
            if (e.target === uiuxModal) {
                closeUIUXModal();
            }
        });
    }

});
