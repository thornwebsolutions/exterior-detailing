(function() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-section">
                <a href="/" style="text-decoration: none;"><h4>Exterior Detailing</h4></a>
                <p>Premium exterior detailing and pressure washing services for residential and commercial properties.</p>
                <p>Licensed & Insured</p>
            </div>
            <div class="footer-section">
                <h4>Services</h4>
                <a href="/residential/">Roof Washing</a>
                <a href="/residential/">Paver Cleaning</a>
                <a href="/residential/">Home Soft Wash</a>
                <a href="/residential/">Pool Decks</a>
            </div>
            <div class="footer-section">
                <h4>Company</h4>
                <a href="/about/">About Us</a>
                <a href="/commercial/">Commercial</a>
                <a href="/residential/">Residential</a>
                <a href="/contact/">Contact</a>
            </div>
            <div class="footer-section">
                <h4>Contact</h4>
                <p>Phone: (555) 123-4567</p>
                <p>Email: alex@exteriordetailing.com</p>
                <p>Hours: Mon-Sat 7AM-7PM</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Exterior Detailing. All rights reserved.</p>
            <p class="footer-tagline">Sardina family owned & operated</p>
        </div>
    `;

    const footerPlaceholder = document.getElementById('footer');
    if (footerPlaceholder) {
        footerPlaceholder.replaceWith(footer);
    }
})();
