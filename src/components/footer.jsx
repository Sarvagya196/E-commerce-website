import React from "react";
import copyright from "../assets/icon-copyright.png"
import send from "../assets/icon-send.png"
import googleStore from "../assets/playStore.png"
import appStore from "../assets/download-appstore.png"
import qr from "../assets/Qrcode 1.png"
import fb from "../assets/Icon-Facebook.png"
import ins from "../assets/icon-instagram.png"
import x from "../assets/Icon-Twitter.png"
import lin from "../assets/Icon-Linkedin.png"
import { Link } from "react-router-dom";
function Footer(){

    return(
        <>
        <div className="bg-black flex flex-col text-white overflow-hidden">
            <div className="mt-[60px] mb-[40px] mx-[100px] md:max-lg:mx-[40px] max-[767px]:mx-[20px] flex md:max-lg:flex-wrap max-[767px]:flex-wrap justify-between md:max-lg:justify-center md:max-lg:gap-[60px] max-[767px]:gap-[60px]">
                <div className="flex flex-col gap-[10px]">
                    <p className="text-2xl font-bold">Exclusive</p>
                    <p className="text-xl font-medium">Subscribe</p>
                    <p className="text-base">Get 10% off your first order</p>
                    <div className="flex items-center gap-[20px] px-[15px] py-[7px] rounded border-[1.5px] border-white">
                        <input placeholder="Enter your Email" className="text-xs bg-black"></input>
                        <img alt="" src={send} className="w-[16px]"></img>
                    </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                    <p className="text-xl font-medium">Support</p>
                    <p className="text-base">111, Horizon, andheri west, <br></br> Mumbai, India.</p>
                    <p className="text-base">exclusive@gmail.com</p>
                    <p className="text-base">+88015-88888-9999</p>
                </div>

                <div className="flex flex-col gap-[10px]">
                    <p className="text-xl font-medium">Account</p>
                    <Link to="/myAccount" className="text-base">My Account</Link>
                    <Link to="/" className="text-base">Login / Register</Link>
                    <Link to="/cart" className="text-base">Cart</Link>
                    <Link to="/orders" className="text-base">Your Orders</Link>
                    <Link to="/home" className="text-base">Shop</Link>
                </div>

                <div className="flex flex-col gap-[10px]">
                    <p className="text-xl font-medium">Quick Link</p>
                    <Link to="/privacyPolicy" className="text-base">Privacy Policy</Link>
                    <Link to="/" className="text-base">Terms of Use</Link>
                    <Link to="/faqs" className="text-base">FAQ</Link>
                    <Link to="/contact" className="text-base">Contact</Link>
                </div>

                <div className="flex flex-col gap-[10px]">
                    <p className="text-xl font-medium">Download App</p>
                    <p className="text-xs p-[#FAFAFA] opacity-60">Save $3 with App New User Only</p>
                    <div className="flex gap-[5px]">
                        <img alt="" src={qr}></img>
                        <div className="flex flex-col gap-[5px] justify-center">
                            <img alt="" src={googleStore}></img>
                            <img alt="" src={appStore}></img>
                        </div>
                    </div>
                    <div className="flex gap-[20px] mt-[10px]">
                        <img alt="" src={fb}></img>
                        <img alt="" src={x}></img>
                        <img alt="" src={ins}></img>
                        <img alt="" src={lin}></img>
                    </div>
                </div>
            </div>

            <div className="flex gap-[10px] items-center justify-center py-[10px] border-t-[1px] border-[#333]">
                <img alt="" src={copyright} className="opacity-30"></img>
                <p className="text-[#F9F9F933] text-base">Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
        </>
    )
}

export default Footer;