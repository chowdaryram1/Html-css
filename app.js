

function navSlide(){
    const nav=document.querySelector(".nav-bar")
    const menu=document.querySelector(".menu-links")
    const burger=document.querySelector(".lines")

    burger.addEventListener("click", ()=>{
        menu.classList.toggle("nav-active")
        burger.classList.add("toggle")
    })
}

navSlide();

document.addEventListener('DOMContentLoaded', function () {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});
