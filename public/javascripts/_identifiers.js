/*globals alert, window, $*/
"use strict";
var initializeIdentifiers = function (stamp) {
	$(function () {
		var slider = window.slider,
			identifiers = window.identifiers,
			controls = {
				getCatalogName : function () {
					return slider.getActiveItem().children('li');
				},
				catalogNumber : $('#catalognumber'),
				currentCatalogId : $('#currentCatalogId'),
				defaultCatalogCheckbox : $('#defaultcatalog'),
				watermark :  $('#wmk'),
				getDefaultCatalogName : function (defaultCatalogId) {
					return "Scott";
				},
				getCatalogIds : function () {			
					return $('li > input').map(function () {
						return $(this).val();
					});
				},		
				getCatalogId: function () {},
				sliderControls : {
					ul : $('#catalogSlider > ul'),
					items : $('#catalogSlider > ul').children('li'),
					next : $('#nxt'),
					prev : $('#prv')
				}
			},
			callback = function () {
				var currentindex = slider.getCurrentIndex();
				$('#catalogSlider > ul').children('li').removeClass('active');
				$($('#catalogSlider > ul').children('li')[currentindex]).addClass('active');
			}
		stamp.getCurrentIdentifiers = function () {
			var identifier,
				activeCatalogId = $('li.active > input').val();
			for (var i = 0; i < stamp.identifiers.length; i += 1) {
				identifier = stamp.identifiers[i];
				if (identifier.catalog === activeCatalogId) {
					return { catalogNumber : identifier.value, watermark : identifier.wmk, catalogId : activeCatalogId };
				}
			};
			return { catalogNumber : null, watermark : null, catalogId : activeCatalogId };
		};
  		identifiers.ready(controls, stamp, callback);
		identifiers.setCatalogToDefault();
	});
};

