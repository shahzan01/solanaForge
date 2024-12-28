"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.CreateTokenForm = CreateTokenForm;
/* eslint-disable @typescript-eslint/no-explicit-any */
var atoms_1 = require("../atoms");
var button_1 = require("../components/ui/button");
var card_1 = require("../components/ui/card");
var input_1 = require("../components/ui/input");
var label_1 = require("../components/ui/label");
var recoil_1 = require("recoil");
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
var web3_js_1 = require("@solana/web3.js");
var uploadMetadata_1 = require("../utils/uploadMetadata");
var spl_token_1 = require("@solana/spl-token");
var spl_token_metadata_1 = require("@solana/spl-token-metadata");
var use_toast_1 = require("../hooks/use-toast");
function CreateTokenForm() {
    var _this = this;
    var _a = (0, recoil_1.useRecoilState)(atoms_1.tokenCreationAtom), tokenData = _a[0], setTokenData = _a[1];
    var connection = (0, wallet_adapter_react_1.useConnection)().connection;
    var wallet = (0, wallet_adapter_react_1.useWallet)();
    var toast = (0, use_toast_1.useToast)().toast;
    var handleInputChange = function (event) {
        var _a = event.target, id = _a.id, value = _a.value;
        setTokenData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[id] = value, _a)));
        });
    };
    var uploadMetadata = function () { return __awaiter(_this, void 0, void 0, function () {
        var metadata, metadataUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    metadata = {
                        tokenName: tokenData.tokenName,
                        tokenSymbol: tokenData.tokenSymbol,
                        description: "Created using the SolanaForge",
                        tokenImage: tokenData.tokenImage,
                    };
                    return [4 /*yield*/, uploadMetadata_1.default.uploadMetadata(metadata)];
                case 1:
                    metadataUrl = _a.sent();
                    return [2 /*return*/, metadataUrl];
            }
        });
    }); };
    var createToken = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var mintKeypair, metadataUri, metadata, mintLen, metadataLen, lamports, transaction, _a, associatedToken, transaction2, signature, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    if (!wallet.publicKey) {
                        return [2 /*return*/, toast({
                                variant: "destructive",
                                title: "Uh oh! Wallet not Connected",
                            })];
                    }
                    if (!tokenData) {
                        return [2 /*return*/, toast({
                                variant: "destructive",
                                title: "Provide the correct credentials",
                            })];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, , 8]);
                    mintKeypair = web3_js_1.Keypair.generate();
                    return [4 /*yield*/, uploadMetadata()];
                case 2:
                    metadataUri = _b.sent();
                    if (!metadataUri) {
                        metadataUri = import.meta.env.VITE_DEFAULT_URI;
                        return [2 /*return*/, toast({
                                variant: "destructive",
                                title: "Failed to upload metadata",
                            })];
                    }
                    metadata = {
                        mint: mintKeypair.publicKey,
                        name: tokenData.tokenName,
                        symbol: tokenData.tokenSymbol,
                        uri: metadataUri,
                        additionalMetadata: [],
                    };
                    mintLen = (0, spl_token_1.getMintLen)([spl_token_1.ExtensionType.MetadataPointer]);
                    metadataLen = spl_token_1.TYPE_SIZE + spl_token_1.LENGTH_SIZE + (0, spl_token_metadata_1.pack)(metadata).length;
                    return [4 /*yield*/, connection.getMinimumBalanceForRentExemption(mintLen + metadataLen)];
                case 3:
                    lamports = _b.sent();
                    transaction = new web3_js_1.Transaction().add(web3_js_1.SystemProgram.createAccount({
                        fromPubkey: wallet.publicKey,
                        newAccountPubkey: mintKeypair.publicKey,
                        space: mintLen,
                        lamports: lamports,
                        programId: spl_token_1.TOKEN_2022_PROGRAM_ID,
                    }), (0, spl_token_1.createInitializeMetadataPointerInstruction)(mintKeypair.publicKey, wallet.publicKey, mintKeypair.publicKey, spl_token_1.TOKEN_2022_PROGRAM_ID), (0, spl_token_1.createInitializeMintInstruction)(mintKeypair.publicKey, tokenData.tokenDecimals, wallet.publicKey, null, spl_token_1.TOKEN_2022_PROGRAM_ID), (0, spl_token_metadata_1.createInitializeInstruction)({
                        programId: spl_token_1.TOKEN_2022_PROGRAM_ID,
                        mint: mintKeypair.publicKey,
                        metadata: mintKeypair.publicKey,
                        name: metadata.name,
                        symbol: metadata.symbol,
                        uri: metadata.uri,
                        mintAuthority: wallet.publicKey,
                        updateAuthority: wallet.publicKey,
                    }));
                    transaction.feePayer = wallet.publicKey;
                    _a = transaction;
                    return [4 /*yield*/, connection.getLatestBlockhash()];
                case 4:
                    _a.recentBlockhash = (_b.sent()).blockhash;
                    transaction.partialSign(mintKeypair);
                    return [4 /*yield*/, wallet.sendTransaction(transaction, connection)];
                case 5:
                    _b.sent();
                    toast({
                        variant: "default",
                        title: "Token mint created",
                        description: "".concat(mintKeypair.publicKey.toBase58()),
                    });
                    associatedToken = (0, spl_token_1.getAssociatedTokenAddressSync)(mintKeypair.publicKey, wallet.publicKey, false, spl_token_1.TOKEN_2022_PROGRAM_ID);
                    transaction2 = new web3_js_1.Transaction().add((0, spl_token_1.createAssociatedTokenAccountInstruction)(wallet.publicKey, associatedToken, wallet.publicKey, mintKeypair.publicKey, spl_token_1.TOKEN_2022_PROGRAM_ID), (0, spl_token_1.createMintToInstruction)(mintKeypair.publicKey, associatedToken, wallet.publicKey, tokenData.tokenSupply * Math.pow(10, tokenData.tokenDecimals), [], spl_token_1.TOKEN_2022_PROGRAM_ID));
                    return [4 /*yield*/, wallet.sendTransaction(transaction2, connection)];
                case 6:
                    signature = _b.sent();
                    toast({
                        variant: "default",
                        title: "Token is created Successfully!",
                        description: "".concat(signature),
                    });
                    setTokenData({
                        tokenName: "",
                        tokenSymbol: "",
                        tokenImage: "",
                        tokenSupply: 0,
                        tokenDecimals: 0,
                    });
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _b.sent();
                    toast({
                        variant: "destructive",
                        title: "rror while creating token",
                        description: "".concat(error_1),
                    });
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    return (<card_1.Card>
      <card_1.CardHeader>
        <card_1.CardTitle>Create New Token</card_1.CardTitle>
        <card_1.CardDescription>
          Deploy a new token on Solana blockchain
        </card_1.CardDescription>
      </card_1.CardHeader>
      <card_1.CardContent className="space-y-4">
        <div className="space-y-2">
          <label_1.Label htmlFor="tokenName">Token Name</label_1.Label>
          <input_1.Input id="tokenName" placeholder="Enter token name" onChange={handleInputChange}/>
        </div>
        <div className="space-y-2">
          <label_1.Label htmlFor="tokenSymbol">Token Symbol</label_1.Label>
          <input_1.Input id="tokenSymbol" placeholder="Enter token symbol" onChange={handleInputChange}/>
        </div>
        <div className="space-y-2">
          <label_1.Label htmlFor="tokenImage">Image URL</label_1.Label>
          <input_1.Input id="tokenImage" type="text" placeholder="https://cat.png" onChange={handleInputChange}/>
        </div>
        <div className="space-y-2">
          <label_1.Label htmlFor="tokenDecimals">Decimals</label_1.Label>
          <input_1.Input id="tokenDecimals" type="number" placeholder="0-9" onChange={handleInputChange}/>
        </div>
        <div className="space-y-2">
          <label_1.Label htmlFor="tokenSupply">Initial Supply</label_1.Label>
          <input_1.Input id="tokenSupply" type="number" placeholder="1000000" onChange={handleInputChange}/>
        </div>
        <button_1.Button className="w-full" onClick={createToken}>
          Create Token
        </button_1.Button>
      </card_1.CardContent>
    </card_1.Card>);
}
