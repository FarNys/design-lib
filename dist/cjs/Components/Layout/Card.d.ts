import React from 'react';
interface CardType extends React.ComponentPropsWithRef<'div'> {
    children: React.ReactNode;
    className?: string;
}
export declare const Card: {
    ({ children, className, ...rest }: CardType): JSX.Element;
    displayName: any;
};
export {};
