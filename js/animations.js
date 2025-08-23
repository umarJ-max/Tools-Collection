// Advanced animations and visual effects
class AnimationController {
    constructor() {
        this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.init();
    }

    init() {
        if (this.isReducedMotion) return;
        
        this.setupParallaxEffects();
        this.setupMouseFollower();
        this.setupTypewriter();
        this.setupParticleSystem();
        this.setupScrollAnimations();
    }

    setupParallaxEffects() {
        const shapes = document.querySelectorAll('.shape');
        let ticking = false;

        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.1;
                shape.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
            });

            ticking = false;
        };

        const requestParallax = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestParallax);
    }

    setupMouseFollower() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-outline"></div>';
        document.body.appendChild(cursor);

        const cursorDot = cursor.querySelector('.cursor-dot');
        const cursorOutline = cursor.querySelector('.cursor-outline');

        let mouseX = 0, mouseY = 0;
        let outlineX = 0, outlineY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        const animateOutline = () => {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            
            cursorOutline.style.left = outlineX + 'px';
            cursorOutline.style.top = outlineY + 'px';
            
            requestAnimationFrame(animateOutline);
        };
        animateOutline();

        // Add cursor styles
        this.addCursorStyles();

        // Interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .tool-card, .filter-btn');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    addCursorStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .custom-cursor {
                pointer-events: none;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 9999;
                mix-blend-mode: difference;
            }
            
            .cursor-dot {
                width: 8px;
                height: 8px;
                background: var(--primary-color);
                border-radius: 50%;
                position: absolute;
                transform: translate(-50%, -50%);
                transition: width 0.3s ease, height 0.3s ease;
            }
            
            .cursor-outline {
                width: 40px;
                height: 40px;
                border: 2px solid var(--primary-color);
                border-radius: 50%;
                position: absolute;
                transform: translate(-50%, -50%);
                opacity: 0.5;
                transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
            }
            
            .custom-cursor.hover .cursor-dot {
                width: 12px;
                height: 12px;
                background: var(--secondary-color);
            }
            
            .custom-cursor.hover .cursor-outline {
                width: 60px;
                height: 60px;
                opacity: 0.8;
                border-color: var(--secondary-color);
            }
            
            @media (max-width: 768px) {
                .custom-cursor {
                    display: none;
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupTypewriter() {
        const titleLines = document.querySelectorAll('.title-line');
        
        titleLines.forEach((line, index) => {
            const text = line.textContent;
            line.textContent = '';
            
            setTimeout(() => {
                this.typeText(line, text, 100);
            }, index * 1000);
        });
    }

    typeText(element, text, speed) {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                element.classList.add('typing-complete');
            }
        }, speed);
    }

    setupParticleSystem() {
        const canvas = document.createElement('canvas');
        canvas.className = 'particle-canvas';
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.3;
        `;
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = `hsl(${Math.random() * 60 + 220}, 70%, 60%)`;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                this.opacity += (Math.random() - 0.5) * 0.01;
                this.opacity = Math.max(0.1, Math.min(0.5, this.opacity));
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(50, Math.floor(canvas.width * canvas.height / 15000));
            
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.save();
                        ctx.globalAlpha = (100 - distance) / 100 * 0.2;
                        ctx.strokeStyle = particle.color;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                        ctx.restore();
                    }
                });
            });

            animationId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        initParticles();
        animate();

        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });

        // Pause animation when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animationId);
            } else {
                animate();
            }
        });
    }

    setupScrollAnimations() {
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    this.animateSection(entry.target);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    animateSection(section) {
        const cards = section.querySelectorAll('.tool-card, .hero-card, .stat-card');
        
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animationDelay = `${index * 0.1}s`;
                card.classList.add('slide-in-up');
            }, index * 100);
        });
    }

    // Utility method to create ripple effect
    createRipple(element, event) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;

        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });

        // Add ripple animation if not exists
        if (!document.querySelector('#ripple-animation')) {
            const style = document.createElement('style');
            style.id = 'ripple-animation';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Smooth page transitions
class PageTransitions {
    constructor() {
        this.setupTransitions();
    }

    setupTransitions() {
        // Add transition overlay
        const overlay = document.createElement('div');
        overlay.className = 'page-transition-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            z-index: 10000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.5s ease;
        `;
        document.body.appendChild(overlay);

        // Handle page load
        window.addEventListener('load', () => {
            document.body.classList.add('page-loaded');
            this.fadeInContent();
        });
    }

    fadeInContent() {
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('fade-in');
            }, index * 200);
        });
    }
}

// Theme controller for potential dark/light mode toggle
class ThemeController {
    constructor() {
        this.currentTheme = 'dark'; // Default theme
        this.init();
    }

    init() {
        this.addThemeToggle();
        this.loadSavedTheme();
    }

    addThemeToggle() {
        // Add theme toggle button to navigation
        const navbar = document.querySelector('.nav-menu');
        if (navbar) {
            const themeToggle = document.createElement('button');
            themeToggle.className = 'theme-toggle';
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggle.addEventListener('click', () => this.toggleTheme());
            
            // Add styles for theme toggle
            const style = document.createElement('style');
            style.textContent = `
                .theme-toggle {
                    background: none;
                    border: 1px solid var(--border-color);
                    color: var(--text-secondary);
                    padding: var(--spacing-xs);
                    border-radius: var(--radius-sm);
                    cursor: pointer;
                    transition: var(--transition-fast);
                    font-size: 1rem;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .theme-toggle:hover {
                    color: var(--primary-color);
                    border-color: var(--primary-color);
                }
            `;
            document.head.appendChild(style);
            
            navbar.appendChild(themeToggle);
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme();
        this.saveTheme();
    }

    applyTheme() {
        // Theme switching logic would go here
        // For now, keeping the dark theme as default
        console.log(`Switched to ${this.currentTheme} theme`);
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem('preferred-theme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
            this.applyTheme();
        }
    }

    saveTheme() {
        localStorage.setItem('preferred-theme', this.currentTheme);
    }
}

// Performance monitor
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        this.monitorFPS();
        this.trackPageMetrics();
    }

    monitorFPS() {
        let fps = 0;
        let lastTime = 0;
        
        const countFPS = (currentTime) => {
            fps++;
            
            if (currentTime >= lastTime + 1000) {
                console.log(`FPS: ${fps}`);
                fps = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(countFPS);
        };
        
        requestAnimationFrame(countFPS);
    }

    trackPageMetrics() {
        window.addEventListener('load', () => {
            if ('performance' in window) {
                const navigation = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Metrics:', {
                    'DOM Content Loaded': navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                    'Page Load Time': navigation.loadEventEnd - navigation.loadEventStart,
                    'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart
                });
            }
        });
    }
}

// Initialize all animation systems
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize if motion is not reduced
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        new AnimationController();
        new PageTransitions();
        new PerformanceMonitor();
    }
    
    new ThemeController();
    
    // Add additional CSS for animations
    const additionalStyles = document.createElement('style');
    additionalStyles.textContent = `
        .slide-in-up {
            animation: slideInUp 0.6s ease-out forwards;
        }
        
        .fade-in {
            animation: fadeIn 0.8s ease-out forwards;
        }
        
        .page-loaded section {
            opacity: 0;
            transform: translateY(20px);
        }
        
        .page-loaded section.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .typing-complete::after {
            content: '|';
            animation: blink 1s infinite;
            color: var(--primary-color);
        }
        
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(additionalStyles);
});

// Export for potential use
window.AnimationController = AnimationController;
window.PageTransitions = PageTransitions;
window.ThemeController = ThemeController;
