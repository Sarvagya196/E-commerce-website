import React, {useState, useEffect} from "react"
import Product from "../components/Product";

function AllProducts(){
    const [items, setItems] = useState();
    const getItems = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products?limit=0')
            .then(res => res.json())
            .then(res => res);
            if (response?.products){
                setItems(response?.products);
            }
        } catch (error) {
            console.log("error", error)
        }
    }

    useEffect(()=>{
        getItems();
    })

    return (
        <>
        <div className="flex flex-wrap justify-between max-[767px]:justify-center max-[767px]:gap-[10px] p-[100px] md:max-lg:p-[40px] max-[767px]:px-[20px] max-[767px]:py-[40px]">
            {(items && items?.length) ? (
                <>
                {items?.map((item) => (
                    <Product key={item?.id} pId={item?.id} pName={item?.title} price={item?.price} originalPrice={item?.price} numOfReviews={50} image={item?.thumbnail} discnt={item?.discountPercentage} rating={item.rating}/>
                ))}
                </>
            ) : <div></div>}
        </div>
        </>
    )
}

export default AllProducts;