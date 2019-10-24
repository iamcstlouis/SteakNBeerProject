



/* ===================================================================
            Hamburger Toggler Animation
=================================================================== */

// const menuBtn = document.querySelector('.menu-btn');
// const hamburgerToggler = document.querySelector('.hamburger-toggler');
// const lineTop = document.querySelector('.line-top');
// const menu = document.querySelector('.menu');
// const lineBtm = document.querySelector('.line-btm');

const selectElement = (element) => document.querySelector(element);

selectElement('.hamburger-btn').addEventListener('click', () => {
    // selectElement('.menu-btn').classList.toggle('open');
    // selectElement('.hamburger-toggler').classList.toggle('open');
    selectElement('.mobile-menu').classList.toggle('open');
    selectElement('.line-top').classList.toggle('open');
    selectElement('.menu').classList.toggle('open');
    selectElement('.line-btm').classList.toggle('open');
});