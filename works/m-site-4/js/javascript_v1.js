// JavaScript v1.0
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs", "no-unused-vars"] */
/* exported myButton */

$(window).scroll(function(){
	var section1 = $("#section1")  
	var section2 = $("#section2")
	var section3 = $("#section3")
	var section1_height = section1.height();  
	var section2_height = section2.height();
	var section3_height = section3.height();
	
    if ($(this).scrollTop() > section1_height - 225) {
        $('#section2').addClass('visible');
    } else {
        $('#section2').removeClass('visible');
	}
	
	if ($(this).scrollTop() > (section1_height + section2_height - 225) ) {
		$('#section3').addClass('visible');
	} else {
		$('#section3').removeClass('visible');
	}
	
	if ($(this).scrollTop() > (section1_height + section2_height + section3_height - 225) ) {
		$('#section4').addClass('visible');
	} else {
		$('#section4').removeClass('visible');
	}
	
});

$(document).ready(function(){	
	// remove class when it closes the drop down list after "getElementById("nav-drop_down")"
	$('.navigation').removeClass('show');
	
    $("#nav-drop_down ul li a").click(function() {
        $('.navigation').removeClass('show');
    });
});

function myButton() {
	document.getElementById("nav-drop_down").classList.toggle("show");
}