"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var SolanaChainContext_1 = require("../context/SolanaChainContext");
var SolanaChainProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(function () {
        var savedValue = localStorage.getItem("isDevnet");
        return savedValue ? JSON.parse(savedValue) : true;
    }), isDevnet = _b[0], setIsDevnet = _b[1];
    var toggleChain = function () {
        setIsDevnet(function (prev) {
            var newValue = !prev;
            localStorage.setItem("isDevnet", JSON.stringify(newValue));
            return newValue;
        });
    };
    (0, react_1.useEffect)(function () {
        localStorage.setItem("isDevnet", JSON.stringify(isDevnet));
    }, [isDevnet]);
    return (<SolanaChainContext_1.SolanaChainContext.Provider value={{ isDevnet: isDevnet, toggleChain: toggleChain }}>
      {children}
    </SolanaChainContext_1.SolanaChainContext.Provider>);
};
exports.default = SolanaChainProvider;
