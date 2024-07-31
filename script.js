'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


///////////////////////
//////////////////////
//////////////////////


console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section')
console.log(allSections);

document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button')
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
//.insertAdjacentHTML

const message = document.createElement('div')

message.classList.add('cookie-message')

message.textContent = 'We use cookies for improved dunctionality and analytics.'
message.innerHTML = 'We use cookies for improved dunctionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>'

// header.prepend(message)

header.append(message)
// header.append(message.cloneNode(true))

//header.before(message)
//header.after(message)

//Delete elements
document.querySelector('.btn--close-cookie')
addEventListener('click', function(){
  message.remove()
})

// Styles

// message.style.backgroundColor = '#37383d'
// message.style.width = '120%'

// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'

// document.documentElement.style.setProperty('--color-primary', 'orangered')

// // Atributes

// const logo = document.querySelector('.nav__logo')

// // Standard Atributes
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beatiful minimalist logo'

// // NON-Standart Atributes in HTML

// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist')

// // Според условието се изисква някой от двата пътя
// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn')

// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes

// console.log(logo.dataset.versionNumber);


// // Classes

// logo.classList.add('c', 'j')
// logo.classList.remove('c', 'j')
// logo.classList.toggle('c')
// logo.classList.contains('c')


const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function(e){
  const s1coords = section1.getBoundingClientRect()
  //Scrolling
  //window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset)
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset, 
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })

  //Modern way but only on modern Browsers
  section1.scrollIntoView({
    behavior: 'smooth'
  })

})

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function(e){
  alert('addEventListener: Great You are reading the heading :D')
})

// h1.onmouseenter = function(e){
//   alert('addEventListener: Great You are reading the heading :D')
// }