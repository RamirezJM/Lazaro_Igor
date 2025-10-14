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



const privacyButton = document.querySelector('.privacy__btn')
privacyButton.addEventListener('click', openModal)

function openModal(){
  const modal = document.querySelector('#privacy-modal')
  modal.showModal()
  modal.scrollTop = 0 
  document.querySelector('.modal__title').focus()

}
