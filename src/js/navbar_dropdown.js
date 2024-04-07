function toggleNav() {
    const navbarList = document.getElementById('navbar-list');
    navbarList.classList.toggle("active");
    navbarList.style.display = navbarList.classList.contains('active') ? 'flex' : 'none';
 
    const icon = document.querySelector('.navbar-toggle');
    icon.classList.toggle('active');
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