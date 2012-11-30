/*jslint browser: true*/
"use strict";
var initialize = function () {
		var common, slider, identifiers;
		common = require('../common/modules/common').common(localStorage);
        slider = require('./modules/slider').slider(common);
        window.slider = slider;
    };
initialize();


