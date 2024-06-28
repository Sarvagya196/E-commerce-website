import React from "react"

function YourOrders(){
    let allOrders = JSON.parse(localStorage.getItem("yourOrders"));
    const user = JSON.parse(localStorage.getItem("activeUser"));
    allOrders = allOrders.filter((item) => (item.userId === user.id));
    
    return (
        <>
            {(allOrders && allOrders?.length) ? (
            <>
                <div className="p-[100px] md:max-lg:p-[40px] max-[767px]:px-[20px] max-[767px]:py-[40px] flex flex-col-reverse gap-[20px]">
                {allOrders?.map((item, index) => {
                    return (
                        <div className="px-[20px] max-[767px]:px-[10px] py-[10px] bg-[#0000000D] grid grid-cols-4 max-[767px]:grid-cols-5 rounded max-[767px]:gap-[10px]">
                            <div className="flex w-full items-center gap-[20px] max-[767px]:gap-[10px] max-[767px]:col-span-2 justify-start">
                                <img src={item.pImage} alt="" className="h-[40px] w-[40px]"></img>
                                <p>{item.name}</p>
                            </div>
                            <p className="flex w-full items-center justify-center">{item.price}</p>

                            <div className="flex items-center justify-center">
                                {item.quantity}
                            </div>

                            <p className="flex w-full items-center justify-end">{item.price * item.quantity}</p>
                        </div>
                    )
                }
                )}
                </div>
            </>
            ): <div className="p-[100px] max-[767px]:p-[20px] md:max-lg:p-[40px] text-2xl">No Orders to Display</div>}
          
        </>
    )
}

export default YourOrders;