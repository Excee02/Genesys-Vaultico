const hamburgerOpen = document.getElementById("hamburger-open");
const hamburgerClose = document.getElementById("hamburger-close");
const navMobile = document.querySelector(".nav-mobile")

hamburgerOpen.addEventListener('click', () => {
    if(navMobile.style.display === 'none'){
        navMobile.style.display = 'block';
        hamburgerOpen.style.display = 'none';
        hamburgerClose.style.display = 'block';
    } else {
        navMobile.style.display = 'none';
        hamburgerOpen.style.display = 'block';
        hamburgerClose.style.display = 'none';
    }
});

hamburgerClose.addEventListener('click', () => {
    if(navMobile.style.display === 'block'){
        navMobile.style.display = 'none';
        hamburgerOpen.style.display = 'block';
        hamburgerClose.style.display = 'none';
    }
});



// toggle