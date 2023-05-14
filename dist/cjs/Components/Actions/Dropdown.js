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
exports.Dropdown = void 0;
const react_1 = __importStar(require("react"));
exports.Dropdown = react_1.default.memo((_a) => {
    var { options, value, onSelect } = _a, rest = __rest(_a, ["options", "value", "onSelect"]);
    const SelectRef = (0, react_1.useRef)(null);
    const inputRef = (0, react_1.useRef)(null);
    const [showItems, setshowItems] = (0, react_1.useState)(false);
    const [localOptions, setlocalOptions] = (0, react_1.useState)(options);
    const [localValue, setlocalValue] = (0, react_1.useState)(value ? value.label : "Select");
    //EFFECT TO FOCUS ON SEARCH INPUT EVERY TIME WE CLICK ON SELECTION BOX
    (0, react_1.useEffect)(() => {
        var _a;
        if (showItems) {
            (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [showItems]);
    //HANDLER WHEN USER SELECT AN ITEM IT CLOSE SELECTION BOX AND SEND NEW VALUE TO onSelect PROPS
    const itemSelectHandler = (e) => {
        setlocalValue(e.label);
        setshowItems(false);
        onSelect({ label: e.label, value: e.value });
        //SELECTION BOX WILL REMAIN EMPTY AFTER SEARCH AND THIS WILL FILL SELECTION BOX AFTER SELECT ITEM
        setlocalOptions(options);
    };
    //CLOSE SELECTION BOX WHEN USER CLICK OUTSIDE OF SELECTION BOX AREA
    const clickOutside = (0, react_1.useCallback)((e) => {
        var _a;
        if (SelectRef) {
            if ((_a = SelectRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
                return setshowItems(true);
            }
            else {
                //SELECTION BOX WILL REMAIN EMPTY AFTER SEARCH AND THIS WILL FILL SELECTION BOX AFTER SELECT ITEM
                setlocalOptions(options);
                return setshowItems(false);
            }
        }
    }, []);
    //ADD EVENT LISTENER FOR WHEN USER CLICK OUTSIDE OF SELECTION BOX AND ATTACK clickOutside TO IT
    (0, react_1.useEffect)(() => {
        if (showItems) {
            window.addEventListener("click", clickOutside);
        }
        return () => window.removeEventListener("click", clickOutside);
    }, [showItems, clickOutside]);
    //ADD SEARCH FUNCTIONALITY FOR SELECTION BOX
    const searchHandler = (e) => {
        if (e.target.value && e.target.value.trim() && e.target.value.length >= 3) {
            //REGEX SEARCH TO FIND ITEM IN OPTIONS
            setlocalOptions([...options.filter((el) => el.label.toLowerCase().match(e.target.value.trim().toLowerCase()))]);
            //
            // setlocalOptions([
            //   ...options.filter(
            //     (el) => el.label.toLowerCase() === e.target.value.toLowerCase()
            //   ),
            // ]);
        }
        else {
            setlocalOptions(options);
        }
    };
    return (react_1.default.createElement("div", Object.assign({ className: 'relative max-w-xs' }, rest, { ref: SelectRef, id: 'select-container' }),
        react_1.default.createElement("div", { className: 'flex items-center py-1 px-3 mx-0.5 cursor-pointer border rounded-md', id: 'select-box', onClick: () => setshowItems((prev) => !prev) }, localValue),
        react_1.default.createElement("div", { className: 'absolute left-0 top-10 max-h-44 w-full flex flex-col shadow-md z-50 overflow-y-auto' }, showItems && (react_1.default.createElement("div", { id: 'selection-box' },
            react_1.default.createElement("div", { className: ' text-sm cursor-pointer bg-slate-50 hover:bg-slate-200' },
                react_1.default.createElement("input", { className: 'px-4 py-2 border border-slate-100 outline-none w-full ', placeholder: 'Search (3 letters at least)', onChange: (e) => searchHandler(e), ref: inputRef })),
            localOptions.map((el, index) => (react_1.default.createElement("div", { className: 'px-4 py-2 text-sm cursor-pointer bg-slate-50 hover:bg-slate-200', id: 'select-item', key: `${el.label}-${index}`, onClick: () => itemSelectHandler(el) }, el.label))))))));
});
exports.Dropdown.displayName = "Dropdown";
//# sourceMappingURL=Dropdown.js.map