import {React, useState, useEffect} from "react";
import Product from "./Product";

function BestSellingProducts(){

    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(res => res);
            (console.log("response", response));
            if (response?.products){
                setProducts(response?.products)
            }
        } catch (error) {
            console.log("failed to fetch products", error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
        <div className="mx-[100px] md:max-lg:mx-[40px] max-[767px]:mx-[20px] flex flex-col gap-[40px] mb-[140px] max-[767px]:mb-[40px] overflow-hidden">
            <div className="w-full flex items-end justify-between">
                <div className="flex flex-col gap-[20px] max-[767px]:gap-[10px]">
                    <h3 className="pl-[10px] text-base text-[#DB4444] font-semibold border-l-[20px] border-[#DB4444] rounded">This Month</h3>
                    <h2 className="text-4xl max-[767px]:text-3xl font-semibold">Best Selling Product</h2>
                </div>
                <button className="bg-[#DB4444] text-white px-[48px] max-[767px]:px-[24px] py-[16px] max-[767px]:py-[10px] rounded">View All</button>
            </div>
            <div className="flex md:max-lg:flex-wrap max-[767px]:flex-wrap max-[767px]:justify-center justify-between">
                {(products && products?.length) ? (
                    <>
                        {products?.map((item) => (
                            item.id >= 27 &&
                            <Product key={item?.id} pId={item?.id} pName={item?.title} price={item?.price} originalPrice={item?.price} numOfReviews={50} image={item?.thumbnail} discnt={item?.discountPercentage} rating={item.rating}/>
                        ))}
                    </>
                ) : <div>No Product Available</div>}
                {/* <Product pId={"p5"} pName={"The north coat"} price={260} originalPrice={360} numOfReviews={65} />
                <Product pId={"p6"} pName={"Gucci duffle bag"} price={960} originalPrice={1160} numOfReviews={65} />
                <Product pId={"p7"} pName={"RGB liquid CPU Cooler"} price={160} originalPrice={170} numOfReviews={65} />
                <Product pId={"p8"} pName={"Small BookSelf"} price={360} originalPrice={360} numOfReviews={65} /> */}
            </div>
        </div>
        </>
    )
}

export default BestSellingProducts;