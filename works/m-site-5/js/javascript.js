// JavaScript Document
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs", "no-unused-vars"] */
/* exported openmenu */
/* exported closemenu */
function openmenu()
{
	document.getElementById("side-menu").style.display="block";
	document.getElementById("menu-btn").style.display="none";
	document.getElementById("close-btn").style.display="block";
}

function closemenu()
{
	document.getElementById("side-menu").style.display="none";
	document.getElementById("menu-btn").style.display="block";
	document.getElementById("close-btn").style.display="none";
}
