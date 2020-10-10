// JavaScript v1.0
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs", "no-unused-vars"] */

$(document).ready(function() {
	
	clearCart();
	
	$(".add-to-cart").click(function(event){
		event.preventDefault();
		var name = $(this).attr("data-name");
		var cost = Number($(this).attr("data-cost"));
		var img = $(this).attr("data-img");
		
		addItemToCart(name,cost,img,1);
		displayCart();
	});
	
	$("#clear-cart").click(function(event){
		clearCart();
		displayCart();
	});
	
	function displayCart(){
		var cartArray = listCart();
		var output = "";
		for(var i in cartArray){
			output += "<div class='cartitem-cart-item'><img src="+cartArray[i].img+" /><div><h4>"+cartArray[i].name+"</h4><h5>"+cartArray[i].cost+"</h5><span class='cartitem-remove-item'>remove</span></div><div><i class='fas fa-chevron-up'></i><p class='cartitem-item-amount'>"+cartArray[i].count+"</p><i class='fas fa-chevron-down'></i></div></div><!-- cartitem-cart-item -->"
		}
		$("#show-cart").html(output);
		$("#total-cart").html(totalCart());
	}
	
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
		localStorage.setItem("datazulCart", JSON.stringify(cart));
	}
	
	function loadCart() {
		cart = JSON.parse(localStorage.getItem("datazulCart"));
	}
	
	loadCart();
	displayCart();

	
	/* ---------------- leftnav-overlay ---------------- */
	
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
	
	/* ---------------- leftnav-overlay ---------------- */
	
	/* ----------------- topnav-overlay ---------------- */
	
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
	
	/* ----------------- topnav-overlay ---------------- */
 
});

