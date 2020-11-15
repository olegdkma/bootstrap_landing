import $ from 'jquery'



$(document).ready(()=>{

  $( window ).scroll(function() {

    $('header').addClass("scrolled");
    if($(this).scrollTop() === 0){
      $('header').removeClass("scrolled");
    }
  });


    $(".burger").click(function(){
      $(this).toggleClass("changed");
      $(".header-left").toggleClass("active")
      $(".header-left").slideToggle(700);
    });

  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });
})