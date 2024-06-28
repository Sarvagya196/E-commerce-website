import React from "react"
import {useNavigate} from "react-router-dom"

function NotFound(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    }
    return (
        <>
        <div className="px-[100px] md:max-lg:px-[40px] max-[767px]:px-[20px] flex flex-col items-center justify-center h-[100vh] md:max-lg:h-[75vh] max-[767px]:h-auto max-[767px]:py-[100px] w-full gap-[100px]">
            <div className="flex flex-col items-center gap-[40px]">
                <h1 className="text-[110px] max-[767px]:text-[40px] text-center">404 Page Not Found</h1>
                <p className="text-center">Your visited page not found. You may go home page.</p>
            </div>

            <button
            onClick={handleClick}
            className="px-[48px] py-[10px] bg-[#DB4444] text-white rounded">Back to home Page</button>
        </div>
        </>
    )
}

export default NotFound;