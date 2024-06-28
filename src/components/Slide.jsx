import React from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import iPhone from "../assets/iphone.png"
import apple from "../assets/Apple.png"
import rightArr from "../assets/rightarr.png"

function Slide(){
    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true
    // };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 1
        },
        phone: {
            breakpoint: {max: 768, min: 200},
            items: 1
        }
    }
    return(
        <>
        <Carousel
        responsive={responsive}
        className="w-[67.5vw] max-[767px]:w-[90vw] h-full max-[767px]:h-auto"
        showDots={true}
        >
            <div className="grid grid-cols-2 w-full">
                <div className="flex flex-col gap-[20px] mt-[40px] max-[767px]:mt-[20px] ml-[60px] md:max-lg:[40px] max-[767px]:ml-[20px]">
                    <div className="flex items-center gap-[15px]">
                        <img alt="" src={apple}></img>
                        <p className="text-base text-[#FAFAFA]">iphone 14 series</p>
                    </div>
                    <p className="text-3xl leading-tight text-[#FAFAFA]">Up to 10% <br></br> off Voucher</p>
                    <div className="flex gap-[5px]">
                        <p className="text-[#FAFAFA]">Shop Now</p>
                        <img alt="" src={rightArr}></img>
                    </div>
                </div>
                <div className="flex items-center justify-center pt-[10px] md:max-lg:pr-[20px]">
                    <img alt="" src={iPhone}></img>
                </div>
            </div>
            <div className="grid grid-cols-2 w-full">
                <div className="flex flex-col gap-[20px] mt-[40px] max-[767px]:mt-[20px] ml-[60px] md:max-lg:[40px] max-[767px]:ml-[20px]">
                    <div className="flex items-center gap-[15px]">
                        <img alt="" src={apple}></img>
                        <p className="text-base text-[#FAFAFA]">iphone 14 series</p>
                    </div>
                    <p className="text-3xl leading-tight text-[#FAFAFA]">Up to 10% <br></br> off Voucher</p>
                    <div className="flex gap-[5px]">
                        <p className="text-[#FAFAFA]">Shop Now</p>
                        <img alt="" src={rightArr}></img>
                    </div>
                </div>
                <div className="flex items-center justify-center pt-[10px] md:max-lg:pr-[20px]">
                    <img alt="" src={iPhone}></img>
                </div>
            </div>
            <div className="grid grid-cols-2 w-full">
                <div className="flex flex-col gap-[20px] mt-[40px] max-[767px]:my-[20px] ml-[60px] md:max-lg:[40px] max-[767px]:ml-[20px]">
                    <div className="flex items-center gap-[15px]">
                        <img alt="" src={apple}></img>
                        <p className="text-base text-[#FAFAFA]">iphone 14 series</p>
                    </div>
                    <p className="text-3xl leading-tight text-[#FAFAFA]">Up to 10% <br></br> off Voucher</p>
                    <div className="flex gap-[5px]">
                        <p className="text-[#FAFAFA]">Shop Now</p>
                        <img alt="" src={rightArr}></img>
                    </div>
                </div>
                <div className="flex items-center justify-center pt-[10px] md:max-lg:pr-[20px]">
                    <img alt="" src={iPhone}></img>
                </div>
            </div>
           
        </Carousel>
        </>
    );
}

export default Slide;
