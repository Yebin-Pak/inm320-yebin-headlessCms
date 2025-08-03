
// HEADER

let headerContent = `
            <!-- side nav bar -->
            <aside id="side-bar" class="d-flex">
                <a href="/" id="logo" class="mb-3 mb-md-0 text-decoration-none">
                    <svg class="bi" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#3751FF"/>
                        <path d="M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z" fill="url(#paint0_linear_584_285)"/>
                        <defs>
                            <linearGradient id="paint0_linear_584_285" x1="11" y1="9" x2="23" y2="23" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.7"/>
                                <stop offset="1" stop-color="white"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <span>Dashboard Kit</span>
                </a>
                <ul class="nav"></ul>
            </aside>

            <!-- nav bar -->
            <nav class="navbar d-flex justify-content-between">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Overview</a>
                </div>
            
                <ul class="nav navbar-nav d-flex flex-row align-items-center">
                    <li>
                        <a href="#">
                            <i class="fa-solid fa-magnifying-glass me-4"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="notification">
                            <i class="fa-solid fa-bell"></i>
                            <i class="fa-solid fa-circle"></i>
                        </a>
                    </li>

                    <div class="vl"></div>

                    <li id="account">
                        <a href="#" class="d-flex flex-row align-items-center text-decoration-none">
                            <span id="user-name" class="me-3">Jones Ferdinand</span>
                            <picture class="d-flex justify-content-center align-items-center">
                                <img src="./assets/images/account-image.png" alt="user profile image">
                            </picture>
                        </a>
                    </li>
                </ul>
            </nav>
`;

let siteHeader = document.getElementById("site-header");

siteHeader.innerHTML = headerContent;


// nav-link active
window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';

            // Get all sidebar nav links
            const navLinks = document.querySelectorAll('#side-bar .nav-link');

            navLinks.forEach(link => {
                const href = link.getAttribute('href');

                // Normalize: handle "./tickets.html" vs "tickets.html"
                const normalizedHref = href.replace('./', '');

                if (normalizedHref === currentPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }, 0);
    });