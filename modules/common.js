"use strict";
exports.common = function () {
	return {
		disableControl : function (control, opacity) {
			control.unbind("click");
			control.css('opacity', opacity || '0.3');
		},
		enableControl : function (control, clickCallback, opacity) {
			control.click(clickCallback);
			control.css('opacity', opacity || '1.0');
		}
	};
};