import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Product({ pId, pName, price, originalPrice, numOfReviews, rating, image, discnt }) {

    const [onHover, setOnHover] = useState(false);

    const activeUser = JSON.parse(localStorage.getItem("activeUser"));

    const navigate = useNavigate();

    const handleHover = () => {
        setOnHover(true);
    }

    let realPrice = (price*100) / (100-discnt);
    let roundedPrice = realPrice.toFixed(2);

    const handleHoverEnd = () => {
        setOnHover(false);
    }
    //let discount = {discnt};

    const handleViewProduct = () => {
        navigate(`/productDetails/${pId}`);
    }

    const addToCart = () => {
        if (activeUser === null){
            alert("Sign In to Continue!");
        }else{
        const item = {
            id : pId,
            name : pName,
            price : price,
            quantity : 1,
            pImage : image,
            userId : activeUser.id
        };
        let cartItems = JSON.parse(localStorage.getItem("cartProducts")) || [];
        console.log(pId);
        const alreadyInCart = cartItems.find((product) => (product.id === pId) && (product.userId === activeUser.id));
        if (alreadyInCart){
            alreadyInCart.quantity++;
        }else{
            cartItems.push(item);
        }
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));
        toast("Item Added to Cart !");
        //navigate('/cart');
        }
    }


    return (
        <>
            <div
                className="relative z-10 flex flex-col items-left jutify-center gap-[10px]"
                >
                <div
                    className="relative bg-[#F5F5F5] flex items-center justify-center w-[270px] h-[250px] rounded"
                    onMouseOver={handleHover}
                    onMouseOut={handleHoverEnd}>
                    {!isNaN(discnt) ? (<p className="absolute top-[10px] left-[10px] px-[10px] py-[5px] bg-[#DB4444] rounded">{Math.ceil(discnt)}%</p>) : null}
                    <img
                    onClick={handleViewProduct}
                    src={image} alt="" className="w-[190px] h-[180px]"></img>
                    {(onHover) ? (
                        <>
                            <button 
                            onClick={addToCart}
                            className="absolute bottom-0 w-full bg-black text-white py-[5px] rounded-b z-100">
                                Add to Cart
                            </button>
                        </>
                    ) : null}
                    <ToastContainer containerId="addToCart"/>
                </div>
                <div
                onClick={handleViewProduct}
                className="flex flex-col gap-[10px] cursor-pointer">
                    <p className="font-medium">{pName}</p>
                    <p className="text-[#DB4444]">${price}
                        <span className="line-through ml-[5px] text-black opacity-50">{roundedPrice}</span>
                    </p>
                    <div className="flex gap-[10px]">
                        <ReactStars
                            value={rating}
                            size={24}
                            edit={false}
                            isHalf={true}
                            activeColor="#ffd700"
                        />
                        <p className="text-black opacity-50">({numOfReviews})</p>
                    </div>
                </div>
                {/* <ToastContainer limit={1}/> */}
            </div>
        </>

    )
}

export default Product