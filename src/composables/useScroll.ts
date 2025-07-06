export function useScroll() {
    function scrollToSection(sectionId: string) {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    return { scrollToSection }
  }
  