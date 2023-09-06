const nav_color = document.querySelector('.navBar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav_color.classList.add('active');
  }else{
    nav_color.classList.remove('active');

  }
});
