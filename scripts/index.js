



/* ================= toggle icon navbar=================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar=document.querySelector('.nav-bar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('show');  
};



/* ================= scroll sections active links=================*/

// let footer=document.querySelector('footer');
// console.log(footer.offsetHeight);
// let header=document.querySelector('header');
// console.log(header.offsetHeight);

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
// navLinks.forEach((nav) =>{
//   console.log(nav);
// });


window.addEventListener('scroll',() =>{
  sections.forEach((sec) => {
    let currentScroll=scrollY;
    let top=sec.offsetTop-350; // this 350 is off the heigh of section's height
    let height=sec.offsetHeight;
    // console.log(`currentscroll = ${currentScroll}`);
    // console.log(`top = ${top}`);
    // console.log(`height = ${height}`);
    let id=sec.getAttribute('id');
    // console.log(id);
    if(currentScroll >= top && currentScroll < top + height){
      navLinks.forEach( links =>{
        links.classList.remove('active');
        document.querySelector(`header nav a[href*=${id}]`).classList.add('active');

      });
    };
  });
  
  /* ================= sticky Navbar=================*/
  let header=document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY > 100);

  /* ================= remove toggle class in header=================*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('show');
  
  
});

  /* ================= scroll reveal =================*/

ScrollReveal({ 
  // reset: true, 
  distance :'80px',
  duration : 2000,
  delay:200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-image,.about-img,.services-container,.skills-container,.portfolio-container,.rightArea,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.workYear', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

  /* ================= typed js =================*/
const typed = new Typed('.multiple-text',{
  strings:['Java','HTML & CSS','Javascript','Node js','React js'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
  
});

let arrowAll = document.querySelectorAll('#arrowpart');

console.log(window.outerWidth);
if(window.outerWidth <= 768){
  console.log(true);
  // arrow.classList.add('bxs-up-arrow');
  arrowAll.forEach((arrow) =>{
    arrow.classList.add('bxs-up-arrow');
  })
  ScrollReveal().reveal('.workYear', {  easing: 'ease-in',
origin:'top',
scale:'0.85'});
}

/* ================= toggle icon navbar=================*/


window.addEventListener("resize", () =>{
  
  width = window.outerWidth;
  console.log(width);
  if(width <= 768){
    console.log(true);
    arrowAll.forEach((arrow) =>{
      arrow.classList.add('bxs-up-arrow');
    })
  }
  if(width > 768){
    console.log(false);
    arrowAll.forEach((arrow) =>{
      arrow.classList.remove('bxs-up-arrow'); 
    })
  }
  
});