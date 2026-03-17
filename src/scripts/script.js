
//------------------------------------------------------------------Mobile burger
document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.querySelector('.mobile-menu');

    burgerBtn?.addEventListener('click', function() {
      const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
      
      // Toggle burger animation
      burgerBtn.classList.toggle('open');
      
      // Toggle menu visibility with smooth animation
      if (isExpanded) {
        // Close menu
        mobileMenu?.classList.remove('max-h-96');
        mobileMenu?.classList.add('max-h-0');
      } else {
        // Open menu
        mobileMenu?.classList.remove('max-h-0');
        mobileMenu?.classList.add('max-h-96');
      }
      
      // Update aria-expanded
      burgerBtn.setAttribute('aria-expanded', (!isExpanded).toString());
    });
  });