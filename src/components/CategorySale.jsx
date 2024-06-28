import React from "react";
import jbl from "../assets/JBL.png"
import shadow from "../assets/Ellipse.png"
function SaleCard(){
    return (
        <>
        <div className="flex max-[767px]:flex-col max-[767px]:gap-[10px] items-center justify-between mx-[100px] md:max-lg:mx-[40px] max-[767px]:mx-[20px] md:max-lg:py-[20px] max-[767px]:py-[20px] bg-black text-white mb-[100px] max-[767px]:mb-[40px] px-[40px]">
            <div className="flex flex-col items-baseline max-[767px]:items-center justify-center gap-[30px] max-[767px]:text-center">
                <h3 className="text-base font-semibold text-[#00FF66]">Categories</h3>
                <h1 className="text-5xl md:max-lg:text-3xl font-semibold text-[#FAFAFA] tracking-wide leading-tight">Enhance Your<br></br>Music Experience</h1>
                <div className="flex gap-[20px]">
                    <div className="flex flex-col items-center justify-center bg-white text-black rounded-full h-[60px] w-[60px] md:max-lg:h-[50px] md:max-lg:w-[50px]">
                        <p className="leading-5 font-semibold">23</p>
                        <p className="text-[11px]">Hours</p>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white text-black rounded-full h-[60px] w-[60px] md:max-lg:h-[50px] md:max-lg:w-[50px]">
                        <p className="leading-5 font-semibold">05</p>
                        <p className="text-[11px]">Days</p>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white text-black rounded-full h-[60px] w-[60px] md:max-lg:h-[50px] md:max-lg:w-[50px]">
                        <p className="leading-5 font-semibold">59</p>
                        <p className="text-[11px]">Minutes</p>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white text-black rounded-full h-[60px] w-[60px] md:max-lg:h-[50px] md:max-lg:w-[50px]">
                        <p className="leading-5 font-semibold">23</p>
                        <p className="text-[11px]">Hours</p>
                    </div>
                </div>
                <button className="bg-[#00FF66] text-white px-[48px] py-[16px] rounded">View All</button>
            </div>

            <div className="relative z-10">
                <img alt="" src={jbl} className="relative z-10 py-[40px]"></img>
                <img alt="" src={shadow} className="absolute right-[15%] top-0 z-0 w-[504px] h-[500px]"></img>
            </div>
        </div>
        </>
    )
}

export default SaleCard;