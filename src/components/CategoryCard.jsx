import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

function CategoryCard( {cId, cName} ){
    
    const navigate = useNavigate();
    const [onHover, setOnHover] = useState(false);

    const handleHover = () => {
        setOnHover(true);
    }

    const handleHoverEnd = () => {
        setOnHover(false);
    }

    const handleClick = () => {
        navigate(`/Category/${cName}`);
    }

    return (
        <>
        <div
        onMouseOver={handleHover}
        onMouseOut={handleHoverEnd}
        onClick={handleClick}
        className={`flex flex-col gap-[20px] items-center justify-center w-[170px] h-[145px] border-[1px] rounded ${onHover ? "bg-[#DB4444] text-white" : ""}`}
        >
            <img alt="" src={JSON.parse(localStorage.getItem(`${cId}`))} className={`w-[56px] h-[56px]`}></img>
            <h5 className="text-base">{cName}</h5>
        </div>
        </>
    )
}

export default CategoryCard;