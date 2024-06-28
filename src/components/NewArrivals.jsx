import React from "react";
import ps5 from "../assets/PS5.png"
import women from "../assets/Woman.png"
import alexa from "../assets/Alexa.png"
import gucci from "../assets/Gucci.png"


function Featured(){
    return (
        <>
        <div className="pr-[100px] md:max-lg:pr-[40px] mb-[40px] w-full flex items-bottom justify-between">
            <div className="flex flex-col gap-[20px] max-[767px]:gap-[10px]">
                <h3 className="pl-[10px] text-base text-[#DB4444] font-semibold border-l-[20px] border-[#DB4444] rounded">Featured</h3>
                <h2 className="text-4xl max-[767px]:text-3xl font-semibold">New Arrivals</h2>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-[20px] max-[767px]:gap-[10px] mb-[100px] max-[767px]:mb-[40px]">
            <div className="h-[600px] max-[767px]:h-full relative flex flex-col gap-[10px] items-start justify-end pl-[20px] max-[767px]:pl-[10px] pb-[20px] bg-[#0D0D0D] text-[#FAFAFA] rounded">
                <h3 className="relative z-[1] text-2xl max-[767px]:text-[14px] leading-6">PlayStation 5</h3>
                <p className="relative z-[1] text-sm max-[767px]:text-[12px]">Black and White version of the PS5 coming out on sale.</p>
                <button className="relative z-[1] text-white underline">Shop Now</button>
                <img alt="" src={ps5} className="absolute bottom-0 z-[0]"></img>
            </div>
            <div className="grid grid-rows-2 gap-[20px] max-[767px]:gap-[10px]">
                <div className="relative flex flex-col gap-[10px] items-start justify-end pl-[20px] max-[767px]:pl-[10px] pb-[20px] bg-[#0D0D0D] text-[#FAFAFA] rounded">
                    <h3 className="relative z-[1] text-2xl max-[767px]:text-[14px] leading-6">Women’s Collections</h3>
                    <p className="relative z-[1] text-sm max-[767px]:text-[12px]">Featured woman collections that give you another vibe.</p>
                    <button className="relative z-[1] text-white underline">Shop Now</button>
                    <img alt="" src={women} className="absolute right-0 bottom-0 z-[0]"></img>
                </div>
                <div className="grid grid-cols-2 gap-[20px] max-[767px]:gap-[10px]">
                    <div className="relative flex flex-col gap-[10px] items-start justify-end pl-[20px] max-[767px]:pl-[10px] pb-[20px] bg-[#0D0D0D] text-[#FAFAFA] rounded">
                        <h3 className="relative z-[1] text-2xl max-[767px]:text-[14px] leading-6">Speakers</h3>
                        <p className="relative z-[1] text-sm max-[767px]:text-[12px]">Amazon wireless speakers</p>
                        <button className="relative z-[1] text-white underline">Shop Now</button>
                        <img alt="" src={alexa} className="absolute right-[10%] max-[767px]:right-[3%] md:max-lg:right-[0%] bottom-[10%] z-[0]"></img>
                    </div>

                    <div className="relative flex flex-col gap-[10px] items-start justify-end pl-[20px] max-[767px]:pl-[10px] pb-[20px] bg-[#0D0D0D] text-[#FAFAFA] rounded">
                        <h3 className="relative z-[1] text-2xl max-[767px]:text-[14px] leading-6">Perfume</h3>
                        <p className="relative z-[1] text-sm max-[767px]:text-[12px]">GUCCI INTENSE OUD EDP</p>
                        <button className="relative z-[1] text-white underline">Shop Now</button>
                        <img alt="" src={gucci} className="absolute right-[10%] max-[767px]:right-[3%] md:max-lg:right-[0%] bottom-[10%] z-[0]"></img>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Featured;