import $ from 'jquery'
import 'slick-carousel';

$('.slider-slick').slick({
  dots:true,
  dotsClass: 'slider-dots',
  appendDots: $('.slider-dotss'),

  nextArrow: $('.slider-next'),
  prevArrow: $('.slider-prev'),
})