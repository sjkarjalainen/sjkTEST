// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// Simple Fade-in animation for sections
const sections = document.querySelectorAll('.fade-on-scroll');

sections.forEach(section => {
    gsap.fromTo(section, 
        { opacity: 0, y: 50 }, 
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%', // Triggers when top of section hits 80% viewport height
                toggleActions: 'play none none none' // Play once
            }
        }
    );
});
