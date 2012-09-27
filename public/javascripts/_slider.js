/*globals alert, window, $*/
"use strict";
var initializeSlider = function () {
	$(function () {
		var controls, callback, slider;
		controls = {
			ul : $('#catalogSlider > ul'),
			listItems : $('#catalogSlider > ul').children('li'),
			next : $('#nxt'),
			prev : $('#prv')
		};
		slider = window.slider;
		callback = function () {
			var item = $(slider.getActiveItem()),
				catalogId = item.children('input').val(),
				catalogName = item.children('label').text();
			console.log(catalogId + ' - ' + catalogName);
		};
		slider.ready(controls, callback);
	});
};