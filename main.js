


let btnToggle = document.querySelector('.nav-menu-toggle')
let icon = document.querySelector('.fa-bars');
let nav = document.querySelector('.nav');
let navLeft = document.querySelector('.nav-left');
let body = document.getElementsByTagName('body')[0];

let sidebar = document.querySelector('.sidebar');


btnToggle.onclick = function () {
  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-times')
    sidebar.classList.add('open')
    setTimeout(function () {
      sidebar.classList.add('animated')

    }, 20);
    body.style.overflowY = 'hidden'
    navLeft.style.display = 'none'
    nav.style.justifyContent = 'flex-end'
    nav.style.background = 'transparent'
  } else {
    icon.classList.replace('fa-times', 'fa-bars')
    sidebar.classList.remove('open')
    sidebar.classList.remove('animated')
    body.style.removeProperty('overflow-y')
    navLeft.style.removeProperty('display')
    nav.style.removeProperty('justify-content')
    nav.style.removeProperty('background')
  }
}

window.addEventListener('click', function (e) {
  if (sidebar.classList.contains('open')) {
    if (document.querySelector('.sidebar-items').contains(e.target) || document.querySelector('.nav').contains(e.target)) {
      // Clicked in box
    } else {
      // Clicked outside the box
      icon.classList.replace('fa-times', 'fa-bars')
      sidebar.classList.remove('open')
      sidebar.classList.remove('animated')
      body.style.removeProperty('overflow-y')
      navLeft.style.removeProperty('display')
      nav.style.removeProperty('justify-content')
      nav.style.removeProperty('background')
    }
  }

});