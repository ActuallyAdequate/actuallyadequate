function toggleNav() {
    const navbarList = document.getElementById('navbar-list');
    navbarList.classList.toggle("active");
    navbarList.style.display = navbarList.classList.contains('active') ? 'flex' : 'none';
    

    const navbarToggle = document.getElementById('navbar-toggle');
    navbarToggle.classList.toggle('active');
    navbarToggle.setAttribute("hx-get", (navbarToggle.classList.contains('active') ? 'https://actuallyadequate.com/src/assets/close.svg' : 'https://actuallyadequate.com/src/assets/hamburger_menu.svg'));
    htmx.process("#navbar-toggle");
    htmx.trigger("#navbar-toggle", 'load');
}

window.addEventListener("resize", (event) => {
    const navbarList = document.getElementById('navbar-list');
    const icon = document.querySelector('.navbar-toggle');
    icon.classList.remove('active');
    navbarList.classList.remove('active');
    if(window.innerWidth >= 768 ) { 
        navbarList.style.display = 'flex';
    } else {
        navbarList.style.display = 'none';
    }
});