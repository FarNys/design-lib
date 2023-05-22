import React, { SetStateAction } from 'react';
import { VariantTypes } from '../sharedTypes';
interface ToastType {
    showToast: boolean;
    setshowToast: React.Dispatch<SetStateAction<boolean>>;
    toastText: string;
    variant: VariantTypes;
}
export declare const Toast: {
    ({ toastText, showToast, setshowToast, variant, ...rest }: ToastType): React.JSX.Element | null;
    displayName: string;
};
export {};
