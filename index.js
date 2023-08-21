// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listeners to toggle project descriptions
const projectDetails = document.querySelectorAll('.project');

projectDetails.forEach(project => {
    const projectToggle = project.querySelector('h2');
    const projectDescription = project.querySelector('p');

    projectToggle.addEventListener('click', () => {
        projectDescription.classList.toggle('show');
    });
});

// Animate skill bars on scroll
const skillSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.skill-bar');

function animateSkillBars() {
    const sectionTop = skillSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.8) {
        skillBars.forEach(skill => {
            const skillLevel = skill.getAttribute('data-level');
            skill.style.width = skillLevel + '%';
        });
    }
}

window.addEventListener('scroll', animateSkillBars);
