import React from 'react';
interface ContainerType extends React.ComponentPropsWithRef<'div'> {
    children: React.ReactNode;
    className?: string;
}
export declare const Container: {
    ({ children, className, ...rest }: ContainerType): JSX.Element;
    displayName: any;
};
export {};
