import React from 'react';

interface ContainerType extends React.ComponentPropsWithRef<'div'> {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className, ...rest }: ContainerType): JSX.Element => {
    return (
        <div className={`block my-2 w-11/12 mx-auto border border-slate-500 rounded ${className}`} {...rest}>
            {children}
        </div>
    );
};

Container.displayName = Container;
