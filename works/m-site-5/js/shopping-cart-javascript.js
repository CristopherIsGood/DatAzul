// JavaScript v1.0
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs", "no-unused-vars"] */
$(document).ready(function(){
	
	clearCart();
	
    $('.noti').click(function() {
        if($('.shopping-cart').hasClass('no-display')){
            $('.shopping-cart').removeClass('no-display');
            $('.shopping-cart').addClass('display');
        } else {
            $('.shopping-cart').removeClass('display');
            $('.shopping-cart').addClass('no-display');
        }
    });

    $(".add-to-cart").click(function(event){
        event.preventDefault();
        var name = $(this).attr("data-name");
        var price = Number($(this).attr("data-price"));
		var img = $(this).attr("data-img");
        addItemToCart(name,price,img,1);
        displayCart();
        $(this).addClass('active');
		$(".message").addClass('visible');
    });

    $("#clear-cart").click(function(event){
		$(".message").removeClass('visible');
		$(".btn-primary").removeClass('active');
        clearCart();
        displayCart();
    });

    function displayCart(){
        var cartArray = listCart();
        var output = "";
        for(var i in cartArray) {
            output += 
                "<li><button class='delete-item' data-name='"
                +cartArray[i].name+"'>Remove</button>"
				+"<img class='cartitem-cart-item' src='"+cartArray[i].img+"' /><div>"
                +cartArray[i].name+" x "
                +"<span class='hello' data-count='"+cartArray[i].count+"'>"
                +cartArray[i].count+"</span>"
                +"$"+cartArray[i].total
                +"</li>";
        }

        $("#show-cart").html(output);
        $("#total-cart").html(totalCart());	
    }

    $("#show-cart").on("click", ".delete-item",function(event){
        var name = $(this).attr("data-name");
		$(".message").removeClass('visible');
		$(".btn-primary").removeClass('active');
        removeItemFromCartAll(name);
        displayCart();
    });		

    // --------------------------------------------------------------------------------- //
    var cart = [];

    var Item = function(name, price, img, count){
        this.name = name
        this.price = price
		this.img = img
        this.count = count
    }


    function addItemToCart(name, price, img, count){
        for(var i in cart){
            if(cart[i].name === name){
                cart[i].count += count;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, img, count);
        cart.push(item);
        saveCart();
    }

    function removeItemFromCart(name){
        for(var i in cart){
            if(cart[i].name === name){
                cart[i].count --;
                if(cart[i].count === 0){
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    }

    function removeItemFromCartAll(name){
        for(var i in cart){
            if(cart[i].name === name){
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    }

    function clearCart(){
        cart = [];
        saveCart();
    }

    function countCart(){
        var totalCount = 0;
        for(var i in cart){
            totalCount += cart[i].count;
        }

        return totalCount;
    }

    function totalCart(){
        var totalCost = 0;
        for(var i in cart){
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost.toFixed(2);
    }

    function listCart(){
        var cartCopy = [];
        for(var i in cart){
            var item = cart[i];
            var itemCopy = {};
            for(var p in item){
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    }

    function saveCart(){
        localStorage.setItem("datAzulCart2", JSON.stringify(cart));
    }

    function loadCart(){
        cart = JSON.parse(localStorage.getItem("datAzulCart2"));
    }

    loadCart();
    displayCart();
});