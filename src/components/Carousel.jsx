import React from "react";
import { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from "./Product";
import { FiChevronLeft } from 'react-icons/fi';
import { BiChevronRight } from 'react-icons/bi';

function SaleCarousel( {noItems} ){
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        phone: {
            breakpoint: {max: 768, min: 200},
            items: 1.21
        }
    }

    const [products, setProducts] = useState([]);

    const getProducts = async() => {
        try {
            const response = await fetch('https://dummyjson.com/products?limit=0')
                .then(res => res.json())
                .then(res => res);
            console.log("response",response);
            if(response?.products){
                setProducts(response?.products)
            }
        } catch (error) {
            console.log("Failed to fetch Products", error);
        }
    }
    useEffect(() => {
       getProducts() 
    }, [])

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="mr-[100px] md:max-lg:mr-[40px] max-[767px]:mr-[20px] mt-[40px] max-[767px]:mt-[30px] absolute top-0 right-0 carousel-button-group mb-4 gap-4 flex justify-end 
            items-center w-full">
              <button className='block p-3 bg-slate-300' onClick={() => 
              previous()}> <FiChevronLeft /></button>
              <button onClick={() => next()}><span className='block p-3 bg-slate-300' ><BiChevronRight /></span></button>
           </div>
        
         );
    };

    return (
        <>
        <div className="relative z-0 ml-[100px] md:max-lg:ml-[40px] max-[767px]:ml-[20px] flex flex-col overflow-hidden gap-[20px]">
            <div className="pr-[100px] md:max-lg:pr-[40px] max-[767px]:pr-[20px] w-full flex items-bottom justify-between">
                <div className="flex flex-col gap-[20px] max-[767px]:gap-[10px]">
                    <h3 className="pl-[10px] text-base text-[#DB4444] font-semibold border-l-[20px] border-[#DB4444] rounded">Today's</h3>
                    <h2 className="text-4xl max-[767px]:text-3xl font-semibold">Flash Sale</h2>
                </div>

            </div>
            {(products && products?.length) ? (
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        ssr={true}
                        arrows={false}
                        renderButtonGroupOutside={true}
                        customButtonGroup={<ButtonGroup />}
                        className="relative flex md:max-lg:justify-between max-[767px]:justify-between gap-16px z-0"
                    >
                        {products?.map((item) => (
                            (item.discountPercentage >= 18) &&
                            <Product key={item?.id} pId={item?.id} pName={item?.title} price={item?.price} originalPrice={item?.price} numOfReviews={50} image={item?.thumbnail} discnt={item?.discountPercentage} rating={item?.rating}/>
                        ))}
                    </Carousel>
                ) : <div>No products</div>}

        </div>
        </>
    )
}

export default SaleCarousel;