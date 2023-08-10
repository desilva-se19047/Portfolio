function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");   
}

const toggleElements = document.querySelectorAll('.toggle');

toggleElements.forEach(toggleElement => {
    toggleElement.addEventListener('click', () => {
        toggleElement.classList.toggle('active');
        const container = toggleElement.closest('.details-container');
        const content = container.querySelector('.content');
        container.style.height = toggleElement.classList.contains('active') ? (content.scrollHeight + 30) + 'px' : '30px';
    });
});