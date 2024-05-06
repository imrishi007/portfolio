const header = document.querySelector(nav);
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  }
});
