import React from "react";
import s1 from "../assets/Services.png"
import s2 from "../assets/Services1.png"
import s3 from "../assets/Services2.png"

function Service(){
    return (
        <>
        <div className="flex justify-between mx-[150px] md:max-lg:mx-[80px] max-[767px]:mx-[20px] mb-[100px] max-[767px]:mb-[40px]">
            <div className="flex flex-col items-center gap-[10px]">
                <img alt="" src={s1}></img>
                <p className="text-xl max-[767px]:text-lg text-center font-semibold">FREE AND FAST DELIVERY</p>
                <p className="text-sm text-center">Free delivery for all orders over $140</p>
            </div>

            <div className="flex flex-col items-center gap-[10px]">
                <img alt="" src={s2}></img>
                <p className="text-xl max-[767px]:text-lg text-center font-semibold">24/7 CUSTOMER SERVICE</p>
                <p className="text-sm text-center">Friendly 24/7 CUSTOMER SERVICE</p>
            </div>

            <div className="flex flex-col items-center gap-[10px]">
                <img alt="" src={s3}></img>
                <p className="text-xl max-[767px]:text-lg text-center font-semibold">MONEY BACK GUARANTEE</p>
                <p className="text-sm text-center">We return money within 30 days</p>
            </div>
        </div>
        </>
    )
}

function Services(){
    return (
        <>
        <Service/>
        </>
    )
}

export default Services;