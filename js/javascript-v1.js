// JQuery BxSlider v1.0
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"] */

$(document).ready(function(){
	$('.slider-0').bxSlider({
		pager:false,
		controls:false,
		auto:true,
		speed:3000,
		pause:9000,
		adaptiveHeight:true,
		adaptiveHeightSpeed:500
	});
});