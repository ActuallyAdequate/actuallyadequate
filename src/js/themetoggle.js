
let currentTheme = localStorage.getItem('theme') ?? "light";
document.documentElement.setAttribute('data-theme', currentTheme);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}



const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
if(toggleSwitch) {
   
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
    toggleSwitch.addEventListener('change', switchTheme, false);
}

