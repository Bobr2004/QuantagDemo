window.addEventListener('scroll',()=> {
    let current_scroll = window.scrollY;
    console.log(current_scroll);
    if (current_scroll > 15) {
        document.querySelector(".header").classList.add("active-header");
    }
    else {
        document.querySelector(".header").classList.remove("active-header");
    }
})