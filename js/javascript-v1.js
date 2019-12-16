// JQuery BxSlider v1.0
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"] */
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190) {
    document.getElementById("myDIV").className = "visible";
  } else {
    document.getElementById("myDIV").className = "hidden";
  }
}

$(document).ready(function(){
	$('.slider-0').bxSlider({
		pager:false,
	    Controls:false,
	    auto:true,
		speed:3000,
		pause:15000
	});
});