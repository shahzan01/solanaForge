"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DarkModeContext_1 = require("../context/DarkModeContext");
var react_1 = require("react");
var DarkModeProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), isDarkMode = _b[0], setIsDarkMode = _b[1];
    (0, react_1.useEffect)(function () {
        var storedPreference = localStorage.getItem("theme");
        var prefersDarkMode = storedPreference === "dark";
        setIsDarkMode(prefersDarkMode);
        if (prefersDarkMode) {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
        document.documentElement.style.overflowY = "auto";
    }, []);
    var toggleDarkMode = function () {
        setIsDarkMode(function (prev) {
            var newValue = !prev;
            localStorage.setItem("theme", newValue ? "dark" : "light");
            document.documentElement.classList.toggle("dark", newValue);
            return newValue;
        });
    };
    if (isDarkMode === null) {
        return null;
    }
    return (<DarkModeContext_1.DarkModeContext.Provider value={{ isDarkMode: isDarkMode, toggleDarkMode: toggleDarkMode }}>
      {children}
    </DarkModeContext_1.DarkModeContext.Provider>);
};
exports.default = DarkModeProvider;
