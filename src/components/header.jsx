import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "../assets/Component 2.png"
import WishList from "../assets/Wishlist.png"
import Cart from "../assets/Cart.png"

function Header(){

    //const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    const user = JSON.parse(localStorage.getItem("activeUser"));
    let cartItems = JSON.parse(localStorage.getItem("cartProducts"));
    cartItems = cartItems?.filter((item) => (item?.userId === user?.id));
    //let numInCart = cartItems.length;
    const [activeUser,setActiveUser] = useState(user);
    const [numInCart, setNumber] = useState(cartItems?.length);

    useEffect(()=>{
        setNumber(cartItems?.length);
        console.log("Cart Updated");
    },[cartItems, numInCart]);


    useEffect(() => {      
        //let user = JSON.parse(localStorage.getItem("activeUser"));
        //console.log("UseEffect");
        if (user){
            console.log("Came here");
            setActiveUser(user);
        }
        else{
            console.log("No user");
            setActiveUser(null);
        }
    }, []);


    const navigate = useNavigate();

    const viewCart = () => {
        navigate('/cart');
    }
        
        return(
            <>
            <div className="max-[767px]:px-[20px] max-[767px]:text-center bg-black w-full h-[48px] max-[767px]:h-auto flex items-center justify-center max-[767px]:py-[10px]">
                <h3 className="text-sm text-[#FAFAFA] leading-5">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <span className="font-semibold leading-6 ml-[10px]">Shop Now</span>
                </h3>
            </div>
            <div className="border-[0.5px] overflow-hidden">
                <div className="mx-[100px] max-[767px]:mx-[20px] md:max-lg:mx-[40px] mt-[40px] max-[767px]:mt-[20px] mb-[20px] flex max-[767px]:gap-[10px] items-center justify-between">
                    <p className="max-[767px]:hidden text-2xl leading-6 font-bold">Exclusive</p>
                    <div className="flex items-center justify-between gap-[48px] md:max-lg:gap-[20px] max-[767px]:gap-[20px]">
                        <Link to="/home" className="text-base group">Home<div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></Link>
                        <Link to="/contact" className="text-base group">Contact<div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></Link>
                        <Link to="/about" className="text-base group">About<div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></Link>
                        <Link to="/" className="text-base group">SignUp<div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div></Link>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="h-full bg-[#F5F5F5] flex items-center gap-[34px] px-[15px] py-[7px] rounded max-[767px]:hidden">
                            <input
                            type="search"
                            placeholder="what are looking for?"
                            className="h-[100%] bg-transparent text-xs bg-[#F5F5F5]"/>
                            <img alt='' src={SearchIcon} className="w-[16px]"></img>
                        </div>
                        {(user) ? (
                            <>
                                <img alt="" src={WishList} className="cursor-pointer"></img>
                                <img
                                onClick={viewCart}
                                alt=""  src={Cart} className="cursor-pointer">
                                </img>
                                <p className="p-[2px] h-[20px] ml-[-20px] bg-black text-white rounded-full leading-4">{numInCart}</p>
                            </>
                        ) : null} 
                        
                    </div>
                </div>
            </div>
            </>
        )
}

export default Header;