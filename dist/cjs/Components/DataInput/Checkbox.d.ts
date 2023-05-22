import React from 'react';
import { VariantTypes } from '../sharedTypes';
interface CheckboxType extends React.ComponentPropsWithRef<'div'> {
    className?: string;
    isChecked?: boolean;
    variant?: VariantTypes;
    onToggle: (e: boolean) => void;
}
export declare const Checkbox: {
    ({ className, isChecked, onToggle, variant, ...rest }: CheckboxType): React.JSX.Element;
    displayName: any;
};
export {};
