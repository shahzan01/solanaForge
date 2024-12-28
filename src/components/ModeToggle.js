"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeToggle = ModeToggle;
var lucide_react_1 = require("lucide-react");
var button_1 = require("../components/ui/button");
var useDarkMode_1 = require("../hooks/useDarkMode");
function ModeToggle() {
    var _a = (0, useDarkMode_1.useDarkMode)(), isDarkMode = _a.isDarkMode, toggleDarkMode = _a.toggleDarkMode;
    return (<button_1.Button variant="outline" size="icon" onClick={toggleDarkMode}>
      {isDarkMode ? (<lucide_react_1.Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100"/>) : (<lucide_react_1.Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0"/>)}
    </button_1.Button>);
}
