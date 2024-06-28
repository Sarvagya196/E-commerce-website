import React from "react";

function Categories(){
    return(
        <>
        <div className="flex flex-col max-[767px]:items-center justify-between gap-[10px] h-full md:max-lg:text-center max-[767px]:w-full">
            <p className="text-base cursor-pointer">Women's Fashion</p>
            <p className="text-base cursor-pointer">Men's Fashion</p>
            <p className="text-base cursor-pointer">Electronics</p>
            <p className="text-base cursor-pointer">Home & Lifestyle</p>
            <p className="text-base cursor-pointer">Medicine</p>
            <p className="text-base cursor-pointer">Sports & Outdoor</p>
            <p className="text-base cursor-pointer">Baby’s & Toys</p>
            <p className="text-base cursor-pointer">Groceries & Pets</p>
            <p className="text-base cursor-pointer">Health & Beauty</p>
        </div>
        </>
    )
}

export default Categories;