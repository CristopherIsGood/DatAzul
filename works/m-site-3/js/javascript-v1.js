// JavaScript - Version 1.04
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"] */
/* exported myFunction */

		$(document).ready(function(){
		
		  $("a").click(function(event){
			  
			if (this.hash !== "") {
			  event.preventDefault();
			  var hash = this.hash;
			  $('html, body').animate({  
				scrollTop: $(hash).offset().top 
			  }, 1800, function(){
				window.location.hash = hash;
			  });
			}
			  
			$('.head-nav').removeClass('show');
 
		  });
			
			$('.datAzlider').bxSlider({
			mode:'fade',
			auto:true,
			autoHover:false,
			hideControlOnEnd:true,
			infiniteLoop:false,
			pause:4000,
			speed:600
			});	  
			
		});


		
		function myFunction() {
			
			document.getElementById("nav-drop_down").classList.toggle("show");

		}