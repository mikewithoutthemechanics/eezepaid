import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Initialize smooth scroll animations
 */
export function initScrollAnimations() {
  // Hero section animation
  gsap.from('.hero-title', {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
  })

  gsap.from('.hero-subtitle', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out',
  })

  gsap.from('.hero-cta', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.6,
    ease: 'power3.out',
  })
}

/**
 * Parallax effect for sections
 */
export function initParallax() {
  gsap.utils.toArray<HTMLElement>('.parallax-section').forEach((section) => {
    const image = section.querySelector('.parallax-image')
    
    if (image) {
      gsap.to(image, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  })
}

/**
 * Reveal animations on scroll
 */
export function initRevealAnimations() {
  gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
    gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })
  })
}

/**
 * Stagger animation for lists
 */
export function initStaggerAnimations() {
  gsap.utils.toArray<HTMLElement>('.stagger-list').forEach((list) => {
    const items = list.querySelectorAll('.stagger-item')
    
    gsap.from(items, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: list,
        start: 'top 80%',
      },
    })
  })
}

/**
 * Initialize all animations
 */
export function initAllAnimations() {
  initScrollAnimations()
  initParallax()
  initRevealAnimations()
  initStaggerAnimations()
}
