"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenCreationAtom = exports.token22TokenBalance = exports.normalTokenBalance = exports.walletBalanceAtom = void 0;
var recoil_1 = require("recoil");
exports.walletBalanceAtom = (0, recoil_1.atom)({
    key: 'walletBalance',
    default: 0
});
exports.normalTokenBalance = (0, recoil_1.atom)({
    key: 'normalTokenBalance',
    default: []
});
exports.token22TokenBalance = (0, recoil_1.atom)({
    key: 'token22TokenBalance',
    default: []
});
exports.tokenCreationAtom = (0, recoil_1.atom)({
    key: 'tokenCreation',
    default: {
        tokenName: '',
        tokenSymbol: '',
        tokenImage: '',
        tokenSupply: 100,
        tokenDecimals: 9,
    }
});
