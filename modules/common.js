"use strict";
exports.common = function () {
	return {
		disableControls : function (controls, opacity) {
			controls.forEach(function (control){
				control.unbind("click");
				control.css('opacity', opacity || '0.3');			
			})
		},
		enableControl : function (control, clickCallback, opacity) {
			control.click(clickCallback);
			control.css('opacity', opacity || '1.0');
		}
	};
};