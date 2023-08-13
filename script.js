function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");   
}

const toggleElements = document.querySelectorAll('.toggle');

toggleElements.forEach(toggleElement => {
    const container = toggleElement.closest('.details-container');
    const content = container.querySelector('.content');
    
    // Hide content by default
    content.style.display = 'none';
    container.style.height = '30px';

    toggleElement.addEventListener('click', () => {
        toggleElement.classList.toggle('active');
        content.style.display = toggleElement.classList.contains('active') ? 'block' : 'none';
        container.style.height = toggleElement.classList.contains('active') ? (content.scrollHeight + 30) + 'px' : '30px';
    });
});



