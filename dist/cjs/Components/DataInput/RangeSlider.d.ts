import React from 'react';
interface RangeSliderType extends React.ComponentPropsWithRef<'div'> {
    initialValue?: number;
    className?: string;
    minValue: number;
    maxValue: number;
    selectedValue: (e: number) => void;
}
export declare const RangeSlider: {
    ({ initialValue, className, minValue, maxValue, selectedValue, ...rest }: RangeSliderType): React.JSX.Element;
    displayName: any;
};
export {};
