import Lenis from 'lenis'

let lenisInstance: Lenis | null = null

/**
 * Initialize Lenis smooth scroll
 */
export function initLenis() {
  if (typeof window === 'undefined') return

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  })

  function raf(time: number) {
    lenisInstance?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

/**
 * Get Lenis instance
 */
export function getLenis(): Lenis | null {
  return lenisInstance
}

/**
 * Stop Lenis smooth scroll
 */
export function stopLenis() {
  lenisInstance?.stop()
}

/**
 * Start Lenis smooth scroll
 */
export function startLenis() {
  lenisInstance?.start()
}

/**
 * Scroll to specific element
 */
export function scrollToElement(
  selector: string,
  options: { offset?: number; behavior?: 'smooth' | 'auto' } = {}
) {
  const element = document.querySelector(selector)
  if (!element) return

  const offset = options.offset || 0
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: options.behavior || 'smooth',
  })
}
