/*jslint browser: true*/
"use strict";
var initialize = function () {
		var common, slider, identifiers;
		common = require('./modules/common').common(localStorage);
        slider = require('./modules/slider').slider(common);
        identifiers = require('./modules/identifiers').identifiers(slider, common);
        window.slider = slider;
        window.identifiers = identifiers;
    };
initialize();


