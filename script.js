// DOM Elements
const preloader = document.querySelector('.preloader');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('.nav-link');
const scrollIndicator = document.querySelector('.scroll-indicator');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioGallery = document.querySelector('.portfolio-gallery');
const projectModal = document.querySelector('.project-modal');
const closeModal = document.querySelector('.close-modal');
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');
const sliderContainer = document.querySelector('.slider-container');
const slideIndicators = document.querySelector('.slide-indicators');
const contactForm = document.getElementById('contactForm');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const backToTop = document.getElementById('backToTop');
const testimonialItems = document.querySelectorAll('.testimonial-item');
const testimonialPrev = document.querySelector('.testimonial-prev');
const testimonialNext = document.querySelector('.testimonial-next');
const testimonialIndicators = document.querySelectorAll('.indicator');
const counters = document.querySelectorAll('.counter');
const skillBars = document.querySelectorAll('.skill-progress');
const newsletterForm = document.querySelector('.newsletter-form');
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const titleWords = document.querySelectorAll('.title-word');
const portfolioMore = document.querySelector('.portfolio-more button');
const ctaButtons = document.querySelectorAll('.cta-button');
const socialLinks = document.querySelectorAll('.social-links a, .hero-social a, .footer-social a, .share-links a');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const aboutImage = document.querySelector('.about-image-container');
const heroImage = document.querySelector('.hero-image-inner');
const particles = document.querySelectorAll('.particle');
const timelineItems = document.querySelectorAll('.timeline-item');
const blogPosts = document.querySelectorAll('.blog-post');
const contactItems = document.querySelectorAll('.contact-item');
const detailItems = document.querySelectorAll('.detail-item');
const skillCategories = document.querySelectorAll('.skill-category');
const testimonialContent = document.querySelectorAll('.testimonial-content');


















// Portfolio Data









const portfolioData = [
    {
        id: 1,
        title: 'Poster Design',
        category: 'graphic',
        client: 'Universitas TanjungPura',
        date: 'seterusnya - 2025',
        description: 'Ini adalah hasil eksplorasi desain poster yang saya buat untuk Universitas Tanjung Pura, dan bercolaborasi bersama tim humas.',
        tools: 'canva',
        images: [
            "images/Desain/desain1.png",
            'images/Desain/desain2.png',
            'images/Desain/desain3.png',
            'images/Desain/desain4.jpg',
            'images/Desain/5.jpg',
            'images/Desain/6.jpg',
             'images/Desain/62.jpg',
              'images/Desain/65.jpg'
            
        ]
    },
    {
        id: 2,
        title: 'FORUM REKCTOR 2025',
        category: 'photo',
        client: 'Universitas Tanjung Pura',
        date: '22 - 23 Novembver 2025',
        description: 'UNTAN Jadi Tuan Rumah FRI 2025, Prof Garuda Wiko Terpilih sebagai Ketua Forum Rektor Indonesia 2025–2026.',
        tools: 'Fujifilm 30-tx',
        images: [
            'images/FORUM RECTOR/1.jpg',
            'images/FORUM RECTOR/2.jpg',
            'images/FORUM RECTOR/3.jpg',
            'images/FORUM RECTOR/4.jpg',
            'images/FORUM RECTOR/5.jpg',
            'images/FORUM RECTOR/6.jpg',
            'images/FORUM RECTOR/7.jpg'
            
        ]
    },
    {
        id: 3,
        title: 'Momen Kerjasama',
        category: 'photo',
        client: 'Universitas Tanjung Pura',
        date: '2025',
        description: 'Foto penandatanganan kerjasama yang menjadi langkah awal kolaborasi baru. Sebuah momen penting yang saya abadikan secara sederhana namun bermakna.',
        tools: 'Nikon D7000',
        images: [
            
            'images/Penandatanganan/1.jpg',
            'images/Penandatanganan/2.jpg',
            'images/Penandatanganan/3.jpg',
            'images/Penandatanganan/4.jpg',
            'images/Penandatanganan/5.jpg'
        
            
        ]
    },
    {
        id: 4,
        title: 'Wisuda 2025',
        category: 'photo',
        client: 'Universitas Tanjung Pura',
        date: '2025',
        description: 'Moment-moment wisuda.',
        tools: 'Fujifilm 30-tx, Nikon D7000, Nikon D5300',
        images: [
            'images/wisuda/1.jpg',
            'images/wisuda/2.jpg',
            'images/wisuda/3.jpg'
        ]
    },
    {
        id: 5,
        title: 'BBC GOES TO CAMPUS UNIVERSITAS TANJUNGPURA',
        category: 'photo',
        client: 'Untan.',
        date: '18/11/2025',
        description: 'BBC Goes to Campus: BBC Indonesia Membangun Ruang Belajar Jurnalisme Global Bersama Mahasiswa UNTAN.',
        tools: 'Nikon D7000',
        images: [
            'images/BBC/1.jpg',
            'images/BBC/2.jpg',
            'images/BBC/3.jpg'
        ]
    },
    {
        id: 6,
        title: 'Upacara Memperingati Hari Besar',
        category: 'photo',
        client: 'Universitas Tanjung Pura',
        date: 'seterusnya - 2025',
        description: 'Mengabadikan moment-moment upacara.',
        tools: 'Nikon D7000',
        images: [
            'images/Upacara/1.jpg',
            'images/Upacara/2.jpg',
            'images/Upacara/3.jpg',
            'images/Upacara/4.jpg',
            'images/Upacara/5.jpg',
            'images/Upacara/6.jpg',
            'images/Upacara/7.jpg',
            'images/Upacara/8.jpg'
        ]
    },
    {
        id: 7,
        title: 'Acara penting',
        category: 'photo',
        client: 'Universitas Tanjung Pura',
        date: '2025',
        description: 'Desain kemasan untuk produk makanan organik dengan pendekatan minimalis dan ramah lingkungan. Desain ini menonjolkan kesegaran dan kealamian produk. Kemasan ini menggunakan material daur ulang dan tinta ramah lingkungan.',
        tools: 'Nikon D7000, Fujifilm 30-tx',
        images: [
            'images/acara1.jpg',
            'images/acara1.jpg',
            'images/acara1.jpg',
            'images/acara1.jpg',
            'images/acara1.jpg'
        ]
    },
    {
        id: 8,
        title: 'Pelantikan',
        category: 'photo',
        client: 'Untan',
        date: '2025',
        description: 'Koleksi fotografi jalanan yang menangkap kehidupan urban dalam hitam putih. Foto-foto ini menampilkan keindahan dalam kesederhanaan dan kehidupan sehari-hari. Proyek ini menghasilkan buku foto yang terjual 500 eksemplar dalam 3 bulan.',
        tools: 'Nikon D7000, Fujifilm ',
        images: [
            'images/Pelantikan/1.jpg',
            'images/Pelantikan/2.jpg',
            'images/Pelantikan/3.jpg',
            'images/Pelantikan/4.jpg',
            'images/Pelantikan/5.jpg'
        ]
    },
    {
        id: 9,
        title: 'Music Video',
        category: 'video',
        client: 'Indie Band',
        date: 'September 2023',
        description: 'Video musik untuk band indie dengan konsep visual yang artistik dan naratif yang mendalam. Video ini berhasil mewakili emosi dan pesan lagu melalui visual yang memukau. Telah ditonton lebih dari 100.000 kali di YouTube dalam 1 bulan.',
        tools: 'Sony FX6, Adobe Premiere Pro, After Effects',
        images: [
            'images/photo10.jpg',
            'https://via.placeholder.com/800x600',
            'https://via.placeholder.com/800x600'
        ]
    },
    {
        id: 10,
        title: 'Web Design',
        category: 'graphic',
        client: 'Tech Startup',
        date: 'Oktober 2023',
        description: 'Desain UI/UX untuk website startup teknologi dengan fokus pada pengalaman pengguna yang intuitif. Desain ini menggabungkan estetika modern dengan fungsionalitas yang tinggi. Website ini telah meningkatkan konversi sebesar 35% setelah diluncurkan.',
        tools: 'Figma, Adobe XD, Photoshop',
        images: [
            'images/photo6.jpg',
            'https://via.placeholder.com/800x600',
            'https://via.placeholder.com/800x600'
        ]
    }


    
];

// Testimonials Data
const testimonialsData = [
    {
        name: 'apip',
        position: 'CEO, Tech Company',
        text: 'Sangat puas dengan hasil desain yang diberikan. Profesional, kreatif, dan selalu tepat waktu. Sangat direkomendasikan!',
        image: 'images/apip.jpg'
    },
    {
        name: 'willy',
        position: 'Event Organizer',
        text: 'Fotografi yang luar biasa! Mampu menangkap momen penting dengan sempurna. Hasilnya melebihi ekspektasi kami.',
        image: 'images/willy.jpg'
    },
    {
        name: 'reno',
        position: 'Marketing Director',
        text: 'Video editing yang sangat profesional. Cerita yang disampaikan sangat jelas dan visualnya memukau. Terima kasih!',
        image: 'images/reno.jpg'
    },
    {
        name: 'deky',
        position: 'Brand Manager',
        text: 'Bekerja dengan desainer ini adalah pengalaman yang luar biasa. Dia benar-benar memahami visi kami dan mewujudkannya dengan sempurna.',
        image: 'images/deky.jpg'
    },
    {
        name: 'umi',
        position: 'Restaurant Owner',
        text: 'Fotografi produk untuk restoran kami luar biasa. Setiap hidangan terlihat begitu menggugah selera. Pelanggan kami sangat terkesan!',
        image: 'images/umi.jpg'
    }
];

// Typed Text Effect
const typedTextElement = document.querySelector('.typed-text');
const texts = ['Desainer Grafis', 'Fotografer', 'Video Editor', 'Kreatif'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause before new text
    }
    
    setTimeout(typeText, typingSpeed);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Hide preloader
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);
    
    // Start typing effect
    typeText();
    
    // Render portfolio items
    renderPortfolioItems('all');
    
    // Render testimonials
    renderTestimonials();
    
    // Event Listeners
    window.addEventListener('scroll', handleScroll);
    scrollIndicator.addEventListener('click', scrollToContent);
    
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', filterPortfolio);
    });
    
    closeModal.addEventListener('click', closeProjectModal);
    
    prevSlide.addEventListener('click', () => changeSlide(-1));
    nextSlide.addEventListener('click', () => changeSlide(1));
    
    contactForm.addEventListener('submit', handleFormSubmit);
    
    themeToggleBtn.addEventListener('click', toggleTheme);
    
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });
    
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
    
    backToTop.addEventListener('click', scrollToTop);
    
    testimonialPrev.addEventListener('click', () => changeTestimonial(-1));
    testimonialNext.addEventListener('click', () => changeTestimonial(1));
    
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    
    portfolioMore.addEventListener('click', loadMorePortfolio);
    
    // Cursor effect
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX - 15 + 'px';
            cursorFollower.style.top = e.clientY - 15 + 'px';
        }, 100);
    });
    
    // Add hover effect to clickable elements
    const clickableElements = document.querySelectorAll('a, button, .portfolio-item, .filter-btn, .cta-button, .social-links a, .slide-indicator, .indicator');
    
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });
    
    // Parallax effect for hero image
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const heroImageInner = document.querySelector('.hero-image-inner');
        
        if (heroImageInner) {
            heroImageInner.style.transform = `translateY(${scrollPosition * 0.2}px) rotate(-5deg)`;
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('counter')) {
                    animateCounter(entry.target);
                } else if (entry.target.classList.contains('skill-progress')) {
                    animateSkillBar(entry.target);
                } else if (entry.target.classList.contains('timeline-item')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                } else if (entry.target.classList.contains('blog-post')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                } else if (entry.target.classList.contains('contact-item')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                } else if (entry.target.classList.contains('detail-item')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                } else if (entry.target.classList.contains('skill-category')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                } else if (entry.target.classList.contains('testimonial-content')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Set initial state for animated elements
    counters.forEach(counter => {
        counter.style.opacity = '0';
        observer.observe(counter);
    });
    
    skillBars.forEach(bar => {
        bar.style.opacity = '0';
        observer.observe(bar);
    });
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    blogPosts.forEach(post => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(30px)';
        post.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(post);
    });
    
    contactItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    detailItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    skillCategories.forEach(category => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(category);
    });
    
    testimonialContent.forEach(content => {
        content.style.opacity = '0';
        content.style.transform = 'translateY(30px)';
        content.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(content);
    });
    
    // Add stagger animation to title words
    titleWords.forEach((word, index) => {
        word.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add animation to particles
    particles.forEach((particle, index) => {
        particle.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Add ripple effect to cta buttons
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add hover effect to social links
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(5deg)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0)';
        });
    });
    
    // Add parallax effect to about image
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const aboutSection = document.getElementById('about');
        
        if (aboutSection) {
            const aboutPosition = aboutSection.offsetTop;
            const aboutHeight = aboutSection.offsetHeight;
            
            if (scrollPosition > aboutPosition - window.innerHeight && scrollPosition < aboutPosition + aboutHeight) {
                const parallaxValue = (scrollPosition - aboutPosition + window.innerHeight) * 0.1;
                aboutImage.style.transform = `translateY(${parallaxValue}px)`;
            }
        }
    });
    
    // Add 3D tilt effect to portfolio items
    portfolioItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleText = heroTitle.textContent;
        heroTitle.innerHTML = '';
        
        titleText.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${index * 0.05}s`;
            span.classList.add('title-char');
            heroTitle.appendChild(span);
        });
    }
    
    // Add glow effect to aurora on mouse move
    document.addEventListener('mousemove', (e) => {
        const auroraElements = document.querySelectorAll('.aurora');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        auroraElements.forEach((aurora, index) => {
            const speed = (index + 1) * 0.5;
            const xPos = x * 50 * speed;
            const yPos = y * 50 * speed;
            
            aurora.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    });
});

// Functions
function handleScroll() {
    const scrollPosition = window.scrollY;
    
    // Header scroll effect with glassmorphism
    if (scrollPosition > 50) {
        header.classList.add('scrolled');
        
        // Tambahkan efek glassmorphism yang lebih kuat saat scroll
        const opacity = Math.min(0.3, scrollPosition / 1000);
        header.style.backgroundColor = `rgba(255, 255, 255, ${0.1 + opacity})`;
        header.style.backdropFilter = `blur(${10 + opacity * 20}px)`;
        header.style.webkitBackdropFilter = `blur(${10 + opacity * 20}px)`;
    } else {
        header.classList.remove('scrolled');
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.webkitBackdropFilter = 'blur(10px)';
    }
    
    // Active nav link
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    // Back to top button
    if (scrollPosition > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Parallax effect for hero section
    const heroSection = document.getElementById('home');
    if (heroSection) {
        const heroPosition = heroSection.offsetTop;
        const heroHeight = heroSection.offsetHeight;
        
        if (scrollPosition < heroPosition + heroHeight) {
            const parallaxValue = scrollPosition * 0.5;
            const heroContent = document.querySelector('.hero-content');
            
            if (heroContent) {
                heroContent.style.transform = `translateY(${parallaxValue}px)`;
                heroContent.style.opacity = 1 - (scrollPosition / heroHeight) * 0.5;
            }
        }
    }
}

function scrollToContent() {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
}

function smoothScroll(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    targetSection.scrollIntoView({ behavior: 'smooth' });
    
    // Close mobile menu if open
    mobileMenu.classList.remove('active');
}

function renderPortfolioItems(filter) {
    portfolioGallery.innerHTML = '';
    
    const filteredItems = filter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === filter);
    
    // Show only first 6 items initially
    const itemsToShow = filteredItems.slice(0, 6);
    
    itemsToShow.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.dataset.id = item.id;
        portfolioItem.style.animationDelay = `${index * 0.1}s`;
        
        portfolioItem.innerHTML = `
            <img src="${item.images[0]}" alt="${item.title}">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <span>${getCategoryName(item.category)}</span>
                <button class="view-project">Lihat Proyek</button>
            </div>
        `;
        
        portfolioItem.addEventListener('click', () => openProjectModal(item));
        portfolioGallery.appendChild(portfolioItem);
    });
    
    // Store remaining items for "Load More" functionality
    window.remainingItems = filteredItems.slice(6);
}

function getCategoryName(category) {
    const categoryNames = {
        'graphic': 'Desain Grafis',
        'photo': 'Fotografi',
        'video': 'Video'
    };
    
    return categoryNames[category] || category;
}

function filterPortfolio() {
    // Update active button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    this.classList.add('active');
    
    // Filter portfolio
    const filter = this.getAttribute('data-filter');
    renderPortfolioItems(filter);
    
    // Reset "Load More" button
    portfolioMore.style.display = 'block';
    portfolioMore.textContent = 'Muat Lebih Banyak';
}

function loadMorePortfolio() {
    if (window.remainingItems && window.remainingItems.length > 0) {
        const itemsToLoad = window.remainingItems.slice(0, 3); // Load 3 more items
        
        itemsToLoad.forEach((item, index) => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.dataset.id = item.id;
            
            portfolioItem.innerHTML = `
                <img src="${item.images[0]}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <h3>${item.title}</h3>
                    <span>${getCategoryName(item.category)}</span>
                    <button class="view-project">Lihat Proyek</button>
                </div>
            `;
            
            portfolioItem.addEventListener('click', () => openProjectModal(item));
            portfolioGallery.appendChild(portfolioItem);
        });
        
        // Update remaining items
        window.remainingItems = window.remainingItems.slice(3);
        
        // Update button text or hide if no more items
        if (window.remainingItems.length === 0) {
            portfolioMore.textContent = 'Semua Item Telah Dimuat';
            portfolioMore.disabled = true;
        }
    }
}

function openProjectModal(project) {
    // Populate modal with project data
    document.querySelector('.project-title').textContent = project.title;
    document.querySelector('.project-description').textContent = project.description;
    document.querySelector('.project-client').textContent = project.client;
    document.querySelector('.project-date').textContent = project.date;
    document.querySelector('.project-category').textContent = getCategoryName(project.category);
    document.querySelector('.project-tools').textContent = project.tools;
    
    // Clear and populate slides
    sliderContainer.innerHTML = '';
    slideIndicators.innerHTML = '';
    
    project.images.forEach((image, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `<img src="${image}" alt="${project.title}">`;
        sliderContainer.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('div');
        indicator.className = 'slide-indicator';
        if (index === 0) {
            indicator.classList.add('active');
        }
        indicator.addEventListener('click', () => goToSlide(index));
        slideIndicators.appendChild(indicator);
    });
    
    // Reset slide position
    currentSlide = 0;
    updateSlidePosition();
    
    // Show modal
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add entrance animation
    setTimeout(() => {
        document.querySelector('.modal-content').style.transform = 'scale(1)';
        document.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

function closeProjectModal() {
    // Add exit animation
    document.querySelector('.modal-content').style.transform = 'scale(0.8)';
    document.querySelector('.modal-content').style.opacity = '0';
    
    setTimeout(() => {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.slide-indicator');
    
    currentSlide += direction;
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    updateSlidePosition();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlidePosition();
}

function updateSlidePosition() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.slide-indicator');
    
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would normally send the form data to a server
    // For demo purposes, we'll just log it and show a success message
    console.log({ name, email, subject, message });
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Pesan Anda telah berhasil dikirim!';
    successMessage.style.animation = 'fadeInUp 0.5s ease';
    
    document.body.appendChild(successMessage);
    
    // Reset form
    contactForm.reset();
    
    // Remove success message after 3 seconds
    setTimeout(() => {
        successMessage.style.animation = 'fadeOutDown 0.5s ease';
        setTimeout(() => {
            successMessage.remove();
        }, 500);
    }, 3000);
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    
    // Update icon
    const icon = themeToggleBtn.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    
    // Save theme preference
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    
    // Add transition effect
    document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    
    // Reset transition after animation completes
    setTimeout(() => {
        document.body.style.transition = '';
    }, 500);
}

// Check for saved theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        const icon = themeToggleBtn.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function renderTestimonials() {
    const testimonialsContainer = document.querySelector('.testimonials-slider');
    testimonialsContainer.innerHTML = '';
    
    testimonialsData.forEach((testimonial, index) => {
        const testimonialItem = document.createElement('div');
        testimonialItem.className = 'testimonial-item';
        if (index === 0) {
            testimonialItem.classList.add('active');
        }
        
        testimonialItem.innerHTML = `
            <div class="testimonial-content">
                <div class="testimonial-text">
                    <p>"${testimonial.text}"</p>
                </div>
                <div class="testimonial-author">
                    <div class="author-image">
                        <img src="${testimonial.image}" alt="${testimonial.name}">
                    </div>
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.position}</p>
                    </div>
                </div>
                <div class="testimonial-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
        `;
        
        testimonialsContainer.appendChild(testimonialItem);
    });
}

let currentTestimonial = 0;

function changeTestimonial(direction) {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const indicators = document.querySelectorAll('.indicator');
    
    testimonials[currentTestimonial].classList.remove('active');
    indicators[currentTestimonial].classList.remove('active');
    
    currentTestimonial += direction;
    
    if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
    } else if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }
    
    testimonials[currentTestimonial].classList.add('active');
    indicators[currentTestimonial].classList.add('active');
}

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = Math.ceil(current);
            setTimeout(updateCounter, 20);
        } else {
            counter.textContent = target;
        }
    };
    
    updateCounter();
}

function animateSkillBar(bar) {
    const percent = bar.getAttribute('data-percent');
    bar.style.width = percent + '%';
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input').value;
    
    // Here you would normally send the email to a server
    // For demo purposes, we'll just show a success message
    console.log('Newsletter subscription:', email);
    
    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Terima kasih telah berlangganan newsletter kami!';
    successMessage.style.animation = 'fadeInUp 0.5s ease';
    
    document.body.appendChild(successMessage);
    
    // Reset form
    e.target.reset();
    
    // Remove success message after 3 seconds
    setTimeout(() => {
        successMessage.style.animation = 'fadeOutDown 0.5s ease';
        setTimeout(() => {
            successMessage.remove();
        }, 500);
    }, 3000);
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

// Add keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    if (projectModal.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
        } else if (e.key === 'Escape') {
            closeProjectModal();
        }
    }
});

// Add fade animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeOutDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(30px);
        }
    }
    
    .title-char {
        display: inline-block;
        opacity: 0;
        animation: fadeInUp 0.5s ease forwards;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple 0.6s linear;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);





function openModal(src, title) {
  const modal = document.getElementById("myModal");
  const modalContent = document.querySelector(".modal-content");
  const modalCaption = document.getElementById("caption");

  modal.style.display = "block";
  modalCaption.innerHTML = title;

  // kosongkan isi modal biar gak numpuk
  modalContent.innerHTML = "";

  if (src.endsWith(".mp4")) {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    modalContent.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = src;
    modalContent.appendChild(img);
  }
}





// Deteksi orientasi gambar (portrait vs landscape) di modal
document.querySelectorAll('.project-modal .slider-container img').forEach(img => {
  img.onload = () => {
    if (img.naturalWidth > img.naturalHeight) {
      img.classList.add("landscape");
    } else {
      img.classList.add("portrait");
    }
  }
});

if (item.images && item.images.length > 0) {
  item.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = item.title;
    card.appendChild(img);
  });
}

if (item.videos && item.videos.length > 0) {
  item.videos.forEach(src => {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.style.width = "100%";
    video.style.borderRadius = "8px";
    card.appendChild(video);
  });
}
