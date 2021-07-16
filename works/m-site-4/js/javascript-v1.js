// JavaScript
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs", "no-unused-vars"] */

$(document).ready(function(){	
	// remove class when it closes the drop down list after "getElementById("nav-drop_down")"
	$('.menu-bar').removeClass('show');
	
    $("#nav-drop_down ul li a").click(function() {
        $('.menu-bar').removeClass('show');
    });
});

function myButton() {
	document.getElementById("nav-drop_down").classList.toggle("show");
}