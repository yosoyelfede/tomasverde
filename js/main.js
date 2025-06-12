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
  
  // Initialize AOS
  AOS.init({
    duration: 1000,
    easing: 'ease-out-back',
    once: true,
    offset: 50
  });
  
  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
    lerp: 0.05
  });
  
  // Custom cursor
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1
    });
    
    gsap.to(cursorFollower, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3
    });
  });
  
  // Magnetic buttons
  const magneticButtons = document.querySelectorAll('.magnetic');
  
  magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.3
      });
    });
  });
  
  // Split text animation
  const splitTextElements = document.querySelectorAll('.split-text');
  
  splitTextElements.forEach(element => {
    const text = new SplitType(element, { types: 'chars' });
    
    gsap.from(text.chars, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.02,
      ease: 'back.out'
    });
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 70
          },
          ease: "power2.inOut"
        });
      }
    });
  });
  
  // Header scroll effect
  let lastScroll = 0;
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      header.classList.remove('header--hidden');
      return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('header--hidden')) {
      header.classList.add('header--hidden');
    } else if (currentScroll < lastScroll && header.classList.contains('header--hidden')) {
      header.classList.remove('header--hidden');
    }
    
    lastScroll = currentScroll;
  });
  
  // Mobile menu
  const menuToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.classList.contains('active');
      
      if (!isOpen) {
        menuToggle.classList.add('active');
        gsap.to(navMenu, {
          x: 0,
          duration: 0.5,
          ease: "power2.out"
        });
        
        // Animar items del menú
        gsap.from('.nav__menu li', {
          x: 50,
          opacity: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out"
        });
      } else {
        menuToggle.classList.remove('active');
        gsap.to(navMenu, {
          x: '100%',
          duration: 0.5,
          ease: "power2.in"
        });
      }
    });
  }
  
  // Initialize GLightbox
  const lightbox = GLightbox({
    selector: '[data-gallery]',
    touchNavigation: true,
    loop: true
  });
  
  // Initialize Swiper for testimonials
  const testimonialSwiper = new Swiper('.testimonials__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
  
  // Scroll animations with GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  // Animate sections on scroll
  gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 50%',
        scrub: true
      }
    });
  });
  
  // Parallax effect for hero section
  gsap.to('.hero', {
    backgroundPosition: `50% ${innerHeight / 2}px`,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
  
  // Service cards animation
  gsap.utils.toArray('.service').forEach((service, i) => {
    gsap.from(service, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.2,
      scrollTrigger: {
        trigger: service,
        start: 'top 80%'
      }
    });
  });
  
  // Plan cards animation
  gsap.utils.toArray('.plan').forEach((plan, i) => {
    gsap.from(plan, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.2,
      scrollTrigger: {
        trigger: plan,
        start: 'top 80%'
      }
    });
  });
  
  // Contact form animation
  const contactForm = document.querySelector('.contact__form');
  if (contactForm) {
    gsap.from(contactForm, {
      x: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contactForm,
        start: 'top 80%'
      }
    });
  }
  
  // Update cursor on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .magnetic, input, textarea');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
      cursorFollower.style.transform = 'scale(1.5)';
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursorFollower.style.transform = 'scale(1)';
    });
  });
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
        y: 100, 
        opacity: 0, 
        duration: 1.5, 
        ease: "elastic.out(1, 0.5)" 
      })
      .from(heroSubtitle, { 
        y: 50, 
        opacity: 0, 
        duration: 1.2, 
        delay: 0.5, 
        ease: "elastic.out(1, 0.5)" 
      }, '-=0.6')
      .from(heroCta, { 
        y: 30, 
        opacity: 0, 
        duration: 1, 
        delay: 1, 
        ease: "power3.out" 
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
        start: "top 80%",
        end: "top 20%",
        scrub: 1
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });
  });

  // Cards with growth effect
  gsap.utils.toArray('.card').forEach(card => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        end: "top 15%",
        scrub: 1
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });

  // Parallax effect on images
  gsap.utils.toArray('.parallax-img').forEach(img => {
    gsap.to(img, {
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      },
      y: -50,
      ease: "none"
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

// Falling leaves animation
function createFallingLeaves() {
  const leaves = document.createElement('div');
  leaves.className = 'falling-leaves';
  document.body.appendChild(leaves);

  for (let i = 0; i < 15; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaves.appendChild(leaf);

    const randomX = Math.random() * window.innerWidth;
    const randomDelay = Math.random() * 5;
    const randomDuration = 10 + Math.random() * 20;

    gsap.set(leaf, {
      x: randomX,
      y: -100,
      rotation: Math.random() * 360
    });

    gsap.to(leaf, {
      y: window.innerHeight + 100,
      rotation: Math.random() * 360,
      duration: randomDuration,
      delay: randomDelay,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        gsap.set(leaf, {
          x: Math.random() * window.innerWidth,
          y: -100
        });
      }
    });
  }
}

// Start falling leaves animation
createFallingLeaves();

// Hover effect on buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(btn, {
      duration: 0.3,
      ease: "power2.out",
      scale: 1.05,
      boxShadow: `${(x - rect.width/2)/10}px ${(y - rect.height/2)/10}px 20px rgba(0,0,0,0.15)`
    });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      duration: 0.3,
      scale: 1,
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
    });
  });
});

// Active section in menu
function setActiveSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

setActiveSection();