const slider = () => {
    const button = document.querySelector('.mobile_nav');
    const links = document.querySelector('.mobile_nav_links');
    
    button.addEventListener('click', () => {
        links.classList.toggle('mobile-active');
    
    });
}
    slider();