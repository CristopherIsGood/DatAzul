// JavaScript - Version 1.01
		
		$(document).ready(function(){
		
		  $("a").on('click', function(event) {

			if (this.hash !== "") {

			  event.preventDefault();

			  var hash = this.hash;

			  $('html, body').animate({
				scrollTop: $(hash).offset().top
			  }, 800, function(){
		   
				window.location.hash = hash;
			  });
			} 
		  });


		  
		});
		
		function myFunction() {
			document.getElementById("nav-drop_down").classList.toggle("show");
			$('ul li a').click(function(event){
				$('.nav-list_mobile').removeClass('show');
			});
		}