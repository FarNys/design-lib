import React from 'react';
interface InputGroupType extends React.ComponentPropsWithRef<'div'> {
    label: string;
    name: string;
    onChange?: (e: any) => void;
    className?: string;
}
export declare const InputGroup: {
    ({ label, name, className, onChange, ...rest }: InputGroupType): React.JSX.Element;
    displayName: any;
};
export {};
