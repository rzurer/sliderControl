/*globals alert, window, $*/
"use strict";
var initialize = function () {
	$(function () {
		var slider = window.slider,
			controls = {
				ul : $('#slider > ul'),
				items : $('#slider > ul').children('li'),
				next : $('#nxt'),
				prev : $('#prv')				
			};
		slider.ready(controls);
	});
};

