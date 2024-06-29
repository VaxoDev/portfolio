document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('show-animate');
    }
});

let sections = document.querySelectorAll('div');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (sec.classList.contains('hero')) {
            if (top <= offset + height) {
                sec.classList.add('show-animate');
            } else {
                sec.classList.remove('show-animate');
            }
        } else {
            if (top >= offset && top < offset + height) {
                sec.classList.add('show-animate');
            } else {
                sec.classList.remove('show-animate');
            }
        }
    });
}

window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}