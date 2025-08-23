// Main JavaScript functionality
class ToolsCollection {
    constructor() {
        this.currentFilter = 'all';
        this.currentPage = 1;
        this.toolsPerPage = 6;
        this.searchQuery = '';
        this.filteredTools = [];
        this.isLoading = false;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadTools();
        this.animateOnScroll();
        this.animateStats();
        this.setupNavigation();
    }

    setupEventListeners() {
        // Filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => this.handleFilterClick(btn));
        });

        // Search input
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
        }

        // Load more button
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => this.loadMoreTools());
        }

        // Modal close
        const modalClose = document.getElementById('modal-close');
        const modalOverlay = document.getElementById('tool-modal');
        if (modalClose && modalOverlay) {
            modalClose.addEventListener('click', () => this.closeModal());
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) this.closeModal();
            });
        }

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });

        // Smooth scrolling for navigation links
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
    }

    setupNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close mobile menu when clicking on a link
            navMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(15, 15, 35, 0.95)';
            } else {
                navbar.style.background = 'rgba(15, 15, 35, 0.9)';
            }
        });
    }

    handleFilterClick(btn) {
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update current filter
        this.currentFilter = btn.dataset.filter;
        this.currentPage = 1;
        
        // Reload tools
        this.loadTools();
    }

    handleSearch(query) {
        this.searchQuery = query.toLowerCase().trim();
        this.currentPage = 1;
        this.loadTools();
    }

    filterTools() {
        let filtered = window.toolsData || [];

        // Apply category filter
        if (this.currentFilter !== 'all') {
            filtered = filtered.filter(tool => tool.category === this.currentFilter);
        }

        // Apply search filter
        if (this.searchQuery) {
            filtered = filtered.filter(tool => 
                tool.name.toLowerCase().includes(this.searchQuery) ||
                tool.description.toLowerCase().includes(this.searchQuery) ||
                tool.technologies.some(tech => tech.toLowerCase().includes(this.searchQuery))
            );
        }

        this.filteredTools = filtered;
        return filtered;
    }

    loadTools() {
        const toolsGrid = document.getElementById('tools-grid');
        const loadMoreBtn = document.getElementById('load-more-btn');
        
        if (!toolsGrid) return;

        // Show loading state
        this.setLoadingState(true);

        // Simulate loading delay for better UX
        setTimeout(() => {
            const filtered = this.filterTools();
            const startIndex = 0;
            const endIndex = this.currentPage * this.toolsPerPage;
            const toolsToShow = filtered.slice(startIndex, endIndex);

            // Clear grid if it's a new filter/search
            if (this.currentPage === 1) {
                toolsGrid.innerHTML = '';
            }

            // Add tools to grid
            toolsToShow.forEach((tool, index) => {
                if (index >= (this.currentPage - 1) * this.toolsPerPage) {
                    this.createToolCard(tool, toolsGrid);
                }
            });

            // Update load more button visibility
            if (loadMoreBtn) {
                if (endIndex >= filtered.length) {
                    loadMoreBtn.style.display = 'none';
                } else {
                    loadMoreBtn.style.display = 'inline-flex';
                }
            }

            // Update results count
            this.updateResultsCount(filtered.length);

            this.setLoadingState(false);
        }, 300);
    }

    loadMoreTools() {
        this.currentPage++;
        this.loadTools();
    }

    createToolCard(tool, container) {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.style.animationDelay = `${Math.random() * 0.3}s`;
        
        card.innerHTML = `
            <div class="tool-header">
                <div class="tool-icon">
                    <i class="${tool.icon}"></i>
                </div>
                <div class="tool-info">
                    <h3>${tool.name}</h3>
                    <span class="tool-category">${this.formatCategory(tool.category)}</span>
                </div>
            </div>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-tech">
                ${tool.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="tool-actions">
                <button class="action-btn view-details" data-tool-id="${tool.id}">
                    <i class="fas fa-info-circle"></i>
                    Details
                </button>
                <a href="${tool.demoUrl}" class="action-btn" target="_blank">
                    <i class="fas fa-play"></i>
                    Demo
                </a>
                <a href="${tool.githubUrl}" class="action-btn" target="_blank">
                    <i class="fab fa-github"></i>
                    Code
                </a>
                <a href="${tool.downloadUrl}" class="action-btn" target="_blank">
                    <i class="fas fa-download"></i>
                    Download
                </a>
            </div>
        `;

        // Add click handler for details button
        const detailsBtn = card.querySelector('.view-details');
        detailsBtn.addEventListener('click', () => this.showToolDetails(tool));

        // Add hover effect
        card.addEventListener('mouseenter', () => this.animateCard(card, true));
        card.addEventListener('mouseleave', () => this.animateCard(card, false));

        container.appendChild(card);
    }

    formatCategory(category) {
        const categories = {
            'web': 'Web Tools',
            'utility': 'Utilities',
            'api': 'APIs',
            'mobile': 'Mobile',
            'desktop': 'Desktop'
        };
        return categories[category] || category;
    }

    showToolDetails(tool) {
        const modal = document.getElementById('tool-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        if (!modal || !modalTitle || !modalBody) return;

        modalTitle.textContent = tool.name;
        modalBody.innerHTML = `
            <div class="tool-detail-header">
                <div class="tool-detail-icon">
                    <i class="${tool.icon}"></i>
                </div>
                <div class="tool-detail-info">
                    <span class="tool-detail-category">${this.formatCategory(tool.category)}</span>
                    <p class="tool-detail-description">${tool.description}</p>
                </div>
            </div>
            
            <div class="tool-detail-section">
                <h4><i class="fas fa-star"></i> Key Features</h4>
                <ul class="feature-list">
                    ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="tool-detail-section">
                <h4><i class="fas fa-cogs"></i> Technologies Used</h4>
                <div class="tech-tags">
                    ${tool.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="tool-detail-actions">
                <a href="${tool.demoUrl}" class="btn btn-primary" target="_blank">
                    <i class="fas fa-play"></i>
                    Try Demo
                </a>
                <a href="${tool.githubUrl}" class="btn btn-secondary" target="_blank">
                    <i class="fab fa-github"></i>
                    View Code
                </a>
                <a href="${tool.downloadUrl}" class="btn btn-outline" target="_blank">
                    <i class="fas fa-download"></i>
                    Download
                </a>
            </div>
        `;

        // Add modal styles
        const style = document.createElement('style');
        style.textContent = `
            .tool-detail-header {
                display: flex;
                gap: var(--spacing-md);
                margin-bottom: var(--spacing-lg);
                align-items: flex-start;
            }
            
            .tool-detail-icon {
                width: 80px;
                height: 80px;
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                border-radius: var(--radius-md);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                color: white;
                flex-shrink: 0;
            }
            
            .tool-detail-category {
                display: inline-block;
                background: var(--bg-tertiary);
                color: var(--primary-color);
                padding: 4px var(--spacing-sm);
                border-radius: var(--radius-sm);
                font-size: 0.9rem;
                font-weight: var(--font-weight-medium);
                margin-bottom: var(--spacing-sm);
            }
            
            .tool-detail-description {
                color: var(--text-secondary);
                line-height: 1.6;
                margin: 0;
            }
            
            .tool-detail-section {
                margin-bottom: var(--spacing-lg);
            }
            
            .tool-detail-section h4 {
                display: flex;
                align-items: center;
                gap: var(--spacing-xs);
                color: var(--text-primary);
                font-size: 1.1rem;
                margin-bottom: var(--spacing-md);
            }
            
            .tool-detail-section h4 i {
                color: var(--primary-color);
            }
            
            .feature-list {
                list-style: none;
                padding: 0;
            }
            
            .feature-list li {
                padding: var(--spacing-xs) 0;
                color: var(--text-secondary);
                position: relative;
                padding-left: var(--spacing-lg);
            }
            
            .feature-list li::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: var(--success-color);
                font-weight: bold;
            }
            
            .tech-tags {
                display: flex;
                flex-wrap: wrap;
                gap: var(--spacing-xs);
            }
            
            .tool-detail-actions {
                display: flex;
                gap: var(--spacing-sm);
                flex-wrap: wrap;
                margin-top: var(--spacing-lg);
                padding-top: var(--spacing-lg);
                border-top: 1px solid var(--border-color);
            }
        `;
        
        if (!document.querySelector('#modal-styles')) {
            style.id = 'modal-styles';
            document.head.appendChild(style);
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('tool-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    updateResultsCount(count) {
        // You can add a results counter element if needed
        console.log(`Showing ${count} tools`);
    }

    animateCard(card, isHover) {
        if (isHover) {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        } else {
            card.style.transform = 'translateY(0) scale(1)';
        }
    }

    animateOnScroll() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateNumber(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        stats.forEach(stat => observer.observe(stat));
    }

    animateNumber(element) {
        const target = parseInt(element.dataset.target);
        const increment = target / 100;
        let current = 0;

        const updateNumber = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = target.toLocaleString();
            }
        };

        updateNumber();
    }

    setLoadingState(isLoading) {
        this.isLoading = isLoading;
        const toolsGrid = document.getElementById('tools-grid');
        const loadMoreBtn = document.getElementById('load-more-btn');

        if (isLoading) {
            if (this.currentPage === 1) {
                toolsGrid.innerHTML = '<div class="loading-placeholder">Loading amazing tools...</div>';
            }
            if (loadMoreBtn) {
                loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                loadMoreBtn.disabled = true;
            }
        } else {
            if (loadMoreBtn) {
                loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Load More Tools';
                loadMoreBtn.disabled = false;
            }
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ToolsCollection();
    
    // Add loading placeholder styles
    const style = document.createElement('style');
    style.textContent = `
        .loading-placeholder {
            grid-column: 1 / -1;
            text-align: center;
            padding: var(--spacing-2xl);
            color: var(--text-secondary);
            font-size: 1.2rem;
        }
        
        .animate-in {
            animation: slideInUp 0.6s ease-out;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// Add some utility functions
const utils = {
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};

// Export for potential use in other scripts
window.ToolsCollection = ToolsCollection;
window.utils = utils;
