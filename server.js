const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Simple routing
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sea Street Detailing - Professional Auto Detailing Services</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; 
            margin: 0; padding: 0; line-height: 1.6; 
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .header { background: #2563eb; color: white; padding: 1rem 0; }
        .nav { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.5rem; font-weight: bold; }
        .nav-links { display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0; }
        .nav-links a { color: white; text-decoration: none; }
        .hero { text-align: center; padding: 4rem 0; background: #f8fafc; }
        .hero h1 { font-size: 3rem; margin-bottom: 1rem; color: #1e293b; }
        .hero p { font-size: 1.2rem; color: #64748b; margin-bottom: 2rem; }
        .btn { background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; }
        .btn:hover { background: #1d4ed8; }
        .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; padding: 4rem 0; }
        .feature { padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .footer { background: #1e293b; color: white; padding: 2rem 0; text-align: center; }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <nav class="nav">
                <div class="logo">Sea Street Detailing</div>
                <ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <a href="/book" class="btn">Book Now</a>
            </nav>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Professional Auto Detailing Services</h1>
                <p>Transform your vehicle with our premium detailing services. From thorough cleaning to protective treatments, we make your car look and feel like new.</p>
                <a href="/book" class="btn">Book Now</a>
                <a href="/services" style="margin-left: 1rem; color: #2563eb;">See Pricing →</a>
            </div>
        </section>

        <section class="container">
            <div class="features">
                <div class="feature">
                    <h3>Professional Equipment</h3>
                    <p>We use industry-grade tools and premium products to ensure the highest quality results.</p>
                </div>
                <div class="feature">
                    <h3>Convenient Scheduling</h3>
                    <p>Book online in minutes with our easy scheduling system and automated reminders.</p>
                </div>
                <div class="feature">
                    <h3>Satisfaction Guaranteed</h3>
                    <p>We stand behind our work with a 100% satisfaction guarantee on all services.</p>
                </div>
                <div class="feature">
                    <h3>Competitive Pricing</h3>
                    <p>Get premium detailing services at fair, transparent prices with no hidden fees.</p>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Sea Street Detailing. All rights reserved.</p>
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
<head><title>Services - Sea Street Detailing</title></head>
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

const PORT = 3010;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});