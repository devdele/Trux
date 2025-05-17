// Animation on scroll utility
export function initAOS() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement
        const animation = element.dataset.aos
        const delay = element.dataset.aosDelay || "0"

        setTimeout(() => {
          if (animation === "fade-up") {
            element.style.opacity = "1"
            element.style.transform = "translateY(0)"
          } else if (animation === "fade-down") {
            element.style.opacity = "1"
            element.style.transform = "translateY(0)"
          } else if (animation === "fade-left") {
            element.style.opacity = "1"
            element.style.transform = "translateX(0)"
          } else if (animation === "fade-right") {
            element.style.opacity = "1"
            element.style.transform = "translateX(0)"
          } else if (animation === "zoom-in") {
            element.style.opacity = "1"
            element.style.transform = "scale(1)"
          }

          observer.unobserve(element)
        }, Number.parseInt(delay))
      }
    })
  }, observerOptions)

  // Initialize elements with data-aos attribute
  setTimeout(() => {
    document.querySelectorAll("[data-aos]").forEach((element) => {
      const animation = element.getAttribute("data-aos")

      if (animation === "fade-up") {
        ;(element as HTMLElement).style.opacity = "0"
        ;(element as HTMLElement).style.transform = "translateY(50px)"
      } else if (animation === "fade-down") {
        ;(element as HTMLElement).style.opacity = "0"
        ;(element as HTMLElement).style.transform = "translateY(-50px)"
      } else if (animation === "fade-left") {
        ;(element as HTMLElement).style.opacity = "0"
        ;(element as HTMLElement).style.transform = "translateX(50px)"
      } else if (animation === "fade-right") {
        ;(element as HTMLElement).style.opacity = "0"
        ;(element as HTMLElement).style.transform = "translateX(-50px)"
      } else if (animation === "zoom-in") {
        ;(element as HTMLElement).style.opacity = "0"
        ;(element as HTMLElement).style.transform = "scale(0.9)"
      }
      ;(element as HTMLElement).style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(element)
    })
  }, 100)
}
