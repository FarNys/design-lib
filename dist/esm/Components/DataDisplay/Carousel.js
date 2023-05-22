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
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '../Actions';
const TIMER = 300;
const RATIO = 3 / 4;
export const Carousel = (_a) => {
    var { carouselData } = _a, rest = __rest(_a, ["carouselData"]);
    const [coordinate, setcoordinate] = useState();
    const [currentIndex, setcurrentIndex] = useState(2);
    const parentRef = useRef(null);
    const boxRef = useRef(null);
    const resizeHandler = useCallback(() => {
        var _a;
        const findCoordinate = (_a = parentRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        setcoordinate(findCoordinate);
    }, []);
    const preventClick = useCallback((e) => {
        boxRef.current.style.transitionDuration = TIMER + 'ms';
        e.target.style.pointerEvents = 'none';
        setTimeout(() => {
            e.target.style.pointerEvents = 'visible';
        }, TIMER);
    }, []);
    const resetTimer = useCallback((index) => {
        boxRef.current.style.transition = '0ms';
        setcurrentIndex(index);
    }, []);
    useEffect(() => {
        resizeHandler();
    }, [resizeHandler]);
    useEffect(() => {
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
    return (React.createElement("div", Object.assign({ className: "w-full shadow relative overflow-hidden", ref: parentRef }, rest, { dir: "ltr" }),
        React.createElement("div", { className: "flex w-full", style: {
                transform: `translateX(${-currentIndex * RATIO * (coordinate === null || coordinate === void 0 ? void 0 : coordinate.width)}px)`
            }, onTransitionEnd: transitionEndHandler, ref: boxRef },
            React.createElement("div", { className: "pr-4", style: { minWidth: RATIO * (coordinate === null || coordinate === void 0 ? void 0 : coordinate.width) || 0 } },
                React.createElement("div", { className: " border" },
                    " ",
                    carouselData[carouselData.length - 2].component)),
            React.createElement("div", { className: "pr-4", style: { minWidth: RATIO * (coordinate === null || coordinate === void 0 ? void 0 : coordinate.width) || 0 } },
                React.createElement("div", { className: " border" },
                    " ",
                    carouselData[carouselData.length - 1].component)),
            carouselData.map((el, index) => (React.createElement("div", { className: "pr-4", style: { minWidth: RATIO * (coordinate === null || coordinate === void 0 ? void 0 : coordinate.width) || 0 }, key: `carousel-item-${index}` },
                React.createElement("div", { className: " border" }, el.component)))),
            React.createElement("div", { className: "pr-4", style: { minWidth: RATIO * (coordinate === null || coordinate === void 0 ? void 0 : coordinate.width) || 0 } },
                React.createElement("div", { className: " border" }, carouselData[0].component)),
            React.createElement("div", { className: "pr-4", style: { minWidth: RATIO * (coordinate === null || coordinate === void 0 ? void 0 : coordinate.width) || 0 } },
                React.createElement("div", { className: " border" }, carouselData[1].component))),
        React.createElement("div", { className: "mx-auto w-full flex justify-center border border-red-300" }, carouselData.map((_, index) => (React.createElement("div", { className: `w-5  mx-1 my-3 cursor-pointer hover:bg-sky-500 ${currentIndex === index + 2 || currentIndex === index - 2 ? 'h-2 bg-sky-400' : 'h-1 bg-sky-300'}`, onClick: (e) => selectIndexHandler(e, index + 1), key: `carousel-index-${index}` })))),
        React.createElement(Button, { variant: "default", size: "sm", onClick: prevItemHandler }, "Prev"),
        React.createElement(Button, { variant: "default", size: "sm", onClick: nextItemHandler }, "Next")));
};
Carousel.displayName = 'Carousel';
//# sourceMappingURL=Carousel.js.map