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

const ProductCarousel = props => {
    return (
        <ContainerCarousel>
            <Carousel
                showThumbs={false}
                centerMode
                centerSlidePercentage={100 / itemsPerPage}
                centerMode={true}
            >
                {props.products.map(item => (
                    <div>
                        <TopBox>
                            <Rating />
                        </TopBox>
                        <Boximage>
                            <img key={item.id} src={item.url} alt={item.alt} />
                        </Boximage>
                    </div>
                ))}
            </Carousel>
        </ContainerCarousel>
    );
};
export default ProductCarousel;
