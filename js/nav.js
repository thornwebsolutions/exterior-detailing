(function() {
    const navHTML = `
    <nav>
        <div class="nav-container">
            <a href="/" class="logo">
                <img src="/assets/logo.png" alt="A. Sandino Exterior Detailing" class="logo-img">
            </a>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/commercial/">Commercial</a></li>
                <li><a href="/residential/">Residential</a></li>
                <li><a href="/about/">About Us</a></li>
                <li><a href="/contact/">Contact</a></li>
            </ul>
            <a href="/contact/" class="cta-button">Get Free Quote</a>
            <div class="hamburger" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
        <a href="/">Home</a>
        <a href="/commercial/">Commercial</a>
        <a href="/residential/">Residential</a>
        <a href="/about/">About Us</a>
        <a href="/contact/">Contact</a>
        <a href="/contact/" style="color: #00CED1; border: none; margin-top: 1rem;">Get Free Quote</a>
    </div>
    `;

    const navPlaceholder = document.getElementById('nav');
    if (navPlaceholder) {
        navPlaceholder.outerHTML = navHTML;
    }

    // Toggle mobile menu
    window.toggleMenu = function() {
        document.querySelector('.hamburger').classList.toggle('active');
        document.getElementById('mobileMenu').classList.toggle('active');
    };
})();
