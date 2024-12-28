"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDarkMode = void 0;
var DarkModeContext_1 = require("../context/DarkModeContext");
var react_1 = require("react");
var useDarkMode = function () {
    var context = (0, react_1.useContext)(DarkModeContext_1.DarkModeContext);
    if (!context) {
        throw new Error("darkModeContext is possibly undefined!");
    }
    return context;
};
exports.useDarkMode = useDarkMode;
