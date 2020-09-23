// JavaScript v1.0
/* global $ */
/* global document */
/* global window */
/* eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs", "no-unused-vars"] */
$(document).ready(function(){
                var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    pagination: {
                      clickable: true,
                    },
                    breakpoints: {
                      980: {
                        slidesPerView: 3,
                        spaceBetween: 10
                      }
                    }
                });
});