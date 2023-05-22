"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carousel = void 0;
const react_1 = __importStar(require("react"));
const Actions_1 = require("../Actions");
const TIMER = 300;
const RATIO = 3 / 4;
const Carousel = (_a) => {
    var { carouselData } = _a, rest = __rest(_a, ["carouselData"]);
    const [coordinate, setcoordinate] = (0, react_1.useState)();
    const [currentIndex, setcurrentIndex] = (0, react_1.useState)(2);
    const parentRef = (0, react_1.useRef)(null);
    const boxRef = (0, react_1.useRef)(null);
    const resizeHandler = (0, react_1.useCallback)(() => {
        var _a;
        const findCoordinate = (_a = parentRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        setcoordinate(findCoordinate);
    }, []);
    const preventClick = (0, react_1.useCallback)((e) => {
        boxRef.current.style.transitionDuration = TIMER + 'ms';
        e.target.style.pointerEvents = 'none';
        setTimeout(() => {
            e.target.style.pointerEvents = 'visible';
        }, TIMER);
    }, []);
    const resetTimer = (0, react_1.useCallback)((index) => {
        boxRef.current.style.transition = '0ms';
        setcurrentIndex(index);
    }, []);
    (0, react_1.useEffect)(() => {
        resizeHandler();
    }, [resizeHandler]);
    (0, react_1.useEffect)(() => {
        if (coordinate) {
            window.addEventListener('resize', resizeHandler);
        }
        return () => window.removeEventListener('resize', resizeHandler);
    }, [coordinate, resizeHandler]);
    const nextItemHandler = (e) => {
        preventClick(e);
        setcurrentIndex((prev) => prev + 1);
    };
    const prevItemHandler = (e) => {
        preventClick(e);
        setcurrentIndex((prev) => prev - 1);
    };
    const selectIndexHandler = (e, selectedIndex) => {
        preventClick(e);
        setcurrentIndex(selectedIndex + 1);
    };
    const transitionEndHandler = () => {
        if (currentIndex === carouselData.length + 1) {
            resetTimer(1);
        }
        if (currentIndex === 0) {
            resetTimer(carouselData.length);
        }
    };
    return (react_1.default.createElement("div", Object.assign({ className: "w-full shadow relative overflow-hidden", ref: parentRef }, rest, { dir: "ltr" }),
        react_1.default.createElement("div", { className: "flex w-full", style: {
                transform: `translateX(${-currentIndex * RATIO * (coordinate === null || coordinate === void 0 ? void 0 : coordinate.width)}px)`
            }, onTransitionEnd: transitionEndHandler, ref: boxRef },
            react_1.default.createElement("div", { className: "pr-4", style: { minWidth: RATIO * (coordinate === null || coordinate === void 0 ? void 0 : coordinate.width) || 0 } },
                react_1.default.createElement("div", { className: " border" },
                    " ",
                    carouselData[carouselData.length - 2].component)),
            react_1.default.createElement("div", { className: "pr-4", style: { minWidth: RATIO * (coordinate === null || coordinate === void 0 ? void 0 : coordinate.width) || 0 } },
                react_1.default.createElement("div", { className: " border" },
                    " ",
                    carouselData[carouselData.length - 1].component)),
            carouselData.map((el, index) => (react_1.default.createElement("div", { className: "pr-4", style: { minWidth: RATIO * (coordinate === null || coordinate === void 0 ? void 0 : coordinate.width) || 0 }, key: `carousel-item-${index}` },
                react_1.default.createElement("div", { className: " border" }, el.component)))),
            react_1.default.createElement("div", { className: "pr-4", style: { minWidth: RATIO * (coordinate === null || coordinate === void 0 ? void 0 : coordinate.width) || 0 } },
                react_1.default.createElement("div", { className: " border" }, carouselData[0].component)),
            react_1.default.createElement("div", { className: "pr-4", style: { minWidth: RATIO * (coordinate === null || coordinate === void 0 ? void 0 : coordinate.width) || 0 } },
                react_1.default.createElement("div", { className: " border" }, carouselData[1].component))),
        react_1.default.createElement("div", { className: "mx-auto w-full flex justify-center border border-red-300" }, carouselData.map((_, index) => (react_1.default.createElement("div", { className: `w-5  mx-1 my-3 cursor-pointer hover:bg-sky-500 ${currentIndex === index + 2 || currentIndex === index - 2 ? 'h-2 bg-sky-400' : 'h-1 bg-sky-300'}`, onClick: (e) => selectIndexHandler(e, index + 1), key: `carousel-index-${index}` })))),
        react_1.default.createElement(Actions_1.Button, { variant: "default", size: "sm", onClick: prevItemHandler }, "Prev"),
        react_1.default.createElement(Actions_1.Button, { variant: "default", size: "sm", onClick: nextItemHandler }, "Next")));
};
exports.Carousel = Carousel;
exports.Carousel.displayName = 'Carousel';
//# sourceMappingURL=Carousel.js.map