const menuButton = document.querySelector('.btn-menu')
const navMenu = document.querySelector('nav')

menuButton.addEventListener("click", () =>{
  navMenu.classList.toggle('active-nav')
  menuButton.classList.toggle('menu-abierto')
  menuButton.setAttribute('aria-expanded', navMenu.classList.contains('active-link'))
})

baguetteBox.run('.procesos-galeria', {
    buttons: true
  })

baguetteBox.run('.proyectos-galeria', {
    buttons: true
  })
