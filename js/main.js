/* ===================================================================
            Hamburger Toggler Animation
=================================================================== */

const selectElement = (element) => document.querySelector(element);

selectElement('.hamburger-btn').addEventListener('click', () => {
    selectElement('.hamburger-toggler').classList.toggle('open');
    selectElement('.mobile-menu').classList.toggle('open');
    selectElement('.line-top').classList.toggle('open');
    selectElement('.menu').classList.toggle('open');
    selectElement('.line-btm').classList.toggle('open');
});