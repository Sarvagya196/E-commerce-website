import React from "react";
import { useState, useEffect } from "react";
import SideImage from "../assets/SideImage.png"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage(){
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("activeUser");
    })

    function handleSubmit(){
        if (id === "" || password === ""){
            toast("Enter both userId and Password");
        }else{
            const users = JSON.parse(localStorage.getItem("userData"));
            if (users == null){
                toast("Create an account to continue");
            }else{
                const userExists = users.find((user) => user.id === id && user.password === password);
                if(userExists){
                    navigate("/home");
                    delete userExists.password;
                    localStorage.setItem("activeUser",JSON.stringify(userExists));
                    toast("Log In Successful !");
                }else{
                    toast("user does not exist!");
            }
            }
        }
    }

    return(
        <>
        <div className="grid grid-cols-2 max-[767px]:flex max-[767px]:items-center max-[767px]:justify-center mt-[40px] mb-[100px]">
            <div className="max-[767px]:hidden">
                <img src={SideImage} alt="sign-up"></img>
            </div>

            <div className="flex flex-col items-end mr-[100px] max-[767px]:mr-[20px] md:max-lg:mr-[40px] justify-center gap-[40px] h-full">
                <div className="flex flex-col items-center justify-center gap-[40px]">
                    <div className="flex flex-col gap-[10px]">
                        <h1 className="text-[36px] font-medium">Log In to exclusive</h1>
                        <p>Enter your Details below</p>
                    </div>

                    <form className="flex flex-col gap-[15px] w-full">
                        <input
                        value={id} type="text" id="id" placeholder="Email or Phone Number" className="border-b-[1px] border-black"
                        onChange={(e) => setId(e.target.value)}></input>

                        <input
                        value={password} type="password" id="pass" placeholder="Password" className="border-b-[1px] border-black"
                        onChange={(e) => setPassword(e.target.value)}></input>
                    </form>

                    <div className="flex flex-col gap-[10px] w-full items-between justify-between">
                        <div className="flex items-center justify-between">
                            <button
                            type="submit"
                            className="bg-[#DB4444] py-[12px] px-[48px] text-[#FAFAFA] text-base font-medium"
                            onClick={handleSubmit}
                            >
                                Log In
                            </button>
                            <button
                            type="submit"
                            className="gap-[10px] py-[12px] text-base text-[#DB4444]"
                            onClick={() => {alert("!!!")}}>
                                Forget Password?
                            </button>
                            <ToastContainer containerId="LogIn"/>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
        {/* <ToastContainer/> */}
        </>
    )
}
export default LoginPage;