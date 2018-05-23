console.log('App started!');

window.onscroll = () => {
    const navbar = document.querySelector("nav");
    const header = document.querySelector('header').offsetHeight;
    if (window.pageYOffset >= header) {
        navbar.classList.add("sticky-nav")
    } else {
        navbar.classList.remove("sticky-nav");
    }
};
