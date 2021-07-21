// JavaScript v1.0
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs", "no-unused-vars"] */
/* exported openModal */
/* exported closeModal */
/* exported plusSlides */
/* exported currentSlide */

$(document).ready(function() {
	
	clearCart();
	
	var noti = document.querySelector(".topnav-cart-items");
	
	$(".add-to-cart").click(function(event){
		event.preventDefault();
		var name = $(this).attr("data-name");
		var cost = Number($(this).attr("data-cost"));
		var img = $(this).attr("data-img");
        var add = Number(noti.getAttribute('data-count')|| 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero');
		addItemToCart(name,cost,img,1);
		displayCart();
	});
	
	$("#clear-cart").click(function(event){
        noti.setAttribute('data-count', 0);
		clearCart();
		displayCart();
	});
	
	function displayCart(){
		var cartArray = listCart();
		var output = "";
		for(var i in cartArray){
			output += "<div class='cartitem-cart-item'><img src="+cartArray[i].img+" /><div><h4>"+cartArray[i].name+"</h4><h5>$"+cartArray[i].cost+"</h5></div><div><i class='fas fa-chevron-up' data-name='"+cartArray[i].name+"'></i><p class='cartitem-item-amount'>"+cartArray[i].count+"</p><i class='fas fa-chevron-down' data-name='"+cartArray[i].name+"'></i></div></div><!-- cartitem-cart-item -->"
		}
		$("#show-cart").html(output);
		$("#total-cart").html(totalCart());
		console.log(cartArray);
	}
	
	$("#show-cart").on("click",".fa-chevron-down",function(){
		var name = $(this).attr("data-name");
        var sub = Number(noti.getAttribute('data-count')|| 0);
        noti.setAttribute('data-count', sub - 1);
		removeItemFromCart(name);
		displayCart();
	});
	
	
	$("#show-cart").on("click",".fa-chevron-up",function(){
		var name = $(this).attr("data-name");
		var cost = Number($(this).attr("data-cost"));
		var img = $(this).attr("data-img");
        var add = Number(noti.getAttribute('data-count')|| 0);
        noti.setAttribute('data-count', add + 1);
		addItemToCart(name,cost,img,1);
		displayCart();
	});
	
	var cart = [];
	
	var Item = function(name,cost,img,count) {
		this.name = name
		this.cost = cost
		this.img = img
		this.count = count
	};
	
	function addItemToCart(name,cost,img,count) {
		for(var i in cart){
			if(cart[i].name === name){
				cart[i].count += count;
				saveCart();
				return;
			}
		}
		var item = new Item(name,cost,img,count);
		cart.push(item);
		saveCart();
	}
	
	function removeItemFromCart(name) {
		for(var i in cart){
			if(cart[i].name === name){
				cart[i].count --;
				if(cart[i].count === 0){
					cart.splice(i,1);
				}
				break;
			}
		}
		saveCart();
	}
	
	function removeItemFromCartAll(name) {
		for(var i in cart){
			if(cart[i].name === name){
				cart.splice(i,1);
				break;
			}
		}
		saveCart();
	}
	
	function clearCart() {
		cart = [];
		saveCart()
	}
	
	function countCart() {
		var totalCount = 0;
		for(var i in cart) {
			totalCount += cart[i].count;
		}
		return totalCount;
	}
	
	console.log(countCart());
	
	function totalCart() {
		var totalCost = 0;
		for(var i in cart) {
			totalCost += cart[i].cost * cart[i].count;
		}
		return totalCost.toFixed(2);
	}
	
	console.log(totalCart());
	
	function listCart() {
		var cartCopy = [];
		for(var i in cart){
			var item = cart[i];
			var itemCopy = {};
			for(var p in item) {
				itemCopy[p] = item[p];
			}
			itemCopy.total = (item.cost * item.count).toFixed(2);
			cartCopy.push(itemCopy);
		}
		return cartCopy;
	}
	
	function saveCart() {
		localStorage.setItem("datazulCart1", JSON.stringify(cart));
	}
	
	function loadCart() {
		cart = JSON.parse(localStorage.getItem("datazulCart1"));
	}
	
	loadCart();
	displayCart();

	
	$('.fa-bars').click(function() {
		if($('.leftnav-overlay').hasClass('hidden')){
			$('.leftnav-overlay').removeClass('hidden');
			$('.leftnav-overlay').addClass('visible');
		} 
	});

	$('.leftnav-close-nav').click(function() {
		if($('.leftnav-overlay').hasClass('visible')){
			$('.leftnav-overlay').removeClass('visible');
			$('.leftnav-overlay').addClass('hidden');			
		}
	});
	
	$('.topnav-cart-btn').click(function() {
      if($('.shopcart-overlay').hasClass('hidden')){
          $('.shopcart-overlay').removeClass('hidden');
          $('.shopcart-overlay').addClass('visible');
      } 
	});
	
	$('.shopcart-close-cart').click(function() {
		if($('.shopcart-overlay').hasClass('visible')){
          $('.shopcart-overlay').removeClass('visible');
          $('.shopcart-overlay').addClass('hidden');			
		}
	});
 
});

function openModal() {
	document.getElementById('myModal').style.display = "block";
}

function closeModal() {
	document.getElementById('myModal').style.display = "none";
	$('video').trigger('pause');
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
	$('video').trigger('pause');
}

function currentSlide(n) {
	showSlides(slideIndex = n);
	$('video').trigger('pause');
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
