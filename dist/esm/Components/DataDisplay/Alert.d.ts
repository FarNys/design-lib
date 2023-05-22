import React from 'react';
import { VariantTypes } from '../sharedTypes';
interface AlertType extends React.ComponentPropsWithRef<'div'> {
    title: string;
    variant?: VariantTypes;
    className?: string;
    icon?: React.ReactNode;
}
export declare const Alert: {
    ({ title, variant, className, icon, ...rest }: AlertType): React.JSX.Element;
    displayName: string;
};
export {};
