// JavaScript v1.0
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"] */
/* exported myButton */

$(window).scroll(function(){
	var section1 = $("#section1")  
	var section2 = $("#section2")
	var section1_height = section1.height();  
	var section2_height = section2.height();
	
    if ($(this).scrollTop() > section1_height) {
       $('#section1').addClass('hidden');
    } else {
       $('#section1').removeClass('hidden');
    }
	
    if ($(this).scrollTop() > section2_height) {
       $('#section2').addClass('visible');
    } else {
       $('#section2').removeClass('visible');
    }
	
	if ($(window).width() < 960) {
	   //alert('Less than 960');
		if ($(this).scrollTop() > section2_height) {
		   $('#section1').addClass('hidden');
		} else {
		   $('#section1').removeClass('hidden');
		}
		
		if ($(this).scrollTop() > section1_height) {
		   $('#section2').addClass('visible');
		} else {
		   $('#section2').removeClass('visible');
		}
	}
});

$(document).ready(function(){	
	// remove class when it closes the drop down list after "getElementById("nav-drop_down")"
	$('.navigation').removeClass('show');
});

function myButton() {
	document.getElementById("nav-drop_down").classList.toggle("show");
}