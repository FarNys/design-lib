import React from 'react';
interface AccordionType extends React.ComponentPropsWithRef<'nav'> {
    className?: string;
    data: DataParentType[];
}
interface DataParentType {
    title: string;
    children: DataChildType[];
}
interface DataChildType {
    title: string;
}
export declare const Accordion: {
    ({ className, data, ...rest }: AccordionType): React.JSX.Element;
    displayName: any;
};
export {};
