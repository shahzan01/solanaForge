"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = Header;
var button_1 = require("../components/ui/button");
var framer_motion_1 = require("framer-motion");
var ModeToggle_1 = require("./ModeToggle");
var react_router_dom_1 = require("react-router-dom");
var wallet_adapter_react_ui_1 = require("@solana/wallet-adapter-react-ui");
var useSolanaChain_1 = require("../hooks/useSolanaChain");
var useDarkMode_1 = require("../hooks/useDarkMode");
function Header() {
    var _a = (0, useSolanaChain_1.useSolanaChain)(), isDevnet = _a.isDevnet, toggleChain = _a.toggleChain;
    var isDarkMode = (0, useDarkMode_1.useDarkMode)().isDarkMode;
    return (<framer_motion_1.motion.header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-none backdrop-blur-sm" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <a href="/home" className="flex items-center space-x-2">
            {isDarkMode ? (<img src="src\assets\solana-lighty.png" alt="logo"/>) : (<img src="src\assets\solana-dark.png" alt="logo"/>)}
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              SolanaForge
            </span>
          </a>
          <nav className="hidden md:flex gap-6">
            <react_router_dom_1.Link to="/token" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">
              Tokens
            </react_router_dom_1.Link>

            <react_router_dom_1.Link to="/transaction" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50">
              Transaction
            </react_router_dom_1.Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button_1.Button variant="outline" size="sm" className="hidden sm:flex gap-2 border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-white dark:hover:bg-gray-900" onClick={toggleChain}>
            <span className="relative flex h-2 w-2">
              <span className={"animate-ping absolute inline-flex h-full w-full rounded-full ".concat(isDevnet ? "bg-green-400" : "bg-red-400", "  opacity-75")}></span>
              <span className={"relative inline-flex rounded-full h-2 w-2 ".concat(isDevnet ? "bg-green-500" : "bg-red-500")}></span>
            </span>
            Devnet
          </button_1.Button>
          <wallet_adapter_react_ui_1.WalletMultiButton style={{
            backgroundColor: "transparent",
            color: "".concat(isDarkMode ? "#ffffff" : "#000000"),
            padding: "2px 16px",
            borderColor: "#d1d5db",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: "bold",
        }}/>
          <ModeToggle_1.ModeToggle />
        </div>
      </div>
    </framer_motion_1.motion.header>);
}
