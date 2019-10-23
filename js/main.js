function openSlideMenu() {
    document.getElementById('side-menu').style.width = '100vw';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
}



/* ===================================================================
            Hamburger Toggler Animation
=================================================================== */

const hamburgerBtn = document.querySelector('.menu-btn');
// const hamburgerToggler = document.querySelector('.hamburger-toggler');
let menuOpen = false;

hamburgerBtn.addEventListener('click', () => {
    if (!menuOpen) {
        hamburgerBtn.classList.add('open');
        // hamburgerToggler.classList.add('open');
        menuOpen = true;
    } else {
        hamburgerBtn.classList.remove('open');
        // hamburgerBtn.classList.remove('open');
        menuOpen = false;
    }
});