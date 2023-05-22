import React from 'react';
interface CarouselItemType {
    component: React.ReactNode;
}
interface CarouselType extends React.ComponentPropsWithRef<'div'> {
    carouselData: CarouselItemType[];
}
export declare const Carousel: {
    ({ carouselData, ...rest }: CarouselType): React.JSX.Element;
    displayName: string;
};
export {};
