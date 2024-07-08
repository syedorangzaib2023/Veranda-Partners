// Nav Bar

let mobileNav = document.getElementById("mobile-nav-links");

function openMenu(){
    mobileNav.classList.toggle("mobile-nav-links");
 }
 //  Sticky NavBar
let stickyNav = document.getElementById("sticky-nav");

function scrolldown(){
  if(window.scrollY >= 100 ){
   stickyNav.classList.add("sticky");
  }
  else{
   stickyNav.classList.remove("sticky");
  }
}

 


// Social Page Slider- Slick Slider

$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
    prevArrow:' <button class="slick-prev" > < </button>',
    nextArrow:'<button class="slick-next"> > </button>',
    
            // responsive: [                        
            //     {
            //       breakpoint: 576,
            //       settings: {
            //         centerMode: false,
            //         variableWidth: false,
            //       }
            //     },
            // ]
  });
  
  
  var imgs = $('.slider img');
  imgs.each(function(){
    var item = $(this).closest('.item');
    item.css({
      'background-image': 'url(' + $(this).attr('src') + ')', 
      'background-position': 'center',            
      '-webkit-background-size': 'cover',
      'background-size': 'cover', 
    });
    $(this).hide();
  });