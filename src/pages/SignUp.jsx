import React, { useEffect, useState } from "react";
import SideImage from "../assets/SideImage.png"
import IconGoogle from "../assets/Icon-Google.png"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignUpPage(){
   
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        localStorage.removeItem("activeUser");
    }, [])

    function handleSubmit(){
        let data = {
            name : name,
            id : id,
            password : password
        }
        let storeData = JSON.parse(localStorage.getItem("userData")) || [];
        if (name === "" || id === "" || password === ""){
            toast("Please Enter data in all the fields!");
        }
        else if (storeData.some((user) => user.id === id)){
            toast("Choose a different user Id!");
            setId("");
            setPassword("");
        }
        else{
            storeData.push(data);
            localStorage.setItem("userData", JSON.stringify(storeData));
            toast("Account Created! Login to continue");
            setName("");
            setId("");
            setPassword("");
        }
    }



    return (
        <div className="grid grid-cols-2 max-[767px]:flex max-[767px]:items-center max-[767px]:justify-center mt-[40px] mb-[100px]">
            <div className="max-[767px]:hidden">
                <img src={SideImage} alt="sign-up" className=""></img>
            </div>

            <div className="flex flex-col items-end mr-[100px] md:max-lg:mr-[40px] max-[767px]:mr-[20px] justify-center gap-[40px] h-full">
                <div className="flex flex-col items-center justify-center gap-[40px]">
                    <div className="flex flex-col gap-[10px]">
                        <h1 className="text-[36px]">Create Account</h1>
                        <p>Enter your Details below</p>
                    </div>

                    <form className="flex flex-col gap-[15px] w-full">
                        <input
                        value={name} type="text" id="name" placeholder="Name" className="border-b-[1px] border-black"
                        onChange={(e) => setName(e.target.value)}></input>

                        <input
                        value={id} type="text" id="id" placeholder="Email or Phone Number" className="border-b-[1px] border-black"
                        onChange={(e) => setId(e.target.value)}></input>

                        <input
                        value={password} type="password" id="pass" placeholder="Password" className="border-b-[1px] border-black"
                        onChange={(e) => setPassword(e.target.value)}></input>
                    </form>

                    <div className="flex flex-col gap-[10px] w-full">
                        <button
                        type="submit"
                        className="bg-[#DB4444] py-[12px] w-full text-[#FAFAFA] text-base font-medium"
                        onClick={handleSubmit}>
                            Create Account
                        </button>
                        <button
                        type="submit"
                        className="flex items-center justify-center gap-[10px] py-[12px] w-full text-base font-medium border-[1px] border-[#00000066]"
                        onClick={() => {alert("This feature is not currently available!")}}>
                            <img alt="" src={IconGoogle}></img>
                            Sign up with Google
                        </button>
                        <div className="flex gap-[10px] items-center justify-center">
                            <p className="text-base opacity-70">Already have an account?</p>
                            <Link to={"/login"}>Log in</Link>
                        </div>
                        <ToastContainer containerId="SignUp"/>
                    </div>
                </div>
            </div>
            {/* <ToastContainer/> */}
        </div>
    )
}

export default SignUpPage