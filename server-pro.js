const http = require('http');

const server = http.createServer((req, res) => {
  // Handle different routes
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sea Street Detailing - Professional Mobile Auto Detailing Services</title>
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
        }
    </style>
</head>
<body>
    <!-- Header -->
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
                    
                    <button class="chat-btn">💬 Book Now</button>
                </nav>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Mobile Detailing!</h1>
                <p>Professional Results. At an Affordable Price.</p>
                
                <div class="hero-buttons">
                    <a href="/book" class="btn-primary">
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

    <!-- Footer -->
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
</body>
</html>
    `);
  } 
  else if (req.url === '/services') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html>
<head>
    <title>Services - Sea Street Detailing</title>
    <style>body{font-family:Arial,sans-serif;padding:2rem;}</style>
</head>
<body>
    <h1>Our Services</h1>
    <p><a href="/">← Back to Home</a></p>
    <p>Services page coming soon...</p>
</body>
</html>
    `);
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Page Not Found</h1><p><a href="/">Go Home</a></p>');
  }
});

const PORT = 3011;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Sea Street Detailing Server running at http://localhost:${PORT}`);
});