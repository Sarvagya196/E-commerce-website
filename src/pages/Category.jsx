import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Product from "../components/Product";

function ProductCategory(){
    const { category } = useParams();
    const [pCategory, setCategory] = useState([]);
    //console.log(category);

    const getCategoryProducts = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/category/${category}`)
            .then(res => res.json())
            .then(res => res);
            //console.log(response);
            if (response){
                setCategory(response?.products);
                console.log(pCategory);
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getCategoryProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])
    return (
        <>
            {(pCategory) ? (
                <div className="flex flex-wrap px-[100px] md:max-lg:px-[40px] max-[767px]:px-[20px] py-[100px] max-[767px]:py-[40px] gap-[40px] justify-between max-[767px]:justify-center">
                    {pCategory?.map((item) => (
                    <Product key={item?.id} pId={item?.id} pName={item?.title} price={item?.price} originalPrice={item?.price} numOfReviews={50} image={item?.thumbnail} discnt={item?.discountPercentage} rating={item.rating}/>
                ))}
                </div>
            ) : <div className="flex item-center">Sorry, No Products in this Category Available</div>}
        </>
    )
}

export default ProductCategory;