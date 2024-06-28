import React from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";
import Slide from "../components/Slide";
//import Product from "../components/Product";
import SaleCarousel from "../components/Carousel";
import CategorySlide from "../components/CategorySlider";
import BestSellingProducts from "../components/BestProducts";
import SaleCard from "../components/CategorySale";
import OurProducts from "../components/OurProduct";
import Featured from "../components/NewArrivals";
import Services from "../components/OurServices";

function Home(){
    
    const navigate = useNavigate();

    return(
        <>
            <div className="mx-[100px] md:max-lg:mx-[40px] max-[767px]:mx-[0px] mb-[100px] flex overflow-hidden max-[767px]:w-full">
                <div className="max-[767px]:hidden pr-[100px] md:max-lg:pr-[40px] max-[767px]:pr-[0px] pt-[40px] border-r-[1px] max-[767px]:border-[0px] max-[767px]:w-full">
                    <Categories/>
                </div>

                <div className="bg-black text-white ml-[40px] max-[767px]:ml-[20px] mt-[40px]">
                    <Slide/>
                </div>
            </div>
            <div className="flex flex-col items-center gap-[60px] max-[767px]:gap-[20px]">
                <div className="w-full">
                    <SaleCarousel noItems={4.3}/>
                </div>
                <button
                onClick={() => navigate('/products')}
                className="bg-[#DB4444] px-[48px] py-[16px] text-white rounded"
                >See all Products</button>
                <div className="px-[100px] md:max-lg:px-[40px] max-[767px]:px-[20px] w-full"><div className="border-[0.5px] mb-[60px] w-full"></div></div>
            </div>

            <div>
                <CategorySlide/>
                <div className="mt-[60px] px-[100px] md:max-lg:px-[40px] max-[767px]:px-[20px] w-full"><div className="border-[0.5px] mb-[60px] w-full"></div></div>
            </div>
            <div>
                <BestSellingProducts/>
            </div>
            <div>
                <SaleCard/>
            </div>
            <div className="flex flex-col items-center gap-[60px] max-[767px]:gap-[20px]">
                <div className="w-full">
                    <OurProducts/>
                </div>
                <button
                onClick={() => {navigate('/products')}}
                className="bg-[#DB4444] px-[48px] py-[16px] text-white rounded"
                >See all Products</button>
                <div className="px-[100px] md:max-lg:px-[40px] max-[767px]:px-[20px] w-full"><div className="border-[0.5px] mb-[60px] w-full"></div></div>
            </div>
            <div className="mx-[100px] md:max-lg:mx-[40px] max-[767px]:mx-[20px]">
                <Featured/>
            </div>
            <div>
                <Services/>
            </div>
        </>
    )
}

export default Home;