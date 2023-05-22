import React from 'react';
interface DataCardType {
    className?: string;
    title: string;
    content: string;
    imageUrl: string;
}
export declare const DataCard: {
    ({ className, title, content, imageUrl, ...rest }: DataCardType): React.JSX.Element;
    displayName: string;
};
export {};
