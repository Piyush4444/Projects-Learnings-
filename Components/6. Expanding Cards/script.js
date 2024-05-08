const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeEventListenerActiveClasses();
        panel.classList.add('active');
    });
});


function removeEventListenerActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}