// SHOW MENU

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle','nav-menu')

// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL SECTIONS ACTIVE LINK

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

// CHANGE BACKGROUND HEADER

function scrollHeader(){
  const header = document.getElementById('header')
  if(this.scrollY >= 200) header.classList.add('scroll-header');else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// QUALIFICATION TABS

const tabs = document.querySelectorAll('[data-target');
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active')
    })

    target.classList.add('qualification__active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification__active')
    })

    tab.classList.add('qualification__active')
  })
});

// MODAL

// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

var modals = document.querySelectorAll(".modal")

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");


// When the user clicks the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

span4.onclick = function() {
  modal4.style.display = "none";
}

// SWIPER

var swiper = new Swiper(".mySwiper1", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

var swiper = new Swiper(".mySwiper2", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

var swiper = new Swiper(".mySwiper3", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

var swiper = new Swiper(".mySwiper4", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

// ANIMATION

gsap.from('.home__img', {opacity:0, duration:3, delay:0.5, x:60})
gsap.from('.home__data', {opacity:0, duration:3, delay:0.8, y:25})
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', {opacity:0, duration:3, delay:1, y:25, ease: 'expo.out', stagger:.2})
gsap.from('.nav__logo, .nav__toggle', {opacity:0, duration:3, delay:1, y:25, ease: 'expo.out', stagger:.2})
gsap.from('.nav__item', {opacity:0, duration:3, delay:1, y:25, ease: 'expo.out', stagger:.2})
gsap.from('.home__social-icon', {opacity:0, duration:3, delay:2.3, y:25, ease: 'expo.out', stagger:.2})









