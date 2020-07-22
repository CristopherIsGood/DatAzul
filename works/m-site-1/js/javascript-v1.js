// JavaScript
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"] */
/* exported myAbout */
/* exported myMenu1 */
/* exported myMenu2 */
/* exported myButton */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs", "no-unused-vars"] */

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
	  pagerCustom:'#pageAbout'
	});
	
	$('.slider-1').bxSlider({
	  pagerCustom:'#pageMenu1'
	});
	
	$('.slider-2').bxSlider({
	  pagerCustom:'#pageMenu2'
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

var form = document.forms["form-contact"];
form.addEventListener('submit',contact_submit,false);

function contact_submit(e) {
    // Stop Form From Submitting
    e.preventDefault();

    // Set Initial Variables
    var target = e.target || e.srcElement;
    var to = 'cristobal.montesino@gmail.com';
    var uri = 'mailto:' + to;
    var body = '';

    // Set Form Values to Variables
    var name = target.elements['name'].value;
    var phone = target.elements['phone'].value;
    var email = target.elements['email'].value;
    var message = target.elements['message'].value;

    // Build Body / Message with all Input Fields
    body += message + "\r\n\r\n";
    body += name + "\r\n";
    body += email + "\r\n";
    body += phone + "\r\n";

    // Build final Mailto URI
    uri += '?email=' + encodeURIComponent(email);
    uri += '&body=' + encodeURIComponent(body);

    // Open Mailto in New Window / Tab
    window.open(uri,'_blank');
}