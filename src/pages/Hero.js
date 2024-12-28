"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var THREE = require("three");
var link_1 = require("next/link");
var vanta_globe_1 = require("vanta/src/vanta.globe");
var CustomWalletButton_1 = require("../components/CustomWalletButton");
var Hero = function () {
    var _a = (0, react_1.useState)(0), vantaEffect = _a[0], setVantaEffect = _a[1];
    var vantaRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (!vantaEffect) {
            setVantaEffect((0, vanta_globe_1.default)({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                scaleMobile: 1.0,
                size: 1,
                color: 0x484848,
                color2: 0x525252,
                backgroundColor: "#09090b",
            }));
        }
    }, [vantaEffect]);
    return (<main ref={vantaRef} className="flex min-h-screen flex-col justify-center px-16">
      <framer_motion_1.motion.p initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeInOut",
        }} className="mb-4 flex flex-col gap-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-4xl font-medium tracking-tight text-transparent md:text-6xl">
        <p>SolanaForge</p>
        <p>Where Ideas Transform Into Tokens. </p>
      </framer_motion_1.motion.p>
      <framer_motion_1.motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{
            delay: 0.3,
            duration: 1.2,
            ease: "easeInOut",
        }} className="flex flex-col self-start">
        <CustomWalletButton_1.default />
        <link_1.default href={"/home"} className="mt-5 flex items-center gap-2 self-start px-6">
          <p className="text-md bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent">
            Discover
          </p>
          <lucide_react_1.ChevronRightIcon color="#475569"/>
        </link_1.default>
      </framer_motion_1.motion.div>
    </main>);
};
exports.default = Hero;
