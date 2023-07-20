// scroll sections active links

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
    console.log(`currentscroll = ${currentScroll}`);
    console.log(`top = ${top}`);
    console.log(`height = ${height}`);
    let id=sec.getAttribute('id');
    // console.log(id);
    if(currentScroll >= top && currentScroll < top + height){
      navLinks.forEach( links =>{
        links.classList.remove('active');
        document.querySelector(`header nav a[href*=${id}]`).classList.add('active');

      });
    }
  });

  let header=document.querySelector('header');
  header.classList.toogle
  
});
