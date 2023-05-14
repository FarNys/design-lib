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
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Typography } from "../Typo/Typography";
export const DropdownMulti = (_a) => {
    var { options, values, onSelect } = _a, rest = __rest(_a, ["options", "values", "onSelect"]);
    const selectRef = useRef(null);
    const deleteIconRef = useRef(null);
    const [selectCoordinate, setselectCoordinate] = useState();
    const [showItems, setshowItems] = useState(false);
    const [localOptions, setlocalOptions] = useState(options);
    const [localValue, setlocalValue] = useState(values ? values : []);
    //GET BOUNDARY COORDINATE OF SELECT BOX - IF WE SELECT MULTIPLE ITEMS AND IT GET BIGGER THEN IT WILL TAKE MORE HEIGHT (FOR CHANGE INITIAL POSITION OF ITEM SELECTIONS)
    useEffect(() => {
        const coordinateBox = selectRef.current.getBoundingClientRect();
        setselectCoordinate(coordinateBox);
    }, [localValue.length]);
    //SCROLL
    useEffect(() => {
        if (showItems) {
            const getBodyCoordinate = document.querySelector("body");
            if ((getBodyCoordinate === null || getBodyCoordinate === void 0 ? void 0 : getBodyCoordinate.scrollHeight) > (getBodyCoordinate === null || getBodyCoordinate === void 0 ? void 0 : getBodyCoordinate.clientHeight)) {
                window.scrollTo(0, getBodyCoordinate === null || getBodyCoordinate === void 0 ? void 0 : getBodyCoordinate.scrollHeight);
            }
        }
    }, [showItems]);
    //SELECT AN ITEM FROM DROPDOWN --- IT WILL REMOVE AN ITEM FROM SELECTION LIST AND ADD AN ITEM TO SELECTED LIST AND ALSO PASS TO onSelect FUNCTION TO GET IN ITS PARENT ELEMENT
    const itemSelectHandler = (e) => {
        let newValues = [];
        newValues = [
            ...localValue,
            {
                label: e.label,
                value: e.value,
            },
        ];
        setlocalValue(newValues);
        setlocalOptions([...localOptions.filter((el) => el.value !== e.value)]);
        setshowItems(false);
        onSelect(newValues);
    };
    //HANDLER TO OPEN/CLOSE EVERYTIME CLIENT CLICK ON SELECTION CARD
    const openSelectionBoxHandler = (e) => {
        if (e.target !== deleteIconRef.current) {
            setshowItems((prev) => !prev);
        }
        else {
            setshowItems(false);
        }
    };
    //DELETE AN ITEM FROM SELECTED LIST---ADD THAT ITEM TO SELECTION LIST---SEND TO onSelect FUNCTION TO GET IN ITS PARENT ELEMENT
    const deleteItemHandler = (el) => {
        setshowItems((prev) => !prev);
        const filteredValues = [...localValue.filter((item) => item.value !== el.value)];
        setlocalOptions([...localOptions, el]);
        setlocalValue(filteredValues);
        onSelect(filteredValues);
    };
    //CLOSE SELECTION LIST WHEN WE CLICK OUTSIDE OF IT!
    const clickOutside = useCallback((e) => {
        if (selectRef === null || selectRef === void 0 ? void 0 : selectRef.current.contains(e.target)) {
            return setshowItems(true);
        }
        else {
            return setshowItems(false);
        }
    }, []);
    useEffect(() => {
        if (showItems) {
            window.addEventListener("mousedown", clickOutside);
        }
        return () => window.removeEventListener("mousedown", clickOutside);
    }, [showItems, clickOutside]);
    //HANDLER TO DELETE ALL SELECTED ITEMS AND ADD IT TO OPTIONS
    const deleteAllSelectedHandler = () => {
        setlocalValue([]);
        setlocalOptions([...localOptions, ...localValue]);
        onSelect([]);
    };
    return (React.createElement("div", Object.assign({ className: 'relative max-w-xs' }, rest, { ref: selectRef, onClick: (e) => openSelectionBoxHandler(e) }),
        React.createElement("div", { className: 'flex flex-1 flex-wrap items-center cursor-pointer border rounded-md' },
            React.createElement("div", { className: 'flex flex-1 items-center overflow-x-hidden flex-wrap' }, (localValue === null || localValue === void 0 ? void 0 : localValue.length) > 0 ? (localValue === null || localValue === void 0 ? void 0 : localValue.map((el, index) => (React.createElement("div", { className: 'my-1 mx-0.5 flex items-center  flex-shrink-0 bg-slate-200 hover:text-slate-500 rounded pl-1 first-of-type:ml-1', key: `${el.label}-value-${index}` },
                React.createElement(Typography, { variant: 'small', className: 'p-1' },
                    React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: 'flex items-center w-4 h-4 rounded text-red-400 cursor-pointer hover:bg-red-500 hover:text-slate-300', onClick: () => deleteItemHandler(el) },
                        React.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M6 18L18 6M6 6l12 12' }))),
                React.createElement(Typography, { variant: 'small', className: 'text-xs px-1' }, el.label))))) : (React.createElement(Typography, { className: 'py-1 px-2 mx-0.5' }, "Selected"))),
            React.createElement(Typography, { variant: 'small', className: 'p-1 ml-auto' },
                React.createElement("svg", { ref: deleteIconRef, xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: 'flex items-center w-5 h-5 rounded text-red-400 cursor-pointer hover:bg-red-500 hover:text-slate-300', onClick: deleteAllSelectedHandler },
                    React.createElement("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M6 18L18 6M6 6l12 12', className: 'pointer-events-none' }))),
            " "),
        selectCoordinate && (React.createElement("div", { className: 'absolute max-h-44 overflow-y-auto left-0 w-full flex flex-col shadow-md z-50', style: { top: selectCoordinate.height } },
            showItems &&
                localOptions.length > 0 &&
                localOptions.map((el, index) => (React.createElement("div", { className: 'px-4 py-2 text-sm cursor-pointer bg-slate-50 hover:bg-slate-200 ', key: `${el.label}-${index}`, onClick: () => itemSelectHandler(el) }, el.label))),
            showItems && localOptions.length === 0 && (React.createElement("div", { className: 'px-4 py-2 text-sm cursor-pointer bg-slate-50' }, "No Item"))))));
};
DropdownMulti.displayName = "DropdownMulti";
//# sourceMappingURL=DropdownMulti.js.map