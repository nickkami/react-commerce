import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Rating from '../Rating';
import Thumbnail from '../Thumbnail';
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
const product = {
    id: 2,
    title: 'Handmade Soft Sausages',
    qty: 18,
    price: '352.00',
    special_price: '300.00',
    rating: 4,
    short_description: 'Repellendus temporibus veniam esse.',
    description:
        'Et ullam ratione quo autem nostrum tempore modi aut. Veniam ad et sequi optio molestiae. Non deserunt sed qui ut.',
    thumbnail: 'http://lorempixel.com/640/480',
    gallery: [
        'http://lorempixel.com/640/480',
        'http://lorempixel.com/640/480',
        'http://lorempixel.com/640/480',
        'http://lorempixel.com/640/480',
        'http://lorempixel.com/640/480',
        'http://lorempixel.com/640/480',
    ],
    categories: [5],
    related: [34, 102, 101, 441, 214, 260, 476],
};

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
                        <TopBox />
                        <Boximage>
                            <Thumbnail product={product} />
                            {/* <img key={item.id} src={item.url} alt={item.alt} />  */}
                        </Boximage>
                    </div>
                ))}
            </Carousel>
        </ContainerCarousel>
    );
};
export default ProductCarousel;
