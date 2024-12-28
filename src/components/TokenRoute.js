"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TokenRoute;
var tabs_1 = require("../components/ui/tabs");
var TokenBalance_1 = require("./TokenBalance");
var TransferToken_1 = require("./TransferToken");
var CreateTokenForm_1 = require("./CreateTokenForm");
var Header_1 = require("./Header");
function TokenRoute() {
    return (<>
      <Header_1.Header></Header_1.Header>
      <tabs_1.Tabs defaultValue="balance" className="space-y-4 flex flex-col items-center mt-4 w-full max-sm:px-2">
        <tabs_1.TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <tabs_1.TabsTrigger value="balance"> Token Balance </tabs_1.TabsTrigger>
          <tabs_1.TabsTrigger value="transfer"> Transfer </tabs_1.TabsTrigger>
          <tabs_1.TabsTrigger value="create"> Create Token </tabs_1.TabsTrigger>
        </tabs_1.TabsList>
        <tabs_1.TabsContent value="balance" className="space-y-4 flex justify-center">
          <TokenBalance_1.TokenBalance />
        </tabs_1.TabsContent>
        <tabs_1.TabsContent value="transfer" className="w-full px-8 max-sm:px-0">
          <TransferToken_1.TransferForm />
        </tabs_1.TabsContent>
        <tabs_1.TabsContent value="create" className="w-full px-8 pb-2 max-sm:px-0">
          <CreateTokenForm_1.CreateTokenForm />
        </tabs_1.TabsContent>
      </tabs_1.Tabs>
    </>);
}
