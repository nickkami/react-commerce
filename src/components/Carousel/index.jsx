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
// const carrousel = new Array(10).fill();
const itemsPerPage = 3;
const carouselItens = [
    { id: '1', url: 'https://react-responsive-carousel.js.org/assets/1.jpeg', alt: '_' },
    { id: '2', url: 'https://react-responsive-carousel.js.org/assets/2.jpeg', alt: '_' },
    { id: '3', url: 'https://react-responsive-carousel.js.org/assets/3.jpeg', alt: '_' },
];
const BoxCarousel = () => {
    return (
        <fragment>
            {carouselItens.map(item => (
                <div>
                    <TopBox>
                        <Rating />
                    </TopBox>
                    <Boximage>
                        <img key={item.id} src={item.url} alt={item.alt} />
                    </Boximage>
                </div>
            ))}
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
                <BoxCarousel />
            </Carousel>
        </ContainerCarousel>
    );
};
export default ProductCarousel;
