$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button id="prev" type="button" class="btn navigate prev"><img src="./assets/svg/arrow.svg" alt="ar"></button>',
        nextArrow: '<button id="next" type="button" class="btn navigate next"><img src="./assets/svg/arrow.svg" alt="ar"></button>',
        autoplay:true,
        autoplaySpeed:3000,
        swipe:false,
        responsive: [
            {
              breakpoint: 1350,
              settings: {
                arrows: false,
                swipe:true,


              }
            },
            {
                breakpoint: 700,
                settings: {
                  arrows: false,
                  swipe:true,
                  centerPadding: '0px',
                  slidesToShow: 1,

  
                }
              }
          ]
    });
});
$(document).ready(function(){
    $('.carousel-1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button id="prev" type="button" class="btn navigate prev two"><img src="./assets/svg/arrow.svg" alt="ar"></button>',
        nextArrow: '<button id="next" type="button" class="btn navigate next two"><img src="./assets/svg/arrow.svg" alt="ar"></button>',
        autoplay:true,
        dots:true, 
        autoplaySpeed:10000,
        swipe:false,
        responsive: [
            {
              breakpoint: 1350,
              settings: {
                arrows: false,
                swipe:true,


              }
            }
          ]
    });
});
$(document).ready(function(){
    $('.carousel-2').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button id="prev" type="button" class="btn navigate prev three"><img src="./assets/svg/arrowBlack.svg" alt="ar"></button>',
        nextArrow: '<button id="next" type="button" class="btn navigate next three"><img src="./assets/svg/arrowBlack.svg" alt="ar"></button>',
        autoplay:true,
        autoplaySpeed:3000,
        swipe:false,
        responsive: [
            {
              breakpoint: 1439,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 1350,
                settings: {
                  arrows: false,
                  swipe:true,
                  slidesToShow: 4,
                  slidesToScroll: 1,
  
  
                }
            },
            {
                breakpoint: 900,
                settings: {
                  arrows: false,
                  swipe:true,
                  slidesToShow: 3,
                  slidesToScroll: 1,
  
  
                }
            },
            {
                breakpoint: 600,
                settings: {
                  arrows: false,
                  swipe:true,
                  slidesToShow: 2,
                  slidesToScroll: 1,
  
  
                }
            },
            {
                breakpoint: 500,
                settings: {
                  arrows: false,
                  swipe:true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
  
  
                }
            },
 
          ]
    });
});