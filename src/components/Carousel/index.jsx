import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Rating from '../Rating';
import styled from 'styled-components';

const TopBox = styled.div`
    text-align: left;
`;
const ContainerCarousel = styled.div`
    li.slide {
        background-color: #fff;
    }
`;
const Boximage = styled.div`
    margin-right: 20px;
    margin-left: 20px;
`;
const carrousel = new Array(10).fill();
const carouselItens = (id, url, alt) => {
    [
        { id: '1', url: 'https://react-responsive-carousel.js.org/assets/1.jpeg', alt: '_' },
        { id: '2', url: 'https://react-responsive-carousel.js.org/assets/2.jpeg', alt: '_' },
        { id: '3', url: 'https://react-responsive-carousel.js.org/assets/3.jpeg', alt: '_' },
    ];
};
const imageUrl = 'https://react-responsive-carousel.js.org/assets/3.jpeg';
const itemsPerPage = 3;
const BoxCarousel = () => {
    return (
        <fragment>
            <TopBox>
                <Rating />
            </TopBox>
            <Boximage>
                <img src={imageUrl} />
            </Boximage>
        </fragment>
    );
};
const ProductCarousel = () => {
    return (
        <ContainerCarousel>
            <Carousel
                showThumbs={false}
                centerMode
                centerSlidePercentage={100 / itemsPerPage}
                centerMode={true}
            >
                {carrousel.map((item, index) => (
                    <BoxCarousel />
                ))}
            </Carousel>
        </ContainerCarousel>
    );
};
export default ProductCarousel;
