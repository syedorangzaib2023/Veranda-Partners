// Nav Bar

let mobileNav = document.getElementById("mobile-nav-links");
// let mobileLinks = document.getElementById("veranda-mobile-nav");

function openMenu(){
    mobileNav.classList.toggle("mobile-nav-links");
    
 }
 
//  Sticky NavBar
let stickyNav = document.getElementById("sticky-nav");

function scrolldown(){
  if(window.scrollY >= 0.1 ){
   stickyNav.classList.add("sticky");
  //  mobileLinks.classList.add("sticky-links");
  }
  else{
   stickyNav.classList.remove("sticky");
  //  mobileLinks.classList.remove("sticky-links");
  }
}



// Owl Slider

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay: true,
  responsive:{
      0:{
          items:1
      },
      768:{
          items:2
      },
      1024:{
          items:3
      },
      1200:{
        items:3
    }
  }
  })
// Slick Slider

$(document).ready(function(){
  $('.center-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    centerPadding: '20px',
    infinite: true,
    autoplaySpeed: 5000,
    autoplay:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          fade: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px"
        }
      }

    ]
  });
});
