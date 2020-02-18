// JavaScript v1.0
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"] */
/* exported myButton */

$(window).scroll(function(){
    if ($(this).scrollTop() > 360) {
       $('#section1').addClass('hidden');
    } else {
       $('#section1').removeClass('hidden');
    }
	
    if ($(this).scrollTop() > 360) {
       $('#section2').addClass('visible');
    } else {
       $('#section2').removeClass('visible');
    }
});

$(document).ready(function(){	
	// remove class when it closes the drop down list after "getElementById("nav-drop_down")"
	$('.navigation').removeClass('show');
});

function myButton() {
	document.getElementById("nav-drop_down").classList.toggle("show");
}