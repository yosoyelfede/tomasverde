// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP
  gsap.registerPlugin(ScrollTrigger);
  
  // Hide preloader when page is loaded
  window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('hidden');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  });
  
  // Initialize mobile navigation
  initMobileNav();
  
  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize GLightbox
  initLightbox();
  
  // Initialize stats counter
  initStatsCounter();
  
  // Initialize back to top button
  initBackToTop();
  
  // Initialize contact form
  initContactForm();
});

// Mobile Navigation
function initMobileNav() {
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  const navLinks = document.querySelectorAll('.nav__menu a');
  
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('show');
      document.body.classList.toggle('nav-open');
    });
  }
  
  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    });
  });
}

// Scroll Animations with GSAP and ScrollTrigger
function initScrollAnimations() {
  // Header scroll state
  const header = document.querySelector('.header');
  
  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: (self) => {
      if (self.direction === -1) {
        header.classList.remove('scrolled');
      } else {
        header.classList.add('scrolled');
      }
    }
  });
  
  // Hero section animations
  const heroTitle = document.querySelector('.hero__title');
  const heroSubtitle = document.querySelector('.hero__subtitle');
  const heroCta = document.querySelector('.hero__cta');
  
  if (heroTitle && heroSubtitle && heroCta) {
    const heroTl = gsap.timeline();
    
    heroTl
      .from(heroTitle, { 
        y: 50, 
        opacity: 0, 
        duration: 1, 
        ease: 'power3.out' 
      })
      .from(heroSubtitle, { 
        y: 30, 
        opacity: 0, 
        duration: 1, 
        ease: 'power3.out' 
      }, '-=0.6')
      .from(heroCta, { 
        y: 30, 
        opacity: 0, 
        duration: 1, 
        ease: 'power3.out' 
      }, '-=0.6');
  }
  
  // About section animations
  gsap.from('.about__description', {
    scrollTrigger: {
      trigger: '.about__description',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });
  
  // Values animations with stagger
  gsap.from('.value', {
    scrollTrigger: {
      trigger: '.about__values',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  });
  
  // Services animations with stagger
  gsap.from('.service', {
    scrollTrigger: {
      trigger: '.services__grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  });
  
  // Timeline animations
  gsap.from('.timeline__item', {
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.3,
    ease: 'power2.out'
  });
  
  // Benefits animations with stagger
  gsap.from('.benefit', {
    scrollTrigger: {
      trigger: '.benefits__grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  });
  
  // Plans animations with stagger
  gsap.from('.plan', {
    scrollTrigger: {
      trigger: '.plans__grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  });
  
  // Stats animations
  gsap.from('.stat', {
    scrollTrigger: {
      trigger: '.impact__stats',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)'
  });
  
  // Gallery animations with stagger
  gsap.from('.gallery__item', {
    scrollTrigger: {
      trigger: '.gallery__grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out'
  });
  
  // Testimonials animations
  gsap.from('.testimonial', {
    scrollTrigger: {
      trigger: '.testimonials__slider',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: 'power2.out'
  });
  
  // Contact form animation
  gsap.from('.contact__form', {
    scrollTrigger: {
      trigger: '.contact__content',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    x: -50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });
  
  // WhatsApp contact animation
  gsap.from('.contact__whatsapp', {
    scrollTrigger: {
      trigger: '.contact__content',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    x: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });
  
  // Section titles animation
  gsap.utils.toArray('.section__title').forEach(title => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
  });
}

// Lightbox Initialization
function initLightbox() {
  const lightbox = GLightbox({
    selector: '[data-gallery="gallery"]',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
    onOpen: () => {
      // Pause any animations or autoplay when lightbox is open
      console.log('Lightbox opened');
    }
  });
  
  // Ensure all gallery images are loaded before initializing
  const galleryImages = document.querySelectorAll('.gallery__item img');
  galleryImages.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    }
  });
}

// Stats counter animation
function initStatsCounter() {
  const statElements = document.querySelectorAll('.stat__number');
  
  statElements.forEach(element => {
    const target = parseInt(element.getAttribute('data-count'), 10);
    
    // Use ScrollTrigger to start counter when in view
    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => {
        const obj = { value: 0 };
        const duration = 2; // seconds
        
        gsap.to(obj, {
          value: target,
          duration: duration,
          ease: 'power2.out',
          onUpdate: () => {
            element.textContent = Math.floor(obj.value).toLocaleString();
          }
        });
      },
      once: true
    });
  });
}

// Back to top button
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  
  if (backToTopBtn) {
    // Show button after scrolling down
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Form validation and submission
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const address = document.getElementById('address').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Simple validation
      if (!name || !email || !address || !message) {
        showFormError('Por favor completa todos los campos requeridos.');
        return;
      }
      
      // Email validation
      if (!isValidEmail(email)) {
        showFormError('Por favor ingresa un correo electrónico válido.');
        return;
      }
      
      // Here you would typically send the form data to a server
      // For this example, we'll simulate a successful submission
      submitForm(name, email, address, message);
    });
  }
}

// Validate email format
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Show form error
function showFormError(message) {
  const form = document.getElementById('contactForm');
  
  // Remove any existing error message
  const existingError = form.querySelector('.form-error');
  if (existingError) {
    existingError.remove();
  }
  
  // Create and add error message
  const errorElement = document.createElement('div');
  errorElement.className = 'form-error';
  errorElement.textContent = message;
  errorElement.style.color = '#e74c3c';
  errorElement.style.marginBottom = '2rem';
  
  form.insertBefore(errorElement, form.firstChild);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    errorElement.remove();
  }, 5000);
}

// Simulate form submission
function submitForm(name, email, address, message) {
  const form = document.getElementById('contactForm');
  const submitBtn = form.querySelector('button[type="submit"]');
  
  // Disable the submit button and show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Enviando...';
  
  // Simulate API call delay
  setTimeout(() => {
    // Reset form
    form.reset();
    
    // Reset button
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar mensaje';
    
    // Show success message
    const successElement = document.createElement('div');
    successElement.className = 'form-success';
    successElement.textContent = '¡Mensaje enviado con éxito! Te contactaremos pronto.';
    successElement.style.color = '#27ae60';
    successElement.style.marginBottom = '2rem';
    
    form.insertBefore(successElement, form.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      successElement.remove();
    }, 5000);
  }, 2000);
}