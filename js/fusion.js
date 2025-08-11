

const sectionObserver = new IntersectionObserver((section, observer) =>{
    section.forEach(side => {
        if(side.isIntersecting){
            side.target.style.transform = `scale(1)`
            observer.unobserve(side.target)
            
        }
    });
    
}, {
    rootMargin: "50px",
});


document.querySelectorAll('[data-action="action"]').forEach(section => sectionObserver.observe(section))