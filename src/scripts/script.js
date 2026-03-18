
//------------------------------------------------------------------Mobile burger
document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const tradesDropdownBtn = document.getElementById('tradesDropdownBtn');
  const tradesDropdown = document.getElementById('tradesDropdown');
  const tradesDropdownIcon = document.getElementById('tradesDropdownIcon');

  function updateMenuHeight() {
    if (!mobileMenu) return;
    const isExpanded = burgerBtn?.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      const menuContent = mobileMenu.querySelector('div');
      mobileMenu.style.maxHeight = menuContent.scrollHeight + 'px';
    } else {
      mobileMenu.style.maxHeight = '0px';
    }
  }

  burgerBtn?.addEventListener('click', function () {
    const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';

    // Toggle burger animation
    burgerBtn.classList.toggle('open');

    // Update aria-expanded
    burgerBtn.setAttribute('aria-expanded', (!isExpanded).toString());

    // Update menu height
    updateMenuHeight();
  });

  // Trades dropdown toggle
  tradesDropdownBtn?.addEventListener('click', function () {
    const isExpanded = tradesDropdownBtn.getAttribute('aria-expanded') === 'true';
    tradesDropdownBtn.setAttribute('aria-expanded', (!isExpanded).toString());
    tradesDropdown?.classList.toggle('hidden');
    tradesDropdownIcon?.classList.toggle('rotate-180');

    // Update menu height when dropdown changes
    updateMenuHeight();
  });

  // Close menu when a link is clicked
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-item[href]');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function () {
      burgerBtn?.setAttribute('aria-expanded', 'false');
      burgerBtn?.classList.remove('open');
      mobileMenu?.style.maxHeight = '0px';
      tradesDropdown?.classList.add('hidden');
      tradesDropdownBtn?.setAttribute('aria-expanded', 'false');
      tradesDropdownIcon?.classList.remove('rotate-180');
    });
  });
});