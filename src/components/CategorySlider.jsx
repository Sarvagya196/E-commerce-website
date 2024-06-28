import React from "react";
import CategoryCard from "./CategoryCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FiChevronLeft } from 'react-icons/fi';
import { BiChevronRight } from 'react-icons/bi';
//import { useNavigate } from "react-router-dom"



function CategorySlide(){
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 4
        },
        phone: {
            breakpoint: {max: 768, min: 200},
            items: 2
        }
    }

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="mt-[40px] max-[767px]:mt-[30px] absolute top-0 right-0 carousel-button-group mb-4 gap-4 flex justify-end 
            items-center w-full">
              <button className='block p-3 bg-slate-300' onClick={() => 
              previous()}> <FiChevronLeft /></button>
              <button onClick={() => next()}><span className='block p-3 bg-slate-300' ><BiChevronRight /></span></button>
           </div>
        
         );
    };
    return (
        <>
        <div className="relative z-0 mx-[100px] md:max-lg:mx-[40px] max-[767px]:mx-[20px] flex flex-col gap-[40px]">
            <div className="pr-[100px] w-full flex items-bottom justify-between">
                <div className="flex flex-col gap-[20px] max-[767px]:gap-[10px]">
                    <h3 className="pl-[10px] text-base text-[#DB4444] font-semibold border-l-[20px] border-[#DB4444] rounded">Categories</h3>
                    <h2 className="text-4xl max-[767px]:text-3xl font-semibold">Browse by Category</h2>
                </div>

            </div>

            <Carousel
            responsive={responsive}
            infinite={true}
            ssr={true}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
            className="relative flex gap-16px z-0"
            >
                <CategoryCard cId={"c1"} cName={"smartphones"} />
                <CategoryCard cId={"c2"} cName={"Laptops"} />
                <CategoryCard cId={"c3"} cName={"mens-watches"} />
                <CategoryCard cId={"c4"} cName={"sunglasses"} />
                <CategoryCard cId={"c5"} cName={"mobile-accessories"} />
                <CategoryCard cId={"c6"} cName={"Gaming"} />
            </Carousel>
        </div>
        </>
        
    )
}

export default CategorySlide;