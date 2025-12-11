document.addEventListener("DOMContentLoaded", (event) => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Animation (Text Fade In)
    const tl = gsap.timeline();
    tl.to(".hero-content", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out"
    });

    // 2. Hero Parallax (Moves image slower than scroll)
    gsap.to(".hero-portrait", {
        yPercent: 15, // Move image down by 15% as we scroll
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // 3. Tractor Rotation Simulation
    gsap.to(".tractor-3d", {
        rotateY: 40,
        scale: 1.1,
        scrollTrigger: {
            trigger: ".tractor-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        }
    });

    // 4. General Fade Up for Sections
    // Select all elements with class 'gsap-fade-up'
    const fadeElements = document.querySelectorAll(".gsap-fade-up");
    
    fadeElements.forEach(el => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%", // Trigger when top of element is at 85% of viewport
                toggleActions: "play none none reverse"
            }
        });
    });

    // 5. Awards Wall Stagger Animation
    gsap.from(".award-block", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".awards-wall",
            start: "top 80%"
        }
    });
});
