const navEnhancements = () => {
  const dropdown = document.querySelector('.dropdown');
  const navLinksContainer = document.querySelector('.nav-link');
  const navLinks = document.querySelectorAll('.nav-link li');
  const navBar = document.querySelector('nav');

  if (dropdown && navLinksContainer) {
    dropdown.addEventListener('click', () => {
      // Toggle mobile menu
      navLinksContainer.classList.toggle('nav-active');

      // Links animation
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });

      // Hamburger animation
      dropdown.classList.toggle('toggle');
    });
  }

  // Add scrolled class for shadow/opaque background
  const onScroll = () => {
    if (!navBar) return;
    if (window.scrollY > 8) {
      navBar.classList.add('scrolled');
    } else {
      navBar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // initialize on load
};

navEnhancements();
