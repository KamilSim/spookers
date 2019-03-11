

let myNavbar = $('.navbar');

let navbarToggler = $('.toggler');

$('.nav').append('<div class="collapsed-menu"></div>');
let collapsedMenu = $('.collapsed-menu');


myNavbar.clone().appendTo(collapsedMenu);

let collapsedNav = $('.collapsed-menu .navbar');

navbarToggler.on('click', function (event) {


  event.preventDefault();

  collapsedMenu.toggleClass('displayed-menu');
  collapsedMenu.toggleClass('collapsed-menu');
  collapsedNav.removeClass('hidden-lg');
  collapsedNav.addClass('displayed-list');

});

let playButton= $('.play-btn');

playButton.on('click', function(event){
  playButton.css('visibility', 'hidden')
});


let activeLink = $('.navbar .active');
let navbarMargin = parseInt(myNavbar.css('margin-left'));
let activeLinkWidth = parseInt(activeLink.css('width'));

console.log(navbarMargin);
let navleft = myNavbar.position().left + navbarMargin;

$('.bar').css({
  "left": `${navleft}px`,
  "width": `${activeLinkWidth}px`
});

let delay=500;






 function animateBar(x, left, width) {
  x.animate({
          "left": `${left}px`,
           "width": `${width}px`
        }, 700
         );

};


myNavbar.on('mouseleave', _.throttle(function(event){
  

    $('.bar').animate({
      'left': `${navleft}px`,
      'width': `${activeLinkWidth}px`
    }, 700
    );
  
},delay));

myNavbar.on('mouseover', 'li', _.debounce(function (event) {

  event.preventDefault();

 
    let menuItem = $(this);
    let menuItemWidth = parseInt(menuItem.css('width'))+2;
    let menuItemLeft = menuItem.position().left;

    let newLeft = menuItemLeft + navleft;
    
    animateBar($('.bar'), newLeft, menuItemWidth);
    
},delay));






