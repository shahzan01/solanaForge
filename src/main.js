"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_tsx_1 = require("./App.tsx");
var SolanaChainProvider_tsx_1 = require("./provider/SolanaChainProvider.tsx");
var ConnectionProvider_tsx_1 = require("./provider/ConnectionProvider.tsx");
var react_router_dom_1 = require("react-router-dom");
var recoil_1 = require("recoil");
var TransferSOL_tsx_1 = require("./components/TransferSOL.tsx");
var Account_tsx_1 = require("./components/Account.tsx");
var TokenRoute_tsx_1 = require("./components/TokenRoute.tsx");
var toaster_1 = require("./components/ui/toaster");
var DarkModeProvider_tsx_1 = require("./provider/DarkModeProvider.tsx");
var Hero_tsx_1 = require("./pages/Hero.tsx");
(0, client_1.createRoot)(document.getElementById("root")).render(<react_1.StrictMode>
    <DarkModeProvider_tsx_1.default>
      <recoil_1.RecoilRoot>
        <SolanaChainProvider_tsx_1.default>
          <ConnectionProvider_tsx_1.default>
            <react_router_dom_1.BrowserRouter>
              <react_router_dom_1.Routes>
                <react_router_dom_1.Route path="/" element={<Hero_tsx_1.default />}/>
                <react_router_dom_1.Route path="/home" element={<App_tsx_1.default />}/>
                <react_router_dom_1.Route path="/token" element={<TokenRoute_tsx_1.default />}/>
                <react_router_dom_1.Route path="/transaction" element={<div className="px-8 max-sm:px-2">
                      <TransferSOL_tsx_1.default />
                    </div>}/>
                <react_router_dom_1.Route path="/account" element={<div className="px-8 max-sm:px-2 mt-10">
                      <Account_tsx_1.default />
                    </div>}/>
              </react_router_dom_1.Routes>
            </react_router_dom_1.BrowserRouter>
          </ConnectionProvider_tsx_1.default>
        </SolanaChainProvider_tsx_1.default>
      </recoil_1.RecoilRoot>
      <toaster_1.Toaster />
    </DarkModeProvider_tsx_1.default>
  </react_1.StrictMode>);
