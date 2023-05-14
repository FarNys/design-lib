import React, { SetStateAction } from "react";
interface ModalsProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    title: string;
    setisOpren: React.Dispatch<SetStateAction<boolean>>;
}
export declare const Modals: {
    ({ children, className, isOpen, setisOpren, title }: ModalsProps): React.JSX.Element | null;
    displayName: string;
};
export {};
