/*jslint browser: true*/
"use strict";
var initialize = function () {
		var common = require('./modules/common').common();
        window.slider = require('./modules/slider').slider(common);
    };
initialize();


