$(function() { 

  $('.header__menu-btn').on('click', function(){
        $('.menu__list').slideToggle();
      
    });
  
});
    


$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
      1024:{
        items:4
      },
      800:{
        items:3
      },
      600:{
        items:2
      },
      300:{
        items:1
      }
    }
  });

   $('#fullpage').fullpage({
		     autoScrolling:true,
         scrollHorizontally: true,
         sectionSelector: '.page-section',
     });


});


