// JQuery BxSlider v1.0
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"] */

$(window).scroll(function(){
	var section1 = $("#section1")  
	var section2 = $("#section2")
	var section3 = $("#section3")
	var section1_height = section1.height();  
	var section2_height = section2.height();
	var section3_height = section3.height();
	
    if ($(this).scrollTop() > section1_height) {
        $('#section2').addClass('visible');
    } else {
        $('#section2').removeClass('visible');
	}
	
	if ($(this).scrollTop() > (section1_height + section2_height) ) {
		$('#section3').addClass('visible');
	} else {
		$('#section3').removeClass('visible');
	}
	
	if ($(this).scrollTop() > (section1_height + section2_height + section3_height) ) {
		$('#section4').addClass('visible');
	} else {
		$('#section4').removeClass('visible');
	}
});

$(document).ready(function(){
	$('.slider-0').bxSlider({
		pager:false,
		controls:true,
		auto:false,
		speed:3000,
		pause:15000,
		adaptiveHeight:true,
		adaptiveHeightSpeed:500,
		touchEnabled:false
	});
});