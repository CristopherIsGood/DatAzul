// JavaScript v1.0
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs", "no-unused-vars"] */

$(document).ready(function(){
	
	/* ---------------- leftnav-overlay ---------------- */
	
		$('.fa-bars').click(function() {
		  if($('.leftnav-overlay').hasClass('hidden')){
			  $('.leftnav-overlay').removeClass('hidden');
			  $('.leftnav-overlay').addClass('visible');
		  } 
		});

		$('.leftnav-close-nav').click(function() {
			if($('.leftnav-overlay').hasClass('visible')){
			  $('.leftnav-overlay').removeClass('visible');
			  $('.leftnav-overlay').addClass('hidden');			
			}
		});
	
	/* ---------------- leftnav-overlay ---------------- */
	
	/* ----------------- topnav-overlay ---------------- */
	
	$('.topnav-cart-btn').click(function() {
      if($('.shopcart-overlay').hasClass('hidden')){
          $('.shopcart-overlay').removeClass('hidden');
          $('.shopcart-overlay').addClass('visible');
      } 
	});
	
	$('.shopcart-close-cart').click(function() {
		if($('.shopcart-overlay').hasClass('visible')){
          $('.shopcart-overlay').removeClass('visible');
          $('.shopcart-overlay').addClass('hidden');			
		}
	});
	
	/* ----------------- topnav-overlay ---------------- */
 
});

