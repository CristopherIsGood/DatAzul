// variables
// JavaScript v1.0
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs", "no-unused-vars"] */

const cartBtn = document.querySelector('.topnav-cart-btn');
const closeCartBtn = document.querySelector('.shopcart-close-cart');
const clearCartBtn = document.querySelector('.shopcart-clear-cart');
const cartDOM = document.querySelector('.shopcart-cart');
const cartOverlay = document.querySelector('.shopcart-overlay');
const cartItems = document.querySelector('.topnav-cart-items');
const cartTotal = document.querySelector('.shopcart-cart-total');
const cartContent = document.querySelector('.cartitem-cart-content');
const productsDOM = document.querySelector('.products-center');
//
let cart = [];

// getting the products
class Products{
	async getProducts(){
		try {
			let result = await fetch('products.json');
			let data = await result.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}
}

// display products
class UI {
	
}

// local storage
class Storage {
	
}

document.addEventListener("DOMContentLoaded", () => {
	const ui = new UI();
	const products = new Products();
	
	// get all products
	products.getProducts().then(data => console.log(data));
})

