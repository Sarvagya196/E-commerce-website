import React from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CheckOut(){

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("activeUser"));
    let allProducts = JSON.parse(localStorage.getItem("cartProducts"));
    let productsToBuy = allProducts.filter((item) => (item?.userId === user?.id));
    let remainingProducts = allProducts.filter((item) => (item?.userId !== user?.id));
    let subTotal = 0;

    const handleSubmit = () => {
        let orederedProduct = JSON.parse(localStorage.getItem("yourOrders")) || [];
        productsToBuy.forEach((item) => {orederedProduct.push(item)});
        localStorage.setItem("yourOrders", JSON.stringify(orederedProduct));
        localStorage.setItem("cartProducts", JSON.stringify(remainingProducts));
        toast("Order Placed successfully");
        navigate('/orders');
    }

    return(
        <>
        <form
        onSubmit = {handleSubmit}>
        <div className="p-[100px] md:max-lg:p-[40px] max-[767px]:px-[20px] max-[767px]:py-[40px] flex max-[767px]:flex-col max-[767px]:gap-[20px] items-center justify-between">
            <div className="flex flex-col gap-[40px] max-[767px]:gap-[20px]">
                <h1 className="text-4xl font-medium">Billing Details</h1>
                <div className="flex flex-col gap-[20px]">
                    <div className="flex flex-col">
                        <label className="opacity-40">First Name<span className="text-[#DB4444]">*</span></label>
                        <input type="text" className="h-[40px] bg-[#F5F5F5] rounded w-[30vw] max-[767px]:w-auto" required/>
                    </div>
                    <div className="flex flex-col">
                        <label className="opacity-40">Company Name</label>
                        <input type="text" className="h-[40px] bg-[#F5F5F5] rounded w-[30vw] max-[767px]:w-auto"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="opacity-40">Street Address<span className="text-[#DB4444]">*</span></label>
                        <input type="text" className="h-[40px] bg-[#F5F5F5] rounded w-[30vw] max-[767px]:w-auto" required/>
                    </div>
                    <div className="flex flex-col">
                        <label className="opacity-40">Apartment, floor, etc. (optional)</label>
                        <input type="text" className="h-[40px] bg-[#F5F5F5] rounded w-[30vw] max-[767px]:w-auto"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="opacity-40">Town/City<span className="text-[#DB4444]">*</span></label>
                        <input type="text" className="h-[40px] bg-[#F5F5F5] rounded w-[30vw] max-[767px]:w-auto" required/>
                    </div>
                    <div className="flex flex-col">
                        <label className="opacity-40">Phone Number<span className="text-[#DB4444]">*</span></label>
                        <input type="number" className="h-[40px] bg-[#F5F5F5] rounded w-[30vw] max-[767px]:w-auto" required/>
                    </div>
                    <div className="flex flex-col">
                        <label className="opacity-40">Email Address<span className="text-[#DB4444]">*</span></label>
                        <input type="email" className="h-[40px] bg-[#F5F5F5] rounded w-[30vw] max-[767px]:w-auto" required/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[20px] w-[40vw] max-[767px]:w-auto md:max-lg:w-[50vw] items-start max-[767px]:items-center">
                {(productsToBuy && productsToBuy?.length) ? (
                    <>
                    {productsToBuy?.map((item) => {
                        subTotal += item?.price * item?.quantity;
                        return(
                            <div className="flex justify-between items-center w-full pr-[100px] max-[767px]:pr-[0]">
                                <div className="flex gap-[10px] items-center w-full">
                                    <img alt="" src={item.pImage} className="h-[30px]"></img>
                                    <p>{item.name} x {item.quantity}</p>
                                </div>
                                <div>{item.price}</div>
                            </div>
                        )
                    })}
                    </>
                ) : <div>Cart empty!</div>}
                <div className="flex flex-col w-full gap-[10px] pr-[100px] max-[767px]:pr-0">
                    <div className="flex justify-between">
                        <p>Subtotal:</p>
                        <p>${subTotal.toFixed(2)}</p>
                    </div>
                    <div className="w-full border-t-[1px] border-black"></div>
                    <div className="flex justify-between">
                        <p>Shipping:</p>
                        <p>Free</p>
                    </div>
                    <div className="w-full border-t-[1px] border-black"></div>
                    <div className="flex justify-between">
                        <p>Total:</p>
                        <p>${subTotal.toFixed(2)}</p>
                    </div>
                </div>

                <div className="flex gap-[20px] pr-[100px] max-[767px]:pr-0">
                    <input type="radio" required/>
                    <label>Cash On delivery</label>
                </div>

                <div className="flex gap-[10px] w-full justify-between">
                    <input type="text" className="py-[16px] w-[60%] max-[767px]:w-auto border-[1px] border-black pl-[20px] rounded" placeholder="Coupen Code"></input>
                    <button
                    onClick={(e) => {
                        e.preventDefault();
                        toast("Enter a valid Coupen!");
                    }}
                    className="bg-[#DB4444] py-[16px] border-[1px] border-[#DB4444] px-[48px] max-[767px]:px-[24px] md:max-lg:px-[24px] rounded text-white">Apply Coupen</button>
                </div>

                <button
                type="submit"
                className="bg-[#DB4444] py-[16px] border-[1px] border-[#DB4444] px-[48px] max-[767px]:px-[32px] rounded text-white"
                >
                    Place Order</button>


            </div>
            
        </div>
        </form>
        <ToastContainer containerId="CheckOut"/>
        {/* <ToastContainer/> */}
        </>
    )
}

export default CheckOut;