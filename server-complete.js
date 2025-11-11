const http = require('http');

// Shared header and footer HTML
const getHeader = () => `
    <header class="header">
        <div class="header-top">
            <div class="container">
                <div class="contact-info">
                    <span>⏰ Open today from 9:00am - 5:00pm</span>
                    <span>📞 (555) 626-9810</span>
                </div>
            </div>
        </div>
        
        <div class="header-main">
            <div class="container">
                <nav class="nav-container">
                    <div class="logo">Sea Street Detailing</div>
                    
                    <ul class="nav-menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/testimonials">Testimonials</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                    
                    <button class="chat-btn" onclick="window.location.href='/book'">💬 Book Now</button>
                </nav>
            </div>
        </div>
    </header>
`;

const getFooter = () => `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Sea Street Detailing</h3>
                    <p>Professional mobile auto detailing services bringing quality care directly to your location.</p>
                </div>
                
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <p>📞 (555) 626-9810</p>
                    <p>✉️ info@seastreedetailing.com</p>
                    <p>📍 Serving Your Area</p>
                </div>
                
                <div class="footer-section">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 8:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 Sea Street Detailing. All rights reserved.</p>
            </div>
        </div>
    </footer>
`;

const getGlobalJS = () => `
<script>
    // Global JavaScript for enhanced user experience
    document.addEventListener('DOMContentLoaded', function() {
        
        // Smooth scrolling for anchor links
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
        
        // Add loading states to all buttons
        document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(btn => {
            btn.addEventListener('click', function() {
                if (this.type !== 'submit' && !this.href) return;
                
                const originalText = this.textContent;
                this.style.pointerEvents = 'none';
                this.textContent = 'Loading...';
                
                setTimeout(() => {
                    this.style.pointerEvents = 'auto';
                    this.textContent = originalText;
                }, 1000);
            });
        });
        
        // Enhanced mobile menu toggle (for future mobile menu)
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('click', function() {
                if (window.location.pathname !== '/') {
                    window.location.href = '/';
                }
            });
            logo.style.cursor = 'pointer';
        }
        
        // Add fade-in animation to page content
        const pageContent = document.querySelector('.page-content');
        if (pageContent) {
            pageContent.style.opacity = '0';
            pageContent.style.transform = 'translateY(20px)';
            pageContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                pageContent.style.opacity = '1';
                pageContent.style.transform = 'translateY(0)';
            }, 100);
        }
        
        // Enhanced phone number click tracking
        document.querySelectorAll('a[href^="tel:"]').forEach(tel => {
            tel.addEventListener('click', function() {
                // Add visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        });
        
        // Auto-focus first input on forms
        const firstInput = document.querySelector('input[type="text"], input[type="email"], input[type="tel"], textarea');
        if (firstInput && window.innerWidth > 768) {
            firstInput.focus();
        }
        
        // Add current page highlighting to navigation
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            if (linkPath === currentPath || (currentPath === '/' && linkPath === '/')) {
                link.style.color = '#dc2626';
                link.style.fontWeight = '700';
            }
        });
        
        // Add keyboard navigation support
        document.addEventListener('keydown', function(e) {
            // Escape key closes any modals (for future use)
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal, .popup').forEach(modal => {
                    modal.style.display = 'none';
                });
            }
            
            // Ctrl/Cmd + K for quick phone call
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                window.location.href = 'tel:+15556269810';
            }
        });
        
        // Add scroll progress indicator
        const createScrollIndicator = () => {
            const indicator = document.createElement('div');
            indicator.id = 'scroll-indicator';
            indicator.style.cssText = \`
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(90deg, #dc2626, #b91c1c);
                z-index: 9999;
                transition: width 0.1s ease;
            \`;
            document.body.appendChild(indicator);
            
            window.addEventListener('scroll', () => {
                const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                indicator.style.width = Math.min(scrollPercent, 100) + '%';
            });
        };
        
        // Only add scroll indicator on longer pages
        if (document.documentElement.scrollHeight > window.innerHeight * 1.5) {
            createScrollIndicator();
        }
        
        // Add "Back to Top" button
        const createBackToTop = () => {
            const backToTop = document.createElement('button');
            backToTop.innerHTML = '↑';
            backToTop.style.cssText = \`
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: #dc2626;
                color: white;
                border: none;
                font-size: 20px;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.3s ease, transform 0.3s ease;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
            \`;
            
            backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            backToTop.addEventListener('mouseenter', () => {
                backToTop.style.transform = 'scale(1.1)';
            });
            
            backToTop.addEventListener('mouseleave', () => {
                backToTop.style.transform = 'scale(1)';
            });
            
            document.body.appendChild(backToTop);
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTop.style.opacity = '1';
                } else {
                    backToTop.style.opacity = '0';
                }
            });
        };
        
        createBackToTop();
        
    });
</script>
`;

const getStyles = () => `
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.6;
        color: #333;
    }

    /* Header */
    .header {
        background: #fff;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
    }

    .header-top {
        background: #1a1a1a;
        color: #fff;
        padding: 8px 0;
        font-size: 14px;
    }

    .header-top .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .contact-info {
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    .contact-info span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .header-main {
        padding: 1rem 0;
    }

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 1.8rem;
        font-weight: 700;
        color: #dc2626;
        text-transform: uppercase;
        letter-spacing: -0.5px;
    }

    .nav-menu {
        display: flex;
        list-style: none;
        gap: 3rem;
        align-items: center;
    }

    .nav-menu a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transition: color 0.3s;
    }

    .nav-menu a:hover {
        color: #dc2626;
    }

    .chat-btn {
        background: #dc2626;
        color: white;
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        cursor: pointer;
        font-size: 14px;
        transition: background 0.3s;
    }

    .chat-btn:hover {
        background: #b91c1c;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    /* Page Content */
    .page-content {
        margin-top: 120px;
        padding: 4rem 0;
        min-height: calc(100vh - 200px);
    }

    .page-title {
        text-align: center;
        margin-bottom: 3rem;
    }

    .page-title h1 {
        font-size: 3rem;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 1rem;
    }

    .page-title p {
        font-size: 1.2rem;
        color: #64748b;
    }

    /* Hero Section */
    .hero {
        height: 100vh;
        background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
                    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23dc2626" width="1200" height="800"/><circle cx="300" cy="200" r="100" fill="%23991b1b" opacity="0.5"/><circle cx="900" cy="600" r="150" fill="%23991b1b" opacity="0.3"/></svg>');
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        color: white;
        margin-top: 120px;
        position: relative;
    }

    .hero-content {
        max-width: 600px;
    }

    .hero h1 {
        font-size: 4rem;
        font-weight: 700;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
        letter-spacing: -1px;
    }

    .hero p {
        font-size: 1.3rem;
        margin-bottom: 2rem;
        font-weight: 300;
        line-height: 1.5;
    }

    .hero-buttons {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .btn-primary {
        background: #dc2626;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .btn-primary:hover {
        background: #b91c1c;
        transform: translateY(-2px);
    }

    .btn-secondary {
        background: transparent;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        border: 2px solid white;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .btn-secondary:hover {
        background: white;
        color: #dc2626;
    }

    /* Features Section */
    .features {
        padding: 6rem 0;
        background: #f8fafc;
    }

    .section-title {
        text-align: center;
        margin-bottom: 4rem;
    }

    .section-title h2 {
        font-size: 3rem;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 1rem;
    }

    .section-title p {
        font-size: 1.2rem;
        color: #64748b;
    }

    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .feature-card {
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        text-align: center;
        transition: transform 0.3s;
    }

    .feature-card:hover {
        transform: translateY(-5px);
    }

    .feature-icon {
        width: 60px;
        height: 60px;
        background: #dc2626;
        border-radius: 12px;
        margin: 0 auto 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: white;
    }

    .feature-card h3 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #1a1a1a;
    }

    .feature-card p {
        color: #64748b;
        font-size: 1rem;
        line-height: 1.6;
    }

    /* Footer */
    .footer {
        background: #1a1a1a;
        color: white;
        padding: 3rem 0 1rem;
    }

    .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .footer-section h3 {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #dc2626;
    }

    .footer-bottom {
        text-align: center;
        padding-top: 2rem;
        border-top: 1px solid #333;
        color: #888;
    }

    /* Pricing Cards */
    .pricing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
        margin: 3rem 0;
    }

    .pricing-card {
        background: white;
        border-radius: 16px;
        padding: 2rem;
        text-align: center;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        transition: transform 0.3s, box-shadow 0.3s;
        border: 2px solid #f1f5f9;
        position: relative;
    }

    .pricing-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 30px rgba(220, 38, 38, 0.15);
    }

    .pricing-card.featured {
        border: 2px solid #dc2626;
        transform: scale(1.05);
    }

    .featured-badge {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        background: #dc2626;
        color: white;
        padding: 6px 20px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .pricing-header h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 0.5rem;
    }

    .price {
        font-size: 3rem;
        font-weight: 700;
        color: #dc2626;
        margin: 1rem 0;
    }

    .price-desc {
        color: #64748b;
        font-size: 1rem;
        margin-bottom: 1.5rem;
    }

    .service-list {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
        text-align: left;
    }

    .service-list li {
        padding: 0.5rem 0;
        color: #374151;
        font-size: 0.95rem;
        border-bottom: 1px solid #f1f5f9;
    }

    .service-list li:last-child {
        border-bottom: none;
    }

    .duration {
        background: #f8fafc;
        padding: 0.75rem;
        border-radius: 8px;
        color: #64748b;
        font-size: 0.9rem;
        margin: 1.5rem 0;
        font-weight: 500;
    }

    /* Add-on Services */
    .additional-services {
        margin: 4rem 0;
        padding: 3rem;
        background: #f8fafc;
        border-radius: 16px;
    }

    .additional-services h2 {
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 2rem;
    }

    .addon-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }

    .addon-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }

    .addon-name {
        font-weight: 500;
        color: #374151;
    }

    .addon-price {
        font-weight: 700;
        color: #dc2626;
        font-size: 1.1rem;
    }

    /* Service Info */
    .service-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin: 4rem 0;
    }

    .info-section {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        text-align: center;
    }

    .info-section h3 {
        font-size: 1.3rem;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 1rem;
    }

    .info-section p {
        color: #64748b;
        line-height: 1.6;
    }

    /* Contact Form Styles */
    .contact-container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 4rem;
        margin: 3rem 0;
    }

    .contact-form-section h2 {
        font-size: 2rem;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 2rem;
        border-bottom: 3px solid #dc2626;
        padding-bottom: 0.5rem;
        display: inline-block;
    }

    .contact-form {
        background: white;
        padding: 2.5rem;
        border-radius: 16px;
        box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        border: 1px solid #f1f5f9;
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        display: block;
        font-weight: 600;
        color: #374151;
        margin-bottom: 0.5rem;
        font-size: 0.95rem;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.3s, box-shadow 0.3s;
        background: #fff;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #dc2626;
        box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    }

    .form-group textarea {
        resize: vertical;
        min-height: 100px;
    }

    .checkbox-group {
        margin: 2rem 0;
    }

    .checkbox-label {
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 0.95rem;
        color: #374151;
    }

    .checkbox-label input[type="checkbox"] {
        width: auto;
        margin-right: 0.75rem;
        transform: scale(1.2);
    }

    .form-submit {
        width: 100%;
        padding: 16px;
        font-size: 1.1rem;
        margin-top: 1rem;
    }

    .error-message {
        display: block;
        color: #dc2626;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        min-height: 1.2rem;
    }

    .form-message {
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        font-weight: 500;
        display: none;
    }

    .form-message.success {
        background: #dcfce7;
        color: #166534;
        border: 1px solid #bbf7d0;
        display: block;
    }

    .form-message.error {
        background: #fef2f2;
        color: #dc2626;
        border: 1px solid #fecaca;
        display: block;
    }

    /* Contact Info Section */
    .contact-info-section {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .contact-card {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        text-align: center;
        border: 2px solid #f8fafc;
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .contact-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(220, 38, 38, 0.1);
    }

    .contact-card.highlights {
        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        color: white;
        border-color: #dc2626;
    }

    .contact-card h3 {
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #1a1a1a;
    }

    .contact-card.highlights h3 {
        color: white;
    }

    .contact-large {
        font-size: 1.4rem;
        font-weight: 700;
        color: #dc2626;
        margin: 1rem 0;
    }

    .contact-card.highlights .contact-large {
        color: white;
    }

    .contact-card p {
        color: #64748b;
        line-height: 1.5;
        margin-bottom: 1rem;
    }

    .contact-card.highlights p {
        color: rgba(255, 255, 255, 0.9);
    }

    .benefits-list {
        list-style: none;
        padding: 0;
        text-align: left;
        margin: 1rem 0;
    }

    .benefits-list li {
        padding: 0.5rem 0;
        color: rgba(255, 255, 255, 0.95);
        font-weight: 500;
    }

    /* Gallery Styles */
    .gallery-filters {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin: 3rem 0;
        flex-wrap: wrap;
    }

    .filter-btn {
        background: transparent;
        border: 2px solid #e5e7eb;
        color: #6b7280;
        padding: 12px 24px;
        border-radius: 25px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .filter-btn:hover,
    .filter-btn.active {
        background: #dc2626;
        border-color: #dc2626;
        color: white;
        transform: translateY(-2px);
    }

    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2rem;
        margin: 3rem 0;
    }

    .gallery-item {
        opacity: 1;
        transition: opacity 0.5s, transform 0.5s;
    }

    .gallery-item.hidden {
        opacity: 0;
        transform: scale(0.8);
        pointer-events: none;
    }

    .before-after-container {
        background: white;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .before-after-container:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(220, 38, 38, 0.15);
    }

    .before-after-card {
        display: grid;
        grid-template-columns: 1fr 1fr;
        position: relative;
    }

    .image-section {
        position: relative;
        aspect-ratio: 4/3;
        overflow: hidden;
    }

    .image-placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        position: relative;
    }

    .car-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
    }

    .image-placeholder p {
        font-size: 1.2rem;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        letter-spacing: 2px;
        margin: 0;
    }

    .label {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 0.5rem;
        text-align: center;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.9rem;
    }

    .gallery-info {
        padding: 2rem;
    }

    .gallery-info h3 {
        font-size: 1.3rem;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 0.5rem;
    }

    .gallery-info p {
        color: #64748b;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }

    .service-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .badge {
        background: #f1f5f9;
        color: #374151;
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
        border: 1px solid #e2e8f0;
    }

    .gallery-cta {
        text-align: center;
        padding: 4rem 2rem;
        background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        border-radius: 20px;
        color: white;
        margin: 4rem 0;
    }

    .gallery-cta h2 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .gallery-cta p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
        opacity: 0.9;
    }

    .cta-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .cta-buttons .btn-secondary {
        background: transparent;
        border-color: white;
        color: white;
    }

    .cta-buttons .btn-secondary:hover {
        background: white;
        color: #dc2626;
    }

    /* Booking Form Styles */
    .booking-progress {
        display: flex;
        justify-content: center;
        margin: 3rem 0;
        position: relative;
    }

    .booking-progress::before {
        content: '';
        position: absolute;
        top: 20px;
        left: 25%;
        right: 25%;
        height: 2px;
        background: #e5e7eb;
        z-index: 1;
    }

    .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 2;
        background: white;
        padding: 0 1rem;
        min-width: 120px;
    }

    .step-number {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #e5e7eb;
        color: #6b7280;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        margin-bottom: 0.5rem;
        transition: all 0.3s;
    }

    .step.active .step-number {
        background: #dc2626;
        color: white;
    }

    .step span {
        font-size: 0.9rem;
        color: #6b7280;
        font-weight: 500;
        text-align: center;
    }

    .step.active span {
        color: #dc2626;
        font-weight: 600;
    }

    .booking-container {
        max-width: 900px;
        margin: 0 auto;
    }

    .booking-step {
        display: none;
        animation: fadeIn 0.5s ease-in-out;
    }

    .booking-step.active {
        display: block;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .booking-step h2 {
        font-size: 2rem;
        font-weight: 700;
        color: #1a1a1a;
        text-align: center;
        margin-bottom: 0.5rem;
    }

    .step-description {
        text-align: center;
        color: #64748b;
        font-size: 1.1rem;
        margin-bottom: 3rem;
    }

    .service-options {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-bottom: 3rem;
    }

    .service-option {
        background: white;
        border: 2px solid #e5e7eb;
        border-radius: 16px;
        padding: 2rem;
        text-align: center;
        transition: all 0.3s;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .service-option:hover {
        border-color: #dc2626;
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(220, 38, 38, 0.15);
    }

    .service-option.selected {
        border-color: #dc2626;
        background: #fef2f2;
    }

    .service-option.featured {
        border-color: #dc2626;
        position: relative;
    }

    .popular-badge {
        position: absolute;
        top: -1px;
        left: 50%;
        transform: translateX(-50%);
        background: #dc2626;
        color: white;
        padding: 6px 20px;
        border-radius: 0 0 12px 12px;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .service-header {
        margin-bottom: 1.5rem;
    }

    .service-header h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1a1a1a;
        margin-bottom: 0.5rem;
    }

    .service-header .price {
        font-size: 2.5rem;
        font-weight: 700;
        color: #dc2626;
    }

    .service-features {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
        text-align: left;
    }

    .service-features li {
        padding: 0.5rem 0;
        color: #374151;
        font-size: 0.95rem;
        border-bottom: 1px solid #f1f5f9;
    }

    .service-features li:last-child {
        border-bottom: none;
    }

    .service-duration {
        background: #f8fafc;
        padding: 0.75rem;
        border-radius: 8px;
        color: #64748b;
        font-size: 0.9rem;
        margin: 1.5rem 0;
        font-weight: 500;
    }

    .select-service-btn {
        width: 100%;
        background: #dc2626;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.3s;
        margin-top: 1rem;
    }

    .select-service-btn:hover {
        background: #b91c1c;
    }

    .service-option.selected .select-service-btn {
        background: #166534;
    }

    .addons-section {
        background: white;
        padding: 2rem;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        margin-bottom: 2rem;
    }

    .addons-section h3 {
        font-size: 1.3rem;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 1.5rem;
    }

    .addon-options {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }

    .addon-checkbox {
        display: flex;
        align-items: center;
        padding: 1rem;
        border: 2px solid #f1f5f9;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s;
    }

    .addon-checkbox:hover {
        border-color: #dc2626;
        background: #fef2f2;
    }

    .addon-checkbox input[type="checkbox"] {
        display: none;
    }

    .checkmark {
        width: 20px;
        height: 20px;
        border: 2px solid #d1d5db;
        border-radius: 4px;
        margin-right: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
    }

    .addon-checkbox input:checked + .checkmark {
        background: #dc2626;
        border-color: #dc2626;
    }

    .addon-checkbox input:checked + .checkmark::after {
        content: '✓';
        color: white;
        font-weight: bold;
        font-size: 12px;
    }

    .addon-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .addon-name {
        font-weight: 500;
        color: #374151;
    }

    .addon-price {
        font-weight: 600;
        color: #dc2626;
    }

    .booking-summary {
        background: white;
        padding: 2rem;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        border: 2px solid #f1f5f9;
    }

    .total-section {
        margin-bottom: 2rem;
    }

    .total-line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 0;
        border-bottom: 1px solid #f1f5f9;
    }

    .total-line.final {
        border-bottom: none;
        font-weight: 700;
        font-size: 1.2rem;
        color: #dc2626;
        padding-top: 1rem;
        border-top: 2px solid #e5e7eb;
    }

    .continue-btn {
        width: 100%;
        padding: 16px;
        font-size: 1.1rem;
    }

    .continue-btn:disabled {
        background: #d1d5db;
        cursor: not-allowed;
    }

    .emergency-contact {
        margin: 3rem 0;
        text-align: center;
    }

    .emergency-contact .contact-card {
        background: #f8fafc;
        padding: 2rem;
        border-radius: 16px;
        border: 2px solid #e2e8f0;
        max-width: 400px;
        margin: 0 auto;
    }

    .emergency-contact h3 {
        font-size: 1.2rem;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 0.5rem;
    }

    .emergency-contact p {
        color: #64748b;
        margin-bottom: 1.5rem;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .hero h1 {
            font-size: 2.5rem;
        }
        
        .hero p {
            font-size: 1.1rem;
        }
        
        .nav-menu {
            display: none;
        }
        
        .hero-buttons {
            flex-direction: column;
        }
        
        .btn-primary, .btn-secondary {
            justify-content: center;
        }
        
        .pricing-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }
        
        .pricing-card.featured {
            transform: none;
        }
        
        .pricing-card.featured:hover {
            transform: translateY(-5px);
        }
        
        .price {
            font-size: 2.5rem;
        }
        
        .additional-services {
            padding: 2rem 1rem;
        }
        
        .addon-grid {
            grid-template-columns: 1fr;
        }
        
        .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        
        .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .contact-form {
            padding: 1.5rem;
        }
        
        .gallery-grid {
            grid-template-columns: 1fr;
        }
        
        .before-after-card {
            grid-template-columns: 1fr;
        }
        
        .gallery-cta h2 {
            font-size: 2rem;
        }
        
        .cta-buttons {
            flex-direction: column;
            align-items: center;
        }
        
        .cta-buttons .btn-primary,
        .cta-buttons .btn-secondary {
            width: 100%;
            max-width: 300px;
        }
        
        .booking-progress {
            flex-wrap: wrap;
            gap: 1rem;
        }
        
        .booking-progress::before {
            display: none;
        }
        
        .step {
            min-width: 80px;
        }
        
        .service-options {
            grid-template-columns: 1fr;
        }
        
        .addon-options {
            grid-template-columns: 1fr;
        }
        
        .service-header .price {
            font-size: 2rem;
        }
    }
</style>
`;

const server = http.createServer((req, res) => {
  const url = req.url;
  
  // Home Page
  if (url === '/' || url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sea Street Detailing - Professional Mobile Auto Detailing Services</title>
    ${getStyles()}
</head>
<body>
    ${getHeader()}
    ${getGlobalJS()}

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Mobile Detailing!</h1>
                <p>Professional Results. At an Affordable Price.</p>
                
                <div class="hero-buttons">
                    <a href="tel:+15556269810" class="btn-primary">
                        📞 (555) 626-9810
                    </a>
                    <a href="/services" class="btn-secondary">
                        📅 Book Services
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features">
        <div class="container">
            <div class="section-title">
                <h2>Why Choose Sea Street Detailing?</h2>
                <p>Professional auto detailing services you can trust</p>
            </div>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🔧</div>
                    <h3>Professional Equipment</h3>
                    <p>We use industry-grade tools and premium products to ensure the highest quality results for your vehicle.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3>Mobile Service</h3>
                    <p>We come to you! No need to waste time driving to a shop. We bring the detailing service directly to your location.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">✅</div>
                    <h3>Satisfaction Guaranteed</h3>
                    <p>We stand behind our work with a 100% satisfaction guarantee on all our detailing services.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">💰</div>
                    <h3>Affordable Pricing</h3>
                    <p>Get premium detailing services at fair, transparent prices with no hidden fees or surprises.</p>
                </div>
            </div>
        </div>
    </section>

    ${getFooter()}
</body>
</html>
    `);
  }
  
  // Services Page
  else if (url === '/services') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services - Sea Street Detailing</title>
    ${getStyles()}
</head>
<body>
    ${getHeader()}
    
    <div class="page-content">
        <div class="container">
            <div class="page-title">
                <h1>Our Detailing Services</h1>
                <p>Professional mobile auto detailing packages designed to keep your vehicle looking its best</p>
            </div>
            
            <!-- Pricing Cards -->
            <div class="pricing-grid">
                <div class="pricing-card basic">
                    <div class="pricing-header">
                        <h3>Basic Wash</h3>
                        <div class="price">$49</div>
                        <p class="price-desc">Perfect for regular maintenance</p>
                    </div>
                    <ul class="service-list">
                        <li>✓ Exterior hand wash</li>
                        <li>✓ Wheel & tire cleaning</li>
                        <li>✓ Window cleaning</li>
                        <li>✓ Quick interior vacuum</li>
                        <li>✓ Dashboard wipe-down</li>
                    </ul>
                    <div class="duration">⏱️ Duration: 45-60 minutes</div>
                    <a href="/book?service=basic" class="btn-primary">Book Basic Wash</a>
                </div>

                <div class="pricing-card premium featured">
                    <div class="featured-badge">Most Popular</div>
                    <div class="pricing-header">
                        <h3>Premium Detail</h3>
                        <div class="price">$129</div>
                        <p class="price-desc">Complete professional detailing</p>
                    </div>
                    <ul class="service-list">
                        <li>✓ Everything in Basic Wash</li>
                        <li>✓ Clay bar treatment</li>
                        <li>✓ Premium wax application</li>
                        <li>✓ Interior deep cleaning</li>
                        <li>✓ Leather conditioning</li>
                        <li>✓ Carpet & upholstery cleaning</li>
                        <li>✓ Engine bay cleaning</li>
                    </ul>
                    <div class="duration">⏱️ Duration: 2-3 hours</div>
                    <a href="/book?service=premium" class="btn-primary">Book Premium Detail</a>
                </div>

                <div class="pricing-card luxury">
                    <div class="pricing-header">
                        <h3>Luxury Package</h3>
                        <div class="price">$199</div>
                        <p class="price-desc">Ultimate protection & restoration</p>
                    </div>
                    <ul class="service-list">
                        <li>✓ Everything in Premium Detail</li>
                        <li>✓ Paint correction (1-step)</li>
                        <li>✓ Ceramic coating application</li>
                        <li>✓ Headlight restoration</li>
                        <li>✓ Interior protection treatment</li>
                        <li>✓ Tire shine & protection</li>
                        <li>✓ 90-day protection guarantee</li>
                    </ul>
                    <div class="duration">⏱️ Duration: 4-5 hours</div>
                    <a href="/book?service=luxury" class="btn-primary">Book Luxury Package</a>
                </div>
            </div>

            <!-- Additional Services -->
            <div class="additional-services">
                <h2>Add-On Services</h2>
                <div class="addon-grid">
                    <div class="addon-item">
                        <span class="addon-name">Headlight Restoration</span>
                        <span class="addon-price">+$35</span>
                    </div>
                    <div class="addon-item">
                        <span class="addon-name">Engine Bay Detail</span>
                        <span class="addon-price">+$40</span>
                    </div>
                    <div class="addon-item">
                        <span class="addon-name">Pet Hair Removal</span>
                        <span class="addon-price">+$25</span>
                    </div>
                    <div class="addon-item">
                        <span class="addon-name">Odor Elimination</span>
                        <span class="addon-price">+$30</span>
                    </div>
                </div>
            </div>

            <!-- Service Areas -->
            <div class="service-info">
                <div class="info-section">
                    <h3>🏠 We Come to You</h3>
                    <p>Mobile service available within 25 miles of downtown. We bring all equipment and water needed for a complete detail at your home, office, or any location.</p>
                </div>
                <div class="info-section">
                    <h3>📅 Easy Scheduling</h3>
                    <p>Book online or call (555) 626-9810. Same-day service available based on availability. We provide 1-hour arrival windows and text confirmations.</p>
                </div>
                <div class="info-section">
                    <h3>💯 Satisfaction Guaranteed</h3>
                    <p>Not happy with our service? We'll return within 24 hours to make it right at no additional charge. Your satisfaction is our top priority.</p>
                </div>
            </div>
        </div>
    </div>

    ${getFooter()}
</body>
</html>
    `);
  }
  
  // Gallery Page
  else if (url === '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery - Sea Street Detailing</title>
    ${getStyles()}
</head>
<body>
    ${getHeader()}
    
    <div class="page-content">
        <div class="container">
            <div class="page-title">
                <h1>Our Work Gallery</h1>
                <p>See the incredible transformations we achieve with our professional detailing services</p>
            </div>
            
            <!-- Filter Tabs -->
            <div class="gallery-filters">
                <button class="filter-btn active" data-filter="all">All Work</button>
                <button class="filter-btn" data-filter="exterior">Exterior Details</button>
                <button class="filter-btn" data-filter="interior">Interior Details</button>
                <button class="filter-btn" data-filter="luxury">Luxury Vehicles</button>
            </div>
            
            <!-- Before/After Gallery Grid -->
            <div class="gallery-grid" id="galleryGrid">
                <!-- Exterior Detailing Examples -->
                <div class="gallery-item" data-category="exterior">
                    <div class="before-after-container">
                        <div class="before-after-card">
                            <div class="image-section before">
                                <div class="image-placeholder" style="background: linear-gradient(135deg, #6b7280 0%, #374151 100%);">
                                    <div class="car-icon">🚗</div>
                                    <p>BEFORE</p>
                                </div>
                                <span class="label">Before</span>
                            </div>
                            <div class="image-section after">
                                <div class="image-placeholder" style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);">
                                    <div class="car-icon">✨</div>
                                    <p>AFTER</p>
                                </div>
                                <span class="label">After</span>
                            </div>
                        </div>
                        <div class="gallery-info">
                            <h3>2020 BMW X5 - Premium Detail</h3>
                            <p>Complete exterior wash, clay bar treatment, and premium wax application</p>
                            <div class="service-badges">
                                <span class="badge">Exterior Wash</span>
                                <span class="badge">Clay Bar</span>
                                <span class="badge">Premium Wax</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gallery-item" data-category="interior">
                    <div class="before-after-container">
                        <div class="before-after-card">
                            <div class="image-section before">
                                <div class="image-placeholder" style="background: linear-gradient(135deg, #92400e 0%, #451a03 100%);">
                                    <div class="car-icon">🪑</div>
                                    <p>BEFORE</p>
                                </div>
                                <span class="label">Before</span>
                            </div>
                            <div class="image-section after">
                                <div class="image-placeholder" style="background: linear-gradient(135deg, #059669 0%, #047857 100%);">
                                    <div class="car-icon">✨</div>
                                    <p>AFTER</p>
                                </div>
                                <span class="label">After</span>
                            </div>
                        </div>
                        <div class="gallery-info">
                            <h3>Honda Accord - Interior Deep Clean</h3>
                            <p>Deep carpet cleaning, leather conditioning, and dashboard restoration</p>
                            <div class="service-badges">
                                <span class="badge">Deep Clean</span>
                                <span class="badge">Leather Care</span>
                                <span class="badge">Stain Removal</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gallery-item" data-category="luxury">
                    <div class="before-after-container">
                        <div class="before-after-card">
                            <div class="image-section before">
                                <div class="image-placeholder" style="background: linear-gradient(135deg, #6b7280 0%, #1f2937 100%);">
                                    <div class="car-icon">🏎️</div>
                                    <p>BEFORE</p>
                                </div>
                                <span class="label">Before</span>
                            </div>
                            <div class="image-section after">
                                <div class="image-placeholder" style="background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);">
                                    <div class="car-icon">💎</div>
                                    <p>AFTER</p>
                                </div>
                                <span class="label">After</span>
                            </div>
                        </div>
                        <div class="gallery-info">
                            <h3>Mercedes-Benz S-Class - Luxury Package</h3>
                            <p>Paint correction, ceramic coating, and premium interior protection</p>
                            <div class="service-badges">
                                <span class="badge">Paint Correction</span>
                                <span class="badge">Ceramic Coating</span>
                                <span class="badge">Premium Protection</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gallery-item" data-category="exterior">
                    <div class="before-after-container">
                        <div class="before-after-card">
                            <div class="image-section before">
                                <div class="image-placeholder" style="background: linear-gradient(135deg, #78716c 0%, #44403c 100%);">
                                    <div class="car-icon">🚙</div>
                                    <p>BEFORE</p>
                                </div>
                                <span class="label">Before</span>
                            </div>
                            <div class="image-section after">
                                <div class="image-placeholder" style="background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);">
                                    <div class="car-icon">🌟</div>
                                    <p>AFTER</p>
                                </div>
                                <span class="label">After</span>
                            </div>
                        </div>
                        <div class="gallery-info">
                            <h3>Ford F-150 - Truck Detail</h3>
                            <p>Heavy-duty wash, wheel cleaning, and protective coating application</p>
                            <div class="service-badges">
                                <span class="badge">Heavy Duty Wash</span>
                                <span class="badge">Wheel Detail</span>
                                <span class="badge">Protective Coating</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gallery-item" data-category="interior">
                    <div class="before-after-container">
                        <div class="before-after-card">
                            <div class="image-section before">
                                <div class="image-placeholder" style="background: linear-gradient(135deg, #a16207 0%, #713f12 100%);">
                                    <div class="car-icon">🧽</div>
                                    <p>BEFORE</p>
                                </div>
                                <span class="label">Before</span>
                            </div>
                            <div class="image-section after">
                                <div class="image-placeholder" style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);">
                                    <div class="car-icon">✨</div>
                                    <p>AFTER</p>
                                </div>
                                <span class="label">After</span>
                            </div>
                        </div>
                        <div class="gallery-info">
                            <h3>Toyota Camry - Pet Hair Removal</h3>
                            <p>Specialized pet hair removal and fabric protection treatment</p>
                            <div class="service-badges">
                                <span class="badge">Pet Hair Removal</span>
                                <span class="badge">Fabric Protection</span>
                                <span class="badge">Odor Elimination</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="gallery-item" data-category="luxury">
                    <div class="before-after-container">
                        <div class="before-after-card">
                            <div class="image-section before">
                                <div class="image-placeholder" style="background: linear-gradient(135deg, #475569 0%, #334155 100%);">
                                    <div class="car-icon">🏁</div>
                                    <p>BEFORE</p>
                                </div>
                                <span class="label">Before</span>
                            </div>
                            <div class="image-section after">
                                <div class="image-placeholder" style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);">
                                    <div class="car-icon">🏆</div>
                                    <p>AFTER</p>
                                </div>
                                <span class="label">After</span>
                            </div>
                        </div>
                        <div class="gallery-info">
                            <h3>Porsche 911 - Show Car Detail</h3>
                            <p>Complete paint restoration and concours-level detailing</p>
                            <div class="service-badges">
                                <span class="badge">Paint Restoration</span>
                                <span class="badge">Concours Detail</span>
                                <span class="badge">Show Ready</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Call to Action -->
            <div class="gallery-cta">
                <h2>Ready for Your Vehicle's Transformation?</h2>
                <p>Join hundreds of satisfied customers who trust Sea Street Detailing for professional results</p>
                <div class="cta-buttons">
                    <a href="/contact" class="btn-primary">Get Your Free Quote</a>
                    <a href="/services" class="btn-secondary">View Our Services</a>
                </div>
            </div>
        </div>
    </div>

    ${getFooter()}

    <script>
        // Gallery filtering functionality
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const filter = this.getAttribute('data-filter');
                    
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Filter gallery items
                    galleryItems.forEach(item => {
                        const category = item.getAttribute('data-category');
                        
                        if (filter === 'all' || category === filter) {
                            item.classList.remove('hidden');
                        } else {
                            item.classList.add('hidden');
                        }
                    });
                });
            });
            
            // Add hover effects for before/after cards
            const beforeAfterCards = document.querySelectorAll('.before-after-card');
            beforeAfterCards.forEach(card => {
                let isHovering = false;
                
                card.addEventListener('mouseenter', function() {
                    isHovering = true;
                    setTimeout(() => {
                        if (isHovering) {
                            this.style.transform = 'scale(1.02)';
                        }
                    }, 100);
                });
                
                card.addEventListener('mouseleave', function() {
                    isHovering = false;
                    this.style.transform = 'scale(1)';
                });
            });
            
            // Animate items on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Initially hide items for animation
            galleryItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                item.style.transitionDelay = (index * 0.1) + 's';
                observer.observe(item);
            });
        });
    </script>
</body>
</html>
    `);
  }
  
  // Testimonials Page
  else if (url === '/testimonials') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testimonials - Sea Street Detailing</title>
    ${getStyles()}
</head>
<body>
    ${getHeader()}
    
    <div class="page-content">
        <div class="container">
            <div class="page-title">
                <h1>Customer Reviews</h1>
                <p>What our satisfied customers are saying</p>
            </div>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div style="color: #fbbf24; font-size: 1.5rem; margin-bottom: 1rem;">⭐⭐⭐⭐⭐</div>
                    <p>"Amazing service! My car looks brand new. The team was professional and thorough."</p>
                    <h4 style="margin-top: 1rem; color: #dc2626;">- Sarah M.</h4>
                </div>
                
                <div class="feature-card">
                    <div style="color: #fbbf24; font-size: 1.5rem; margin-bottom: 1rem;">⭐⭐⭐⭐⭐</div>
                    <p>"Excellent mobile service. They came to my office and detailed my car while I worked."</p>
                    <h4 style="margin-top: 1rem; color: #dc2626;">- Mike R.</h4>
                </div>
                
                <div class="feature-card">
                    <div style="color: #fbbf24; font-size: 1.5rem; margin-bottom: 1rem;">⭐⭐⭐⭐⭐</div>
                    <p>"Fair pricing and incredible results. Will definitely use their services again!"</p>
                    <h4 style="margin-top: 1rem; color: #dc2626;">- Jennifer L.</h4>
                </div>
            </div>
        </div>
    </div>

    ${getFooter()}
</body>
</html>
    `);
  }
  
  // Contact Page
  else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Sea Street Detailing</title>
    ${getStyles()}
</head>
<body>
    ${getHeader()}
    
    <div class="page-content">
        <div class="container">
            <div class="page-title">
                <h1>Contact Us</h1>
                <p>Ready to book your detailing service? Get in touch for a free quote!</p>
            </div>
            
            <!-- Contact Form Section -->
            <div class="contact-container">
                <div class="contact-form-section">
                    <h2>Get Your Free Quote</h2>
                    <form id="contactForm" class="contact-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="firstName">First Name *</label>
                                <input type="text" id="firstName" name="firstName" required>
                                <span class="error-message" id="firstNameError"></span>
                            </div>
                            <div class="form-group">
                                <label for="lastName">Last Name *</label>
                                <input type="text" id="lastName" name="lastName" required>
                                <span class="error-message" id="lastNameError"></span>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone">Phone Number *</label>
                                <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" required>
                                <span class="error-message" id="phoneError"></span>
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address *</label>
                                <input type="email" id="email" name="email" required>
                                <span class="error-message" id="emailError"></span>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="address">Service Address *</label>
                            <input type="text" id="address" name="address" placeholder="Where should we come to detail your vehicle?" required>
                            <span class="error-message" id="addressError"></span>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="serviceType">Service Needed *</label>
                                <select id="serviceType" name="serviceType" required>
                                    <option value="">Select a service...</option>
                                    <option value="basic">Basic Wash - $49</option>
                                    <option value="premium">Premium Detail - $129</option>
                                    <option value="luxury">Luxury Package - $199</option>
                                    <option value="custom">Custom Quote</option>
                                </select>
                                <span class="error-message" id="serviceTypeError"></span>
                            </div>
                            <div class="form-group">
                                <label for="vehicleType">Vehicle Type *</label>
                                <select id="vehicleType" name="vehicleType" required>
                                    <option value="">Select vehicle type...</option>
                                    <option value="sedan">Sedan/Coupe</option>
                                    <option value="suv">SUV/Crossover</option>
                                    <option value="truck">Pickup Truck</option>
                                    <option value="van">Van/Minivan</option>
                                    <option value="luxury">Luxury Vehicle</option>
                                    <option value="other">Other</option>
                                </select>
                                <span class="error-message" id="vehicleTypeError"></span>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="preferredDate">Preferred Date</label>
                            <input type="date" id="preferredDate" name="preferredDate">
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Additional Details</label>
                            <textarea id="message" name="message" rows="4" placeholder="Tell us about your vehicle's condition, any special requests, or questions..."></textarea>
                        </div>
                        
                        <div class="form-group checkbox-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="textReminders" name="textReminders">
                                <span class="checkmark"></span>
                                Send me text reminders about my appointment
                            </label>
                        </div>
                        
                        <button type="submit" class="btn-primary form-submit">
                            📞 Send My Quote Request
                        </button>
                        
                        <div id="formMessage" class="form-message"></div>
                    </form>
                </div>
                
                <!-- Contact Info Section -->
                <div class="contact-info-section">
                    <div class="contact-card">
                        <h3>📞 Call for Immediate Service</h3>
                        <p class="contact-large">(555) 626-9810</p>
                        <p>Monday - Saturday: 8:00 AM - 6:00 PM<br>Sunday: 9:00 AM - 4:00 PM</p>
                        <a href="tel:+15556269810" class="btn-secondary">Call Now</a>
                    </div>
                    
                    <div class="contact-card">
                        <h3>✉️ Email Us</h3>
                        <p class="contact-large">info@seastreedetailing.com</p>
                        <p>We respond to all inquiries within 24 hours</p>
                    </div>
                    
                    <div class="contact-card">
                        <h3>📍 Service Area</h3>
                        <p class="contact-large">25 Mile Radius</p>
                        <p>Mobile detailing service - we bring everything needed to your location</p>
                    </div>
                    
                    <div class="contact-card highlights">
                        <h3>⚡ Why Choose Us?</h3>
                        <ul class="benefits-list">
                            <li>✓ Free on-site quotes</li>
                            <li>✓ Same-day service available</li>
                            <li>✓ 100% satisfaction guarantee</li>
                            <li>✓ Fully insured & licensed</li>
                            <li>✓ Eco-friendly products</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    ${getFooter()}

    <script>
        // Form validation and submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Clear previous error messages
            clearErrors();
            
            let isValid = true;
            
            // Validate required fields
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const address = document.getElementById('address').value.trim();
            const serviceType = document.getElementById('serviceType').value;
            const vehicleType = document.getElementById('vehicleType').value;
            
            // First Name validation
            if (!firstName) {
                showError('firstNameError', 'First name is required');
                isValid = false;
            } else if (firstName.length < 2) {
                showError('firstNameError', 'First name must be at least 2 characters');
                isValid = false;
            }
            
            // Last Name validation
            if (!lastName) {
                showError('lastNameError', 'Last name is required');
                isValid = false;
            } else if (lastName.length < 2) {
                showError('lastNameError', 'Last name must be at least 2 characters');
                isValid = false;
            }
            
            // Phone validation
            if (!phone) {
                showError('phoneError', 'Phone number is required');
                isValid = false;
            } else if (!isValidPhone(phone)) {
                showError('phoneError', 'Please enter a valid phone number');
                isValid = false;
            }
            
            // Email validation
            if (!email) {
                showError('emailError', 'Email address is required');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('emailError', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Address validation
            if (!address) {
                showError('addressError', 'Service address is required');
                isValid = false;
            } else if (address.length < 10) {
                showError('addressError', 'Please provide a complete address');
                isValid = false;
            }
            
            // Service Type validation
            if (!serviceType) {
                showError('serviceTypeError', 'Please select a service');
                isValid = false;
            }
            
            // Vehicle Type validation
            if (!vehicleType) {
                showError('vehicleTypeError', 'Please select your vehicle type');
                isValid = false;
            }
            
            if (isValid) {
                // Show success message
                showFormMessage('success', '✅ Thank you! Your quote request has been submitted. We\\'ll contact you within 24 hours.');
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    document.getElementById('contactForm').reset();
                    hideFormMessage();
                }, 3000);
            } else {
                showFormMessage('error', '❌ Please fix the errors above and try again.');
            }
        });
        
        // Helper functions
        function showError(elementId, message) {
            document.getElementById(elementId).textContent = message;
        }
        
        function clearErrors() {
            const errorElements = document.querySelectorAll('.error-message');
            errorElements.forEach(element => {
                element.textContent = '';
            });
        }
        
        function showFormMessage(type, message) {
            const messageElement = document.getElementById('formMessage');
            messageElement.className = 'form-message ' + type;
            messageElement.textContent = message;
        }
        
        function hideFormMessage() {
            document.getElementById('formMessage').className = 'form-message';
        }
        
        function isValidEmail(email) {
            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            return emailRegex.test(email);
        }
        
        function isValidPhone(phone) {
            // Remove all non-digits
            const digits = phone.replace(/\\D/g, '');
            // US phone numbers should have 10 digits
            return digits.length === 10 || digits.length === 11;
        }
        
        // Auto-format phone number as user types
        document.getElementById('phone').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\\D/g, '');
            if (value.length >= 6) {
                value = '(' + value.slice(0,3) + ') ' + value.slice(3,6) + '-' + value.slice(6,10);
            } else if (value.length >= 3) {
                value = '(' + value.slice(0,3) + ') ' + value.slice(3);
            }
            e.target.value = value;
        });
        
        // Set minimum date for preferred date (today)
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('preferredDate').setAttribute('min', today);
    </script>
</body>
</html>
    `);
  }
  
  // Book Page
  else if (url === '/book') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Service - Sea Street Detailing</title>
    ${getStyles()}
</head>
<body>
    ${getHeader()}
    
    <div class="page-content">
        <div class="container">
            <div class="page-title">
                <h1>Book Your Service</h1>
                <p>Schedule your professional auto detailing appointment in just a few steps</p>
            </div>
            
            <!-- Booking Progress Steps -->
            <div class="booking-progress">
                <div class="step active" data-step="1">
                    <div class="step-number">1</div>
                    <span>Select Service</span>
                </div>
                <div class="step" data-step="2">
                    <div class="step-number">2</div>
                    <span>Vehicle Info</span>
                </div>
                <div class="step" data-step="3">
                    <div class="step-number">3</div>
                    <span>Schedule</span>
                </div>
                <div class="step" data-step="4">
                    <div class="step-number">4</div>
                    <span>Confirm</span>
                </div>
            </div>
            
            <!-- Booking Form Container -->
            <div class="booking-container">
                
                <!-- Step 1: Service Selection -->
                <div class="booking-step active" id="step1">
                    <h2>Choose Your Service Package</h2>
                    <p class="step-description">Select the detailing service that best fits your needs</p>
                    
                    <div class="service-options">
                        <div class="service-option" data-service="basic" data-price="49">
                            <div class="service-header">
                                <h3>Basic Wash</h3>
                                <div class="price">$49</div>
                            </div>
                            <ul class="service-features">
                                <li>✓ Exterior hand wash</li>
                                <li>✓ Wheel & tire cleaning</li>
                                <li>✓ Window cleaning</li>
                                <li>✓ Quick interior vacuum</li>
                                <li>✓ Dashboard wipe-down</li>
                            </ul>
                            <div class="service-duration">⏱️ 45-60 minutes</div>
                            <button class="select-service-btn">Select Basic Wash</button>
                        </div>
                        
                        <div class="service-option featured" data-service="premium" data-price="129">
                            <div class="popular-badge">Most Popular</div>
                            <div class="service-header">
                                <h3>Premium Detail</h3>
                                <div class="price">$129</div>
                            </div>
                            <ul class="service-features">
                                <li>✓ Everything in Basic Wash</li>
                                <li>✓ Clay bar treatment</li>
                                <li>✓ Premium wax application</li>
                                <li>✓ Interior deep cleaning</li>
                                <li>✓ Leather conditioning</li>
                                <li>✓ Carpet & upholstery cleaning</li>
                            </ul>
                            <div class="service-duration">⏱️ 2-3 hours</div>
                            <button class="select-service-btn">Select Premium Detail</button>
                        </div>
                        
                        <div class="service-option" data-service="luxury" data-price="199">
                            <div class="service-header">
                                <h3>Luxury Package</h3>
                                <div class="price">$199</div>
                            </div>
                            <ul class="service-features">
                                <li>✓ Everything in Premium Detail</li>
                                <li>✓ Paint correction (1-step)</li>
                                <li>✓ Ceramic coating application</li>
                                <li>✓ Headlight restoration</li>
                                <li>✓ Interior protection treatment</li>
                                <li>✓ 90-day protection guarantee</li>
                            </ul>
                            <div class="service-duration">⏱️ 4-5 hours</div>
                            <button class="select-service-btn">Select Luxury Package</button>
                        </div>
                    </div>
                    
                    <!-- Add-Ons Section -->
                    <div class="addons-section">
                        <h3>Optional Add-Ons</h3>
                        <div class="addon-options">
                            <label class="addon-checkbox">
                                <input type="checkbox" data-addon="headlight" data-price="35">
                                <span class="checkmark"></span>
                                <div class="addon-info">
                                    <span class="addon-name">Headlight Restoration</span>
                                    <span class="addon-price">+$35</span>
                                </div>
                            </label>
                            
                            <label class="addon-checkbox">
                                <input type="checkbox" data-addon="engine" data-price="40">
                                <span class="checkmark"></span>
                                <div class="addon-info">
                                    <span class="addon-name">Engine Bay Detail</span>
                                    <span class="addon-price">+$40</span>
                                </div>
                            </label>
                            
                            <label class="addon-checkbox">
                                <input type="checkbox" data-addon="pethair" data-price="25">
                                <span class="checkmark"></span>
                                <div class="addon-info">
                                    <span class="addon-name">Pet Hair Removal</span>
                                    <span class="addon-price">+$25</span>
                                </div>
                            </label>
                            
                            <label class="addon-checkbox">
                                <input type="checkbox" data-addon="odor" data-price="30">
                                <span class="checkmark"></span>
                                <div class="addon-info">
                                    <span class="addon-name">Odor Elimination</span>
                                    <span class="addon-price">+$30</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    
                    <!-- Total & Continue -->
                    <div class="booking-summary">
                        <div class="total-section">
                            <div class="total-line">
                                <span>Selected Service:</span>
                                <span id="selectedServiceName">Please select a service</span>
                            </div>
                            <div class="total-line">
                                <span>Add-ons:</span>
                                <span id="addonsTotal">$0</span>
                            </div>
                            <div class="total-line final">
                                <span>Total:</span>
                                <span id="grandTotal">$0</span>
                            </div>
                        </div>
                        <button class="btn-primary continue-btn" id="continueStep1" disabled>Continue to Vehicle Info</button>
                    </div>
                </div>
                
                <!-- Steps 2-4 Placeholders (for future implementation) -->
                <div class="booking-step" id="step2">
                    <h2>Vehicle Information</h2>
                    <p class="step-description">Coming soon - vehicle details form</p>
                </div>
                
                <div class="booking-step" id="step3">
                    <h2>Schedule Appointment</h2>
                    <p class="step-description">Coming soon - date/time selection</p>
                </div>
                
                <div class="booking-step" id="step4">
                    <h2>Confirm Booking</h2>
                    <p class="step-description">Coming soon - final confirmation</p>
                </div>
            </div>
            
            <!-- Emergency Contact -->
            <div class="emergency-contact">
                <div class="contact-card">
                    <h3>Need Help or Have Questions?</h3>
                    <p>Our team is standing by to help you with your booking</p>
                    <a href="tel:+15556269810" class="btn-secondary">Call (555) 626-9810</a>
                </div>
            </div>
        </div>
    </div>

    ${getFooter()}

    <script>
        // Booking form functionality
        document.addEventListener('DOMContentLoaded', function() {
            let selectedService = null;
            let servicePrice = 0;
            let addonsTotal = 0;
            
            const serviceOptions = document.querySelectorAll('.service-option');
            const addonCheckboxes = document.querySelectorAll('.addon-checkbox input[type="checkbox"]');
            const continueBtn = document.getElementById('continueStep1');
            
            // Service selection functionality
            serviceOptions.forEach(option => {
                const selectBtn = option.querySelector('.select-service-btn');
                
                selectBtn.addEventListener('click', function() {
                    // Remove previous selections
                    serviceOptions.forEach(opt => opt.classList.remove('selected'));
                    
                    // Select current option
                    option.classList.add('selected');
                    
                    // Store selection data
                    selectedService = option.getAttribute('data-service');
                    servicePrice = parseInt(option.getAttribute('data-price'));
                    
                    // Update service name
                    const serviceName = option.querySelector('h3').textContent;
                    document.getElementById('selectedServiceName').textContent = serviceName + ' - $' + servicePrice;
                    
                    // Update button text
                    selectBtn.textContent = '✓ Selected';
                    
                    // Enable continue button
                    continueBtn.disabled = false;
                    
                    updateTotal();
                });
            });
            
            // Add-ons functionality
            addonCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    calculateAddons();
                    updateTotal();
                });
            });
            
            function calculateAddons() {
                addonsTotal = 0;
                const checkedAddons = document.querySelectorAll('.addon-checkbox input[type="checkbox"]:checked');
                
                checkedAddons.forEach(addon => {
                    addonsTotal += parseInt(addon.getAttribute('data-price'));
                });
                
                document.getElementById('addonsTotal').textContent = '$' + addonsTotal;
            }
            
            function updateTotal() {
                const grandTotal = servicePrice + addonsTotal;
                document.getElementById('grandTotal').textContent = '$' + grandTotal;
            }
            
            // Continue button functionality (placeholder for future steps)
            continueBtn.addEventListener('click', function() {
                if (selectedService) {
                    // For now, show alert with selection summary
                    const checkedAddons = document.querySelectorAll('.addon-checkbox input[type="checkbox"]:checked');
                    let addonsList = [];
                    
                    checkedAddons.forEach(addon => {
                        const addonName = addon.closest('.addon-checkbox').querySelector('.addon-name').textContent;
                        addonsList.push(addonName);
                    });
                    
                    const serviceName = document.getElementById('selectedServiceName').textContent;
                    const total = document.getElementById('grandTotal').textContent;
                    
                    let message = 'Booking Summary:\\n\\n';
                    message += 'Service: ' + serviceName + '\\n';
                    if (addonsList.length > 0) {
                        message += 'Add-ons: ' + addonsList.join(', ') + '\\n';
                    }
                    message += 'Total: ' + total + '\\n\\n';
                    message += 'Next steps (Vehicle Info, Scheduling, etc.) coming soon!\\n\\n';
                    message += 'For now, please call (555) 626-9810 to complete your booking.';
                    
                    alert(message);
                }
            });
            
            // Add hover effects for service options
            serviceOptions.forEach(option => {
                option.addEventListener('mouseenter', function() {
                    if (!option.classList.contains('selected')) {
                        option.style.transform = 'translateY(-3px)';
                        option.style.boxShadow = '0 8px 25px rgba(220, 38, 38, 0.15)';
                    }
                });
                
                option.addEventListener('mouseleave', function() {
                    if (!option.classList.contains('selected')) {
                        option.style.transform = 'translateY(0)';
                        option.style.boxShadow = '';
                    }
                });
            });
            
            // Initialize totals
            calculateAddons();
            updateTotal();
        });
    </script>
</body>
</html>
    `);
  }
  
  // 404 Page
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found - Sea Street Detailing</title>
    ${getStyles()}
</head>
<body>
    ${getHeader()}
    
    <div class="page-content">
        <div class="container">
            <div style="text-align: center; padding: 4rem 0;">
                <h1 style="font-size: 4rem; color: #dc2626;">404</h1>
                <h2>Page Not Found</h2>
                <p style="margin: 2rem 0; font-size: 1.2rem; color: #64748b;">The page you're looking for doesn't exist.</p>
                <a href="/" class="btn-primary">Go Home</a>
            </div>
        </div>
    </div>

    ${getFooter()}
</body>
</html>
    `);
  }
});

const PORT = 3012;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Sea Street Detailing Complete Website running at http://localhost:${PORT}`);
});