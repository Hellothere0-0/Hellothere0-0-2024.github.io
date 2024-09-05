const element = document.getElementById('Home1');

// Trigger animation when mouse enters
element.addEventListener('mouseover', () => {
    element.classList.add('animated');
});

// Remove the class after the animation finishes
element.addEventListener('animationend', () => {
    element.classList.remove('animated');
});