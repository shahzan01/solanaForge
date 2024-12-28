"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Account;
var lucide_react_1 = require("lucide-react");
var card_1 = require("./ui/card");
var button_1 = require("./ui/button");
var getAirdrop_1 = require("../utils/getAirdrop");
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
var atoms_1 = require("../atoms");
var recoil_1 = require("recoil");
var use_toast_1 = require("../hooks/use-toast");
function Account() {
    var connection = (0, wallet_adapter_react_1.useConnection)().connection;
    var publicKey = (0, wallet_adapter_react_1.useWallet)().publicKey;
    var _a = (0, recoil_1.useRecoilState)(atoms_1.walletBalanceAtom), walletBalance = _a[0], setWalletBalance = _a[1];
    var toast = (0, use_toast_1.useToast)().toast;
    return (<>
      <card_1.Card className="border-2">
        <card_1.CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <card_1.CardTitle>Wallet Overview</card_1.CardTitle>
              <card_1.CardDescription>
                Manage your tokens and transactions
              </card_1.CardDescription>
            </div>
            <lucide_react_1.Wallet className="w-8 h-8 text-primary"/>
          </div>
        </card_1.CardHeader>
        <card_1.CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg bg-card">
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Total Balance</p>
              <p className="text-2xl font-bold">
                {" "}
                {"".concat(publicKey ? walletBalance + " SOL" : "Wallet Not Connected")}
              </p>
            </div>
            <button_1.Button onClick={function () {
            return (0, getAirdrop_1.getAirdrop)(publicKey, connection, setWalletBalance, toast);
        }}>
              Get Airdrop
            </button_1.Button>
          </div>
        </card_1.CardContent>
      </card_1.Card>
    </>);
}
