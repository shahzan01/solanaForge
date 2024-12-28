"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenBalance = TokenBalance;
/* eslint-disable react-hooks/exhaustive-deps */
var card_1 = require("../components/ui/card");
var recoil_1 = require("recoil");
var atoms_1 = require("../atoms");
var react_1 = require("react");
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
var spl_token_1 = require("@solana/spl-token");
var web3_js_1 = require("@solana/web3.js");
var fetchMetadata_1 = require("../utils/fetchMetadata");
var use_toast_1 = require("../hooks/use-toast");
function TokenBalance() {
    var _this = this;
    var connection = (0, wallet_adapter_react_1.useConnection)().connection;
    var wallet = (0, wallet_adapter_react_1.useWallet)();
    var toast = (0, use_toast_1.useToast)().toast;
    var _a = (0, recoil_1.useRecoilState)(atoms_1.normalTokenBalance), normalTokens = _a[0], setNormalTokens = _a[1];
    var _b = (0, recoil_1.useRecoilState)(atoms_1.token22TokenBalance), tokens22 = _b[0], setTokens22 = _b[1];
    (0, react_1.useEffect)(function () {
        var getBalances = function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenAccounts, tokens, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!wallet.publicKey) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, connection.getTokenAccountsByOwner(wallet.publicKey, {
                                programId: spl_token_1.TOKEN_PROGRAM_ID,
                            })];
                    case 2:
                        tokenAccounts = _a.sent();
                        tokens = tokenAccounts.value
                            .map(function (accountInfo) {
                            try {
                                var accountData = spl_token_1.AccountLayout.decode(accountInfo.account.data);
                                var balanceBigInt = accountData.amount;
                                var balance = Number(balanceBigInt) / 1e9;
                                var mintAddress = new web3_js_1.PublicKey(accountData.mint).toString();
                                var name_1 = "Unknown Token";
                                var symbol = "UNK";
                                return { mintAddress: mintAddress, balance: balance, name: name_1, symbol: symbol };
                            }
                            catch (error) {
                                toast({
                                    variant: "destructive",
                                    title: "Uh oh! Error fetching token metadata",
                                    description: "".concat(error),
                                });
                                return null;
                            }
                        })
                            .filter(function (token) { return token !== null; });
                        setNormalTokens(tokens);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        toast({
                            variant: "destructive",
                            title: "Uh oh! Error fetching tokens",
                            description: "".concat(error_1),
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        var getBalances22 = function () { return __awaiter(_this, void 0, void 0, function () {
            var tokenAccounts, tokens, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!wallet.publicKey)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, connection.getTokenAccountsByOwner(wallet.publicKey, {
                                programId: spl_token_1.TOKEN_2022_PROGRAM_ID,
                            })];
                    case 2:
                        tokenAccounts = _a.sent();
                        tokens = tokenAccounts.value
                            .map(function (accountInfo) { return __awaiter(_this, void 0, void 0, function () {
                            var accountData, balanceBigInt, balance, mintAddress, metadata, name_2, symbol, imageUrl, data, response, data, error_3, error_4;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 9, , 10]);
                                        accountData = spl_token_1.AccountLayout.decode(accountInfo.account.data);
                                        balanceBigInt = accountData.amount;
                                        balance = Number(balanceBigInt) / 1e9;
                                        mintAddress = new web3_js_1.PublicKey(accountData.mint).toString();
                                        return [4 /*yield*/, (0, spl_token_1.getTokenMetadata)(connection, new web3_js_1.PublicKey(mintAddress), "confirmed", spl_token_1.TOKEN_2022_PROGRAM_ID)];
                                    case 1:
                                        metadata = _a.sent();
                                        name_2 = metadata === null || metadata === void 0 ? void 0 : metadata.name;
                                        symbol = metadata === null || metadata === void 0 ? void 0 : metadata.symbol;
                                        imageUrl = "";
                                        if (!(metadata === null || metadata === void 0 ? void 0 : metadata.uri.startsWith("ipfs"))) return [3 /*break*/, 3];
                                        return [4 /*yield*/, fetchMetadata_1.default.fetchMetadataWithFallback(metadata.uri)];
                                    case 2:
                                        data = _a.sent();
                                        imageUrl = data.tokenImage;
                                        return [3 /*break*/, 8];
                                    case 3:
                                        if (!metadata) {
                                            return [2 /*return*/];
                                        }
                                        _a.label = 4;
                                    case 4:
                                        _a.trys.push([4, 7, , 8]);
                                        return [4 /*yield*/, fetch(metadata.uri, {
                                                method: "GET",
                                            })];
                                    case 5:
                                        response = _a.sent();
                                        return [4 /*yield*/, response.json()];
                                    case 6:
                                        data = _a.sent();
                                        imageUrl = data.image;
                                        return [3 /*break*/, 8];
                                    case 7:
                                        error_3 = _a.sent();
                                        console.log(error_3);
                                        return [3 /*break*/, 8];
                                    case 8:
                                        if (!imageUrl) {
                                            imageUrl =
                                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg600Xa4ws6jp54kMDNGYF232lIhY51QJqEA&s";
                                        }
                                        return [2 /*return*/, { mintAddress: mintAddress, balance: balance, name: name_2, symbol: symbol, imageUrl: imageUrl }];
                                    case 9:
                                        error_4 = _a.sent();
                                        toast({
                                            variant: "destructive",
                                            title: "Uh oh! Error fetching token metadata",
                                            description: "".concat(error_4),
                                        });
                                        return [2 /*return*/, null];
                                    case 10: return [2 /*return*/];
                                }
                            });
                        }); })
                            .filter(function (token) { return token !== null; });
                        Promise.all(tokens)
                            .then(function (resolvedTokens) {
                            var validTokens = resolvedTokens.filter(function (token) { return token !== null; });
                            setTokens22(validTokens);
                        })
                            .catch(function (error) {
                            console.error("Error resolving token promises:", error);
                            toast({
                                variant: "destructive",
                                title: "Uh oh! Error resolving token promises",
                                description: "".concat(error),
                            });
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        toast({
                            variant: "destructive",
                            title: "Uh oh! Error fetching tokens",
                            description: "".concat(error_2),
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        if (wallet.publicKey) {
            getBalances();
            getBalances22();
        }
    }, [connection, setNormalTokens, setTokens22, wallet]);
    return (<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {!wallet.publicKey && <p className="ml-2">Wallet not connected</p>}
      {wallet.publicKey && !normalTokens.length && !tokens22.length && (<p className="ml-2">No Tokens Present</p>)}

      {wallet.publicKey &&
            tokens22.map(function (token) { return (<card_1.Card key={token.mintAddress} className="overflow-hidden">
            <card_1.CardContent className="p-0">
              <div className="flex items-center space-x-4 p-4">
                <div className="relative h-12 w-12 max-lg:h-fit max-lg:w-fit rounded-lg">
                  <img src={token.imageUrl} alt={token.name} className="rounded-full object-cover max-lg:w-10 max-lg:h-10"/>
                </div>
                <div className="space-y-1 max-sm:w-[70vw] max-lg:w-[30vw]">
                  <h3 className="font-semibold leading-none tracking-tight">
                    {token.name}
                  </h3>
                  <p className="text-sm overflow-clip text-ellipsis">
                    {token.mintAddress}
                  </p>
                  <p className="font-bold">
                    {token.balance} {token.symbol}
                  </p>
                </div>
              </div>
            </card_1.CardContent>
          </card_1.Card>); })}

      {wallet.publicKey &&
            normalTokens.map(function (token) { return (<card_1.Card key={token.mintAddress} className="overflow-hidden">
            <card_1.CardContent className="p-0">
              <div className="flex items-center space-x-4 p-4">
                <div className="relative px-2 h-10 w-10 max-sm:h-12 max-sm:w-12 flex items-center justify-center rounded-full bg-gray-200 dark:text-black">
                  <span className="text-xs font-semibold">
                    {token.mintAddress.substring(0, 4)}
                  </span>
                </div>
                <div className="space-y-1 max-sm:w-[70vw]">
                  <h3 className="font-semibold leading-none tracking-tight">
                    {token.name}
                  </h3>
                  <p className="text-sm overflow-clip text-ellipsis">
                    {token.mintAddress}
                  </p>
                  <p className="font-bold">
                    {token.balance} {token.symbol}
                  </p>
                </div>
              </div>
            </card_1.CardContent>
          </card_1.Card>); })}
    </div>);
}
