import {React, useState, useEffect} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from "./Product";
import { FiChevronLeft } from 'react-icons/fi';
import { BiChevronRight } from 'react-icons/bi';

function OurProducts(){

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => res);
        (console.log(response));
        if (response?.products){
            setProducts(response?.products);
        }
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 768},
            items: 1
        },
        phone: {
            breakpoint: {max: 768, min: 200},
            items: 1
        }
    }

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
        //const { carouselState: { currentSlide } } = rest;
        return (
            <div className="mt-[40px] max-[767px]:mt-[30px] absolute top-0 right-0 carousel-button-group mb-4  gap-4 flex justify-end 
            items-center w-full">
              <button className='block p-3 bg-slate-300' onClick={() => 
              previous()}> <FiChevronLeft /></button>
              <button onClick={() => next()}><span className='block p-3 bg-slate-300' ><BiChevronRight /></span></button>
           </div>
        
         );
    };

    return (
        <>
        <div className="relative z-0 mx-[100px] md:max-lg:mx-[40px] max-[767px]:mx-[20px] flex flex-col gap-[20px]">
            <div className="pr-[100px] w-full flex items-bottom justify-between">
                <div className="flex flex-col gap-[20px] max-[767px]:gap-[10px]">
                    <h3 className="pl-[10px] text-base text-[#DB4444] font-semibold border-l-[20px] border-[#DB4444] rounded">Our Products</h3>
                    <h2 className="text-4xl max-[767px]:text-3xl font-semibold">Explore Our Products</h2>
                </div>

            </div>
            {(products && products?.length) ? (

                <Carousel
                responsive={responsive}
                infinite={true}
                ssr={true}
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
                >
                <div className="flex flex-wrap justify-between max-[767px]:justify-center gap-[50px] w-full">
                    {products?.map((item) => (
                        item.id <= 8 && 
                        <Product key={item?.id} pId={item?.id} pName={item?.title} price={item?.price} originalPrice={item?.price} numOfReviews={50} image={item?.thumbnail} discnt={item?.discountPercentage} rating={item.rating}/>
                    ))}
                    {/* <Product pId={"p9"} pName={"Breed Dry Dog Food"} price={120} numOfReviews={88}/>
                    <Product pId={"p10"} pName={"CANON EOS DSLR Camera"} price={960} numOfReviews={75}/>
                    <Product pId={"p11"} pName={"ASUS FHD Gaming Laptop"} price={370} numOfReviews={99}/>
                    <Product pId={"p12"} pName={"Curology Product Set"} price={375} numOfReviews={98}/>
                    <Product pId={"p13"} pName={"Kids Electric Car"} price={120} numOfReviews={88}/>
                    <Product pId={"p14"} pName={"Jr. Zoom Soccer Cleats"} price={960} numOfReviews={75}/>
                    <Product pId={"p15"} pName={"GP11 Shooter USB Gamepad"} price={370} numOfReviews={99}/>
                    <Product pId={"p16"} pName={"Quilted Satin Jacket"} price={375} numOfReviews={98}/> */}
                </div>
                </Carousel>
            ) : <div>No products Available</div>}
        </div>
        </>
    )
}

export default OurProducts;