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
exports.TransferForm = TransferForm;
/* eslint-disable react-hooks/exhaustive-deps */
var button_1 = require("../components/ui/button");
var card_1 = require("../components/ui/card");
var input_1 = require("../components/ui/input");
var label_1 = require("../components/ui/label");
var select_1 = require("../components/ui/select");
var react_1 = require("react");
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
var spl_token_1 = require("@solana/spl-token");
var web3_js_1 = require("@solana/web3.js");
var use_toast_1 = require("../hooks/use-toast");
function TransferForm() {
    var _this = this;
    var _a = (0, react_1.useState)([]), normatTokens = _a[0], setNormalTokens = _a[1];
    var _b = (0, react_1.useState)([]), splTokens = _b[0], setSplTokens = _b[1];
    var _c = (0, react_1.useState)(), selectedTokenType = _c[0], setSelectedTokenType = _c[1];
    var _d = (0, react_1.useState)("Bk3vZPEA5STZTrytbx2YhK57rtQ21rDSPhmiv8UzUVdv"), selectedToken = _d[0], setSelectedToken = _d[1];
    var _e = (0, react_1.useState)("578xpu1oZP9HfL1uMP98bVDpbcwbJwCn2T2xYz3uhML1"), recipient = _e[0], setRecipient = _e[1];
    var _f = (0, react_1.useState)(), amount = _f[0], setAmount = _f[1];
    var connection = (0, wallet_adapter_react_1.useConnection)().connection;
    var wallet = (0, wallet_adapter_react_1.useWallet)();
    var toast = (0, use_toast_1.useToast)().toast;
    var fetchNormalTokens = function () { return __awaiter(_this, void 0, void 0, function () {
        var tokenMint, tokens;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.getParsedTokenAccountsByOwner(wallet.publicKey, { programId: spl_token_1.TOKEN_PROGRAM_ID })];
                case 1:
                    tokenMint = _a.sent();
                    tokens = tokenMint.value.map(function (account, index) { return ({
                        mint: account.account.data.parsed.info.mint,
                        balance: account.account.data.parsed.info.tokenAmount.uiAmount,
                        name: "Unknown Token ".concat(index + 1),
                    }); });
                    setNormalTokens(tokens);
                    return [2 /*return*/];
            }
        });
    }); };
    var fetchSplTokens = function () { return __awaiter(_this, void 0, void 0, function () {
        var tokenMint22, tokens;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connection.getParsedTokenAccountsByOwner(wallet.publicKey, { programId: spl_token_1.TOKEN_2022_PROGRAM_ID })];
                case 1:
                    tokenMint22 = _a.sent();
                    return [4 /*yield*/, Promise.all(tokenMint22.value.map(function (account) { return __awaiter(_this, void 0, void 0, function () {
                            var mint, balance, metadata;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        mint = account.account.data.parsed.info.mint;
                                        balance = account.account.data.parsed.info.tokenAmount.uiAmount;
                                        return [4 /*yield*/, (0, spl_token_1.getTokenMetadata)(connection, new web3_js_1.PublicKey(mint), "confirmed", spl_token_1.TOKEN_2022_PROGRAM_ID)];
                                    case 1:
                                        metadata = _a.sent();
                                        return [2 /*return*/, {
                                                mint: mint,
                                                balance: balance,
                                                name: (metadata === null || metadata === void 0 ? void 0 : metadata.name) || "Unknown Token-22",
                                                symbol: (metadata === null || metadata === void 0 ? void 0 : metadata.symbol) || "Coin",
                                            }];
                                }
                            });
                        }); }))];
                case 2:
                    tokens = _a.sent();
                    setSplTokens(tokens);
                    return [2 /*return*/];
            }
        });
    }); };
    var transferNormalToken = function () { return __awaiter(_this, void 0, void 0, function () {
        var sourceAccount, recipientPublicKey, recipientTokenAccounts, destinationAccountPubkey, ASSOCIATED_TOKEN_PROGRAM_ID, associatedTokenAddress, createAssociatedAccountInstruction, createTransaction, transferInstruction, transferTransaction, latestBlockHash, signature, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!wallet.publicKey) {
                        return [2 /*return*/, toast({
                                variant: "destructive",
                                title: "Uh oh! Wallet not Connected",
                            })];
                    }
                    if (!recipient || !amount || Number(amount) < 0) {
                        return [2 /*return*/, toast({
                                variant: "destructive",
                                title: "Provide the correct credentials",
                            })];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 9, , 10]);
                    return [4 /*yield*/, (0, spl_token_1.getOrCreateAssociatedTokenAccount)(connection, wallet.publicKey, new web3_js_1.PublicKey(selectedToken), wallet.publicKey)];
                case 2:
                    sourceAccount = _a.sent();
                    recipientPublicKey = new web3_js_1.PublicKey(recipient);
                    return [4 /*yield*/, connection.getTokenAccountsByOwner(recipientPublicKey, { programId: spl_token_1.TOKEN_PROGRAM_ID })];
                case 3:
                    recipientTokenAccounts = _a.sent();
                    destinationAccountPubkey = void 0;
                    if (!(recipientTokenAccounts.value.length === 0)) return [3 /*break*/, 5];
                    ASSOCIATED_TOKEN_PROGRAM_ID = new web3_js_1.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
                    associatedTokenAddress = web3_js_1.PublicKey.findProgramAddressSync([
                        recipientPublicKey.toBuffer(),
                        spl_token_1.TOKEN_PROGRAM_ID.toBuffer(),
                        new web3_js_1.PublicKey(selectedToken).toBuffer(),
                    ], ASSOCIATED_TOKEN_PROGRAM_ID)[0];
                    destinationAccountPubkey = associatedTokenAddress;
                    if (!wallet.publicKey) {
                        return [2 /*return*/, null];
                    }
                    createAssociatedAccountInstruction = (0, spl_token_1.createAssociatedTokenAccountInstruction)(wallet.publicKey, associatedTokenAddress, recipientPublicKey, new web3_js_1.PublicKey(selectedToken), spl_token_1.TOKEN_PROGRAM_ID);
                    createTransaction = new web3_js_1.Transaction().add(createAssociatedAccountInstruction);
                    return [4 /*yield*/, wallet.sendTransaction(createTransaction, connection)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    destinationAccountPubkey = recipientTokenAccounts.value[0].pubkey;
                    _a.label = 6;
                case 6:
                    if (!wallet.publicKey || !amount) {
                        return [2 /*return*/, null];
                    }
                    transferInstruction = (0, spl_token_1.createTransferInstruction)(sourceAccount.address, destinationAccountPubkey, wallet.publicKey, Number(amount) * Math.pow(10, 9));
                    transferTransaction = new web3_js_1.Transaction().add(transferInstruction);
                    return [4 /*yield*/, connection.getLatestBlockhash("confirmed")];
                case 7:
                    latestBlockHash = _a.sent();
                    transferTransaction.recentBlockhash = latestBlockHash.blockhash;
                    transferTransaction.feePayer = wallet.publicKey;
                    return [4 /*yield*/, wallet.sendTransaction(transferTransaction, connection)];
                case 8:
                    signature = _a.sent();
                    toast({
                        variant: "default",
                        title: "Transaction is successful!",
                        description: "".concat(signature),
                    });
                    setAmount("");
                    setRecipient("");
                    return [3 /*break*/, 10];
                case 9:
                    error_1 = _a.sent();
                    return [2 /*return*/, toast({
                            variant: "destructive",
                            title: "Transaction failed!",
                            description: "".concat(error_1),
                        })];
                case 10: return [2 /*return*/];
            }
        });
    }); };
    var transferSPLToken = function () { return __awaiter(_this, void 0, void 0, function () {
        var recipientAddress, mint, sendersATA, associatedToken, error_2, transaction, latestBlockhash, signature_1, amountInLamports, tx, signature, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!wallet.publicKey) {
                        return [2 /*return*/, toast({
                                variant: "destructive",
                                title: "Uh oh! Wallet not Connected",
                            })];
                    }
                    if (!recipient || !amount || Number(amount) <= 0) {
                        return [2 /*return*/, toast({
                                variant: "destructive",
                                title: "Provide the correct credentials",
                            })];
                    }
                    recipientAddress = new web3_js_1.PublicKey(recipient);
                    mint = new web3_js_1.PublicKey(selectedToken);
                    return [4 /*yield*/, (0, spl_token_1.getAssociatedTokenAddressSync)(mint, wallet.publicKey, false, spl_token_1.TOKEN_2022_PROGRAM_ID)];
                case 1:
                    sendersATA = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 14, , 15]);
                    return [4 /*yield*/, (0, spl_token_1.getAssociatedTokenAddressSync)(mint, recipientAddress, true, spl_token_1.TOKEN_2022_PROGRAM_ID)];
                case 3:
                    associatedToken = _a.sent();
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, 6, , 12]);
                    return [4 /*yield*/, (0, spl_token_1.getAccount)(connection, associatedToken, "confirmed", spl_token_1.TOKEN_2022_PROGRAM_ID)];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 12];
                case 6:
                    error_2 = _a.sent();
                    if (!(error_2 instanceof spl_token_1.TokenAccountNotFoundError ||
                        error_2 instanceof spl_token_1.TokenInvalidAccountOwnerError)) return [3 /*break*/, 10];
                    transaction = new web3_js_1.Transaction().add((0, spl_token_1.createAssociatedTokenAccountInstruction)(wallet.publicKey, associatedToken, recipientAddress, mint, spl_token_1.TOKEN_2022_PROGRAM_ID));
                    return [4 /*yield*/, connection.getLatestBlockhash()];
                case 7:
                    latestBlockhash = _a.sent();
                    transaction.recentBlockhash = latestBlockhash.blockhash;
                    transaction.feePayer = wallet.publicKey;
                    return [4 /*yield*/, wallet.sendTransaction(transaction, connection)];
                case 8:
                    signature_1 = _a.sent();
                    return [4 /*yield*/, connection.confirmTransaction(signature_1)];
                case 9:
                    _a.sent();
                    toast({
                        variant: "default",
                        title: "Associated token account created",
                        description: "".concat(recipient),
                    });
                    return [3 /*break*/, 11];
                case 10: return [2 /*return*/, toast({
                        variant: "destructive",
                        title: "Error while checking token account",
                        description: "".concat(error_2),
                    })];
                case 11: return [3 /*break*/, 12];
                case 12:
                    amountInLamports = Number(amount) * Math.pow(10, 9);
                    tx = new web3_js_1.Transaction().add((0, spl_token_1.createTransferInstruction)(sendersATA, associatedToken, wallet.publicKey, amountInLamports, [], spl_token_1.TOKEN_2022_PROGRAM_ID));
                    return [4 /*yield*/, wallet.sendTransaction(tx, connection)];
                case 13:
                    signature = _a.sent();
                    toast({
                        variant: "default",
                        title: "Transaction Sent Successfully!",
                        description: "".concat(signature),
                    });
                    return [3 /*break*/, 15];
                case 14:
                    error_3 = _a.sent();
                    return [2 /*return*/, toast({
                            variant: "destructive",
                            title: "Transaction failed!",
                            description: "".concat(error_3),
                        })];
                case 15: return [2 /*return*/];
            }
        });
    }); };
    var handleTransfer = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(selectedTokenType === "spl")) return [3 /*break*/, 2];
                    return [4 /*yield*/, transferSPLToken()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    if (!(selectedTokenType === "normal")) return [3 /*break*/, 4];
                    return [4 /*yield*/, transferNormalToken()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        fetchNormalTokens();
        fetchSplTokens();
    }, [connection, wallet, selectedTokenType]);
    return (<card_1.Card>
      <card_1.CardHeader>
        <card_1.CardTitle>Transfer Tokens</card_1.CardTitle>
        <card_1.CardDescription>Send tokens to another wallet address</card_1.CardDescription>
      </card_1.CardHeader>
      <card_1.CardContent className="space-y-4">
        <div className="space-y-2">
          <label_1.Label htmlFor="type">Token Type</label_1.Label>
          <select_1.Select onValueChange={function (value) { return setSelectedTokenType(value); }}>
            <select_1.SelectTrigger>
              <select_1.SelectValue placeholder="Select token type"/>
            </select_1.SelectTrigger>
            <select_1.SelectContent>
              <select_1.SelectItem value="normal">Normal Token</select_1.SelectItem>
              <select_1.SelectItem value="spl">SPL Token</select_1.SelectItem>
            </select_1.SelectContent>
          </select_1.Select>
        </div>
        <div className="space-y-2">
          <label_1.Label htmlFor="token">Choose Token</label_1.Label>
          <select_1.Select onValueChange={function (value) { return setSelectedToken(value); }}>
            <select_1.SelectTrigger>
              <select_1.SelectValue placeholder="Select a token"/>
            </select_1.SelectTrigger>
            <select_1.SelectContent>
              {selectedTokenType === "normal" &&
            (normatTokens.length ? (normatTokens.map(function (token, index) { return (<select_1.SelectItem value={token.mint} key={index}>
                      {token.name} ({token.balance})
                    </select_1.SelectItem>); })) : (<select_1.SelectItem value="g">Tokens Not Found</select_1.SelectItem>))}

              {selectedTokenType === "spl" &&
            (splTokens.length ? (splTokens.map(function (token, index) { return (<select_1.SelectItem value={token.mint} key={index}>
                      {token.name} ({token.balance})
                    </select_1.SelectItem>); })) : (<select_1.SelectItem value="g">Tokens Not Found</select_1.SelectItem>))}
            </select_1.SelectContent>
          </select_1.Select>
        </div>
        <div className="space-y-2">
          <label_1.Label htmlFor="address">Recipient Address</label_1.Label>
          <input_1.Input id="address" placeholder="Enter recipient's wallet address" onChange={function (e) { return setRecipient(e.target.value); }}/>
        </div>
        <div className="space-y-2">
          <label_1.Label htmlFor="amount">Amount</label_1.Label>
          <input_1.Input id="amount" type="number" placeholder="0.00" onChange={function (e) { return setAmount(e.target.value); }}/>
        </div>
        <button_1.Button className="w-full" onClick={handleTransfer}>
          Send Transaction
        </button_1.Button>
      </card_1.CardContent>
    </card_1.Card>);
}
