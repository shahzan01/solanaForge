"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
var wallet_adapter_react_ui_1 = require("@solana/wallet-adapter-react-ui");
require("@solana/wallet-adapter-react-ui/styles.css");
var useSolanaChain_1 = require("../hooks/useSolanaChain");
var WalletContextProvider = function (_a) {
    var children = _a.children;
    var isDevnet = (0, useSolanaChain_1.useSolanaChain)().isDevnet;
    var endpoint = isDevnet
        ? import.meta.env.VITE_DEVNET_RPC_URL
        : import.meta.env.VITE_MAINNET_RPC_URL;
    return (<wallet_adapter_react_1.ConnectionProvider endpoint={endpoint}>
      <wallet_adapter_react_1.WalletProvider wallets={[]} autoConnect>
        <wallet_adapter_react_ui_1.WalletModalProvider>{children}</wallet_adapter_react_ui_1.WalletModalProvider>
      </wallet_adapter_react_1.WalletProvider>
    </wallet_adapter_react_1.ConnectionProvider>);
};
exports.default = WalletContextProvider;
