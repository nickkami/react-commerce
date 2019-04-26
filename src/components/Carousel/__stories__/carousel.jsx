import React from 'react';
import { storiesOf } from '@storybook/react';
// import Carousel from '../index';
import ProductCarousel from '../index';

const stories = storiesOf('Carousel', module);

stories.add('Default', () => {
    return <ProductCarousel />;
});
