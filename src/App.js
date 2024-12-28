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
exports.default = Home;
var tabs_1 = require("./components/ui/tabs");
var TokenBalance_1 = require("./components/TokenBalance");
var CreateTokenForm_1 = require("./components/CreateTokenForm");
var TransferToken_1 = require("./components/TransferToken");
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
var recoil_1 = require("recoil");
var atoms_1 = require("./atoms");
var react_1 = require("react");
var Account_1 = require("./components/Account");
var Header_1 = require("./components/Header");
var react_hot_toast_1 = require("react-hot-toast");
function Home() {
    var _this = this;
    var connection = (0, wallet_adapter_react_1.useConnection)().connection;
    var wallet = (0, wallet_adapter_react_1.useWallet)();
    var setWalletBalance = (0, recoil_1.useSetRecoilState)(atoms_1.walletBalanceAtom);
    (0, react_1.useEffect)(function () {
        var toastid = react_hot_toast_1.toast.loading("Loading...");
        var fetchBalance = function () { return __awaiter(_this, void 0, void 0, function () {
            var walletBalance, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!wallet.publicKey) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, connection.getBalance(wallet.publicKey)];
                    case 2:
                        walletBalance = (_a.sent()) / 1000000000;
                        setWalletBalance(walletBalance);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        setWalletBalance(0);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        react_hot_toast_1.toast.dismiss(toastid);
        fetchBalance();
    }, [connection, setWalletBalance, wallet]);
    return (<>
      <Header_1.Header></Header_1.Header>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"/>
        <main className="container relative mx-auto p-6 max-sm:py-6 max-sm:px-2">
          <div className="flex flex-col gap-8">
            <section className="text-center space-y-4 pt-12 pb-8">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                SolanaForge
              </h1>
              <p className="mx-auto max-w-[48rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Experience the next-generation Solana wallet adapter, designed
                to effortlessly manage your SOL and tokens with unparalleled
                ease and efficiency.
              </p>
              <div className="flex justify-center gap-4">
                <a href="/token"></a>
              </div>
            </section>

            <Account_1.default />

            <tabs_1.Tabs defaultValue="balance" className="space-y-4">
              <tabs_1.TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                <tabs_1.TabsTrigger value="balance">Token Balance</tabs_1.TabsTrigger>
                <tabs_1.TabsTrigger value="transfer">Transfer</tabs_1.TabsTrigger>
                <tabs_1.TabsTrigger value="create">Create Token</tabs_1.TabsTrigger>
              </tabs_1.TabsList>
              <tabs_1.TabsContent value="balance" className="space-y-4">
                <TokenBalance_1.TokenBalance />
              </tabs_1.TabsContent>
              <tabs_1.TabsContent value="transfer">
                <TransferToken_1.TransferForm />
              </tabs_1.TabsContent>
              <tabs_1.TabsContent value="create">
                <CreateTokenForm_1.CreateTokenForm />
              </tabs_1.TabsContent>
            </tabs_1.Tabs>
          </div>
        </main>
      </div>
    </>);
}
