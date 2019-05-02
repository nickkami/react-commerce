import React from 'react';
import { storiesOf } from '@storybook/react';
// import Carousel from '../index';
import ProductCarousel from '../index';

const stories = storiesOf('Carousel', module);
const carouselItens = [
    { id: '1', url: 'https://react-responsive-carousel.js.org/assets/1.jpeg', alt: '_' },
    { id: '2', url: 'https://react-responsive-carousel.js.org/assets/2.jpeg', alt: '_' },
    { id: '3', url: 'https://react-responsive-carousel.js.org/assets/3.jpeg', alt: '_' },
];

stories.add('Default', () => {
    return <ProductCarousel products={carouselItens} />;
});
