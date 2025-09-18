const menuButton = document.querySelector('.btn-menu')
const navMenu = document.querySelector('nav')
const navLinks = navMenu.querySelectorAll('a')

menuButton.addEventListener("click", () =>{
  navMenu.classList.toggle('active-nav')
  menuButton.classList.toggle('menu-abierto')
  menuButton.setAttribute('aria-expanded', navMenu.classList.contains('active-link'))
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active-nav')
    menuButton.classList.remove('menu-abierto')
    menuButton.setAttribute('aria-expanded', 'false')
  })
})
if (typeof baguetteBox !== 'undefined') {
  baguetteBox.run('.productos', {
    buttons: true
  });
}


if (typeof baguetteBox !== 'undefined') {
  baguetteBox.run('.proyectos-galeria', {
    buttons: true
  });
}
if (typeof baguetteBox !== 'undefined') {
  baguetteBox.run('.procesos-galeria', {
    buttons: true
  });
}