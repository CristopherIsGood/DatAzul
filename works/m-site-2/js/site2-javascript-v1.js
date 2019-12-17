// JavaScript Document
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"] */
/* exported myAbout */
/* exported myMenu1 */
/* exported myMenu2 */
/* exported myButton */
/* exported openModal */
/* exported closeModal */
/* exported plusSlides */
/* exported currentSlide */

	function myAbout() {
	  $(window).scrollTop($('#about').offset().top);
	}

	function myMenu1() {
	  $(window).scrollTop($('#menu1').offset().top);
	}

	function myMenu2() {
	  $(window).scrollTop($('#menu2').offset().top);
	}

$(document).ready(function(){
	$('.slider-0').bxSlider({
	  pagerCustom: '#pageAbout'
	});
	
	$('.slider-1').bxSlider({
	  pagerCustom: '#pageMenu1'
	});
	
	$('.slider-2').bxSlider({
	  pagerCustom: '#pageMenu2'
	});

			$("a").click(function(event){
			// this.hash reads the href attribute of this, and gets the part of the URL beginning with #
				if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({  
				scrollTop: $(hash).offset().top 
				}, 0, function(){
				window.location.hash = hash;
				});
			}
			
			// remove class when it closes the drop down list after "getElementById("nav-drop_down")"
			$('.head-nav').removeClass('show');
 
		  });
});

		function myButton() {
			document.getElementById("nav-drop_down").classList.toggle("show");
		}

		function openModal() {
		  document.getElementById('myModal').style.display = "block";
		}

		function closeModal() {
		  document.getElementById('myModal').style.display = "none";
		  $('video')[0].pause();
		}

		var slideIndex = 1;
		showSlides(slideIndex);

		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		function showSlides(n) {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  var dots = document.getElementsByClassName("demo");
		  var captionText = document.getElementById("caption");
		  if (n > slides.length) {slideIndex = 1}
		  if (n < 1) {slideIndex = slides.length}
		  for (i = 0; i < slides.length; i++) {
			  slides[i].style.display = "none";
		  }
		  for (i = 0; i < dots.length; i++) {
			  dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block";
		  dots[slideIndex-1].className += " active";
		  captionText.innerHTML = dots[slideIndex-1].alt;
		}
