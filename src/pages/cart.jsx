import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import deleteIcon from "../assets/Delete.png"

function Cart() {
    let cartItems = JSON.parse(localStorage.getItem("cartProducts"));
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("activeUser"));
    cartItems = cartItems.filter((item) => (item?.userId === user?.id))
    const [initialItems, setInitialItems] = useState(cartItems);
    let subTotal = 0;

    const handleChange = (index, e) => {
        const newQuantity = e.target.value;
        if (newQuantity <= 0){
            return;
        }
        const updatedCartItems = cartItems.map((item, i) => {
            if (i === index) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setInitialItems(updatedCartItems);
        localStorage.setItem("cartProducts", JSON.stringify(updatedCartItems));
    }

    function deleteProduct(productId){
        console.log(productId);
        let remainingProducts = cartItems.filter((product) => (product.id !== productId));
        console.log("deleted");
        console.log(remainingProducts);
        setInitialItems(remainingProducts);
        localStorage.setItem("cartProducts", JSON.stringify(remainingProducts));
    }

    const handleCheckOut = () => {
        navigate('/checkOut');
    }


    return (
        <>
            <div className="flex flex-col gap-[20px] mx-[100px] md:max-lg:mx-[40px] max-[767px]:mx-[20px]">
                <div className="px-[20px] max-[767px]:px-[10px] py-[10px] bg-[#0000000D] mt-[100px] grid grid-cols-4 rounded">
                    <p className="flex w-full justify-start">Product</p>
                    <p className="flex w-full justify-center">Price</p>
                    <p className="flex w-full justify-center">Quantity</p>
                    <p className="flex w-full justify-end">Subtotal</p>
                </div>
                {(initialItems && initialItems?.length) ? (
                    <>
                        {initialItems?.map((item, index) => {
                            subTotal += item?.price * item?.quantity;
                            return (
                                <div className="px-[20px] max-[767px]:px-[10px] py-[10px] bg-[#0000000D] grid grid-cols-4 rounded">
                                    <div className="flex w-full items-center gap-[20px] max-[767px]:gap-[10px] justify-start">
                                        <img src={item.pImage} alt="" className="h-[40px] w-[40px]"></img>
                                        <p>{item.name}</p>
                                    </div>
                                    <p className="flex w-full items-center justify-center">{item.price}</p>

                                    <div className="flex item-center justify-center gap-[10px]">
                                        <input type="number"
                                            value={item?.quantity}
                                            onChange={(event) => handleChange(index, event)}
                                            className="flex items-center justify-center bg-transparent w-[40px]" />
                                        <button
                                        onClick={() => deleteProduct(item.id)}
                                        >
                                            <img alt="" src={deleteIcon} className="h-[20px]"></img>
                                        </button>
                                    </div>

                                    <p className="flex w-full items-center justify-end">{(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            )
                        }
                        )}
                    </>
                ) : null}

                <div className="flex justify-between mb-[60px] rounded">
                    <button
                        onClick={() => { navigate('/home') }}
                        className="px-[48px] py-[10px] border-[1px] border-[#00000080] rounded">Back to Home</button>
                    {/* <button className="px-[48px] py-[10px] border-[1px] border-[#00000080] rounded">Update Cart</button> */}
                </div>

                <div className="flex max-[767px]:flex-col max-[767px]:gap-[20px] justify-between mb-[100px] max-[767px]:mb-[40px]">
                    <div className="flex gap-[10px]">
                        <input type="text" className="h-[40px] border-[1px] border-black pl-[20px] rounded" placeholder="Coupen Code"></input>
                        <button
                        onClick={() => {
                            toast("Enter a valid Coupen!");
                        }}
                        className="bg-[#DB4444] h-[40px] border-[1px] border-[#DB4444] px-[48px] max-[767px]:px-[36px] rounded text-white max-[767px]:text-base">Apply Coupen</button>
                        <ToastContainer containerId="Coupen"/>
                    </div>
                    <div className="flex flex-col gap-[30px] py-[20px] px-[10px] border-[2px] border-black rounded">
                        <h3 className="text-xl">Cart Total</h3>
                        <div className="flex flex-col gap-[20px]">
                            <div className="flex justify-between">
                                <p>Subtotal:</p>
                                <p>${subTotal.toFixed(2)}</p>
                            </div>
                            <div className="w-[30vw] max-[767px]:w-auto border-t-[1px] border-black"></div>
                            <div className="flex justify-between">
                                <p>Shipping:</p>
                                <p>Free</p>
                            </div>
                            <div className="w-[30vw] max-[767px]:w-auto border-t-[1px] border-black"></div>
                            <div className="flex justify-between">
                                <p>Total:</p>
                                <p>${subTotal.toFixed(2)}</p>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button
                                onClick={handleCheckOut}
                                className="bg-[#DB4444] h-[40px] border-[1px] border-[#DB4444] px-[48px] rounded text-white"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <ToastContainer/> */}
            </div>
        </>
    )
}

export default Cart;