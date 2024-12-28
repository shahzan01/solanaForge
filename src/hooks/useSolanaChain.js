"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSolanaChain = void 0;
var react_1 = require("react");
var SolanaChainContext_1 = require("../context/SolanaChainContext");
var useSolanaChain = function () {
    var context = (0, react_1.useContext)(SolanaChainContext_1.SolanaChainContext);
    if (!context) {
        throw new Error("useSolanaChain must be used within a SolanaChainProvider");
    }
    return context;
};
exports.useSolanaChain = useSolanaChain;
