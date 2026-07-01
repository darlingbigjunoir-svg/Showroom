document.addEventListener('DOMContentLoaded', function () {

  /* ============ MOBILE MENU TOGGLE ============ */
  var menuToggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
    });
  }
navLinks.classList.toggle('is-open');
  /* ============ HERO CAROUSEL (prev/next + dots) ============ */
  var prevBtn = document.querySelector('.hero-nav-btn.prev');
  var nextBtn = document.querySelector('.hero-nav-btn.next');
  var dots = document.querySelectorAll('.dots .dot');
  var countEl = document.querySelector('.dots .count');
  var total = dots.length || 8;
  var current = 3; // matches the initially-active dot (4th of 8)

  function renderSlide() {
    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === current);
    });
    if (countEl) {
      countEl.textContent = (current + 1) + '/' + total;
    }
  }

  function goTo(index) {
    current = (index + total) % total;
    renderSlide();
  }

  if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { goTo(i); });
  });

  /* ============ COMPARE TABS ("How a Dynava Auto stacks up") ============ */
  var compareTabs = document.querySelectorAll('.compare-tab');
  compareTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      compareTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
    });
  });

  /* ============ COMPARE LEGEND (Silverado / Maverick / SR5) ============ */
  var legendItems = document.querySelectorAll('.compare-legend span');
  legendItems.forEach(function (item) {
    item.addEventListener('click', function () {
      legendItems.forEach(function (i) { i.classList.remove('on'); });
      item.classList.add('on');
    });
  });

});