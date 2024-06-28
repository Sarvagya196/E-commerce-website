import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import ReactStars from "react-rating-stars-component";
import heart from "../assets/Heart.png"
import ret from "../assets/Return.png"
import del from "../assets/Deliver.png"
import Product from "../components/Product";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ViewProduct(){
    const [products, setProducts] = useState();
    const [mainImage, setMainImage] = useState();
    let [otherProducts, setOtherProducts] = useState([]);
    const [noOfProducts, setNumber] = useState(1);
    const { id } = useParams();
    const navigate = useNavigate();

    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    console.log(id);

    const handleDec = () => {
        if (noOfProducts === 1) return;
        setNumber(noOfProducts-1);
    }

    const handleInc = () => {
        setNumber(noOfProducts+1);
    }

    const getProductDetail = async () => {
        try { 
            const response = await fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => res);
            console.log(response);
        if (response){
            setProducts(response);
        }
        } catch (error) {
            console.log("error", error);
        }
    }

    const getOtherProducts = async () => {
        try {
            const others = await fetch('https://dummyjson.com/products?limit=0')
                .then(res => res.json())
                .then(res => res);
            //(console.log("others", others));
            if (others?.products){
                setOtherProducts(others?.products);
            }
        } catch (error) {
            console.log("failed to fetch products", error)
        }
    }

    const handleClick = () => {
        const item = {
            id : products.id,
            name : products.title,
            price : products.price,
            quantity : noOfProducts,
            pImage : products.thumbnail,
            userId : activeUser.id
        };
        let cartItems = JSON.parse(localStorage.getItem("cartProducts")) || [];
        const alreadyInCart = cartItems.find((product) => product.id === products.id);
        if (alreadyInCart){
            alreadyInCart.quantity++;
        }else{
            cartItems.push(item);
        }
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));
        toast("Item added to Cart!");
    }

    const handleBuyNow = () => {
        handleClick();
        navigate('/checkOut');
    }

    useEffect(() => {
        getProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])

    useEffect(() => {
        getOtherProducts();
    }, [])

    const handleImage = (x) => {
        setMainImage(products?.images[x] ?? products?.thumbnail);
    }

    return (

        <>
        
        {products ? (
            <>
            <div className="mx-[100px] md:max-lg:mx-[40px] max-[767px]:mx-[20px] my-[100px] max-[767px]:my-[40px] grid grid-cols-7 gap-[20px] md:max-lg:gap-[10px] overscroll-none max-[767px]:flex max-[767px]:flex-col">
                <div className="grid grid-rows-4 gap-[10px] max-[767px]:flex max-[767px]:flex-wrap max-[767px]:justify-between">
                    <img alt="" src={products?.images[0] ?? products?.thumbnail} onClick={() => handleImage(0)} className="h-[140px] md:max-lg:h-[120px] w-full max-[767px]:w-[20vw] bg-[#F5F5F5]"></img>
                    <img alt="" src={products?.images[1] ?? products?.thumbnail} onClick={() => handleImage(1)} className="h-[140px] md:max-lg:h-[120px] w-full max-[767px]:w-[20vw] bg-[#F5F5F5]"></img>
                    <img alt="" src={products?.images[2] ?? products?.images[0]} onClick={() => handleImage(2)} className="h-[140px] md:max-lg:h-[120px] w-full max-[767px]:w-[20vw] bg-[#F5F5F5]"></img>
                    <img alt="" src={products?.images[3] ?? products?.images[0]} onClick={() => handleImage(3)} className="h-[140px] md:max-lg:h-[120px] w-full max-[767px]:w-[20vw] bg-[#F5F5F5]"></img>
                </div>

                <div className="col-span-3">
                    <img alt="" src={mainImage ?? products?.thumbnail} className="bg-[#F5F5F5] h-full"></img>
                </div>

                <div className="col-span-3 flex flex-col md:max-lg:gap-[10px] justify-between pl-[40px] md:max-lg:pl-[20px] max-[767px]:pl-0 max-[767px]:gap-[10px]">
                    <h3 className="text-2xl font-semibold">{products.title}</h3>
                    <div className="flex items-center">
                        <ReactStars
                            value={products.rating}
                            size={24}
                            edit={false}
                            isHalf={true}
                            activeColor="#ffd700"
                        />
                        <p className="ml-[5px] text-xl">({products.reviews?.length})</p>
                        <p className="ml-[20px] pl-[20px] border-l-[1px] border-black text-[#00FF66]">In stock</p>
                    </div>
                    <h3 className="text-2xl">${products.price}</h3>
                    <p className="text-sm">{products.description}</p>
                    <div className="border-[1px] opacity-50 w-full"></div>
                    <div className="flex gap-[20px]">
                        <h6 className="text-lg">Colours:</h6>
                        <div className="flex gap-[5px]">
                            <input type="radio" className="bg-blue color-blue"></input>
                            <input type="radio" className="bg-blue"></input>
                        </div>
                    </div>

                    <div className="flex gap-[20px]">
                        <h6 className="text-lg">Size:</h6>
                        <div className="cursor-pointer flex items-center justify-center border-[1px] border-[#00000080] h-[32px] w-[32px] rounded text-sm">XS</div>
                        <div className="cursor-pointer flex items-center justify-center border-[1px] border-[#00000080] h-[32px] w-[32px] rounded text-sm">S</div>
                        <div className="cursor-pointer flex items-center justify-center border-[1px] border-[#00000080] h-[32px] w-[32px] rounded text-sm">M</div>
                        <div className="cursor-pointer flex items-center justify-center border-[1px] border-[#00000080] h-[32px] w-[32px] rounded text-sm">L</div>
                        <div className="cursor-pointer flex items-center justify-center border-[1px] border-[#00000080] h-[32px] w-[32px] rounded text-sm">XL</div>
                    </div>

                    <div className="flex md:max-lg:flex-wrap gap-[20px] md:max-lg:gap-[10px] max-[767px]:flex-wrap max-[767px]:justify-between">
                        <div className="flex items-center justify-center">
                            <button
                            onClick={handleDec}
                            className="py-[10px] px-[10px] border-[1px] border-[#000080] rounded-l">-</button>
                            <p className="py-[10px] border-t-[1px] border-b-[1px] border-[#000080] px-[32px] md:max-lg:px-[16px] max-[767px]:px-[16px]">{noOfProducts}</p>
                            <button
                            onClick={handleInc}
                            className="py-[10px] px-[10px] border-[1px] border-[#000080] rounded-r">+</button>
                        </div>
                        <button
                        onClick={handleBuyNow}
                        className="py-[10px] px-[20px] md:max-lg:px-[12px] bg-[#DB4444] text-white border-[1px] border-[#DB4444] rounded"
                        >Buy Now</button>

                        <button
                        onClick={handleClick}
                        className="py-[10px] px-[20px] md:max-lg:px-[12px] border-[1px] border-black rounded"
                        >
                            Add to cart</button>
                        <button className="max-[767px]:hidden p-[10px] border-[1px] rounded border-[#000080]"><img alt="" src={heart}></img></button>
                        <ToastContainer containerId = "ProductDetails" />
                    </div>

                    <div className="flex flex-col border-[1px] border-[#000080] rounded">
                        <div className="flex gap-[20px] p-[20px] md:max-lg:p-[10px]">
                            <img alt="" src={del}></img>
                            <div className="flex flex-col gap-[10px]">
                                <p className="text-base font-medium">Free Delivary</p>
                                <p className="text-xs">Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className="border-t-[1px] border-black"></div>
                        <div className="flex gap-[20px] p-[20px] md:max-lg:p-[10px]">
                            <img alt="" src={ret}></img>
                            <div className="flex flex-col gap-[10px]">
                                <p className="text-base font-medium">Return Delivary</p>
                                <p className="text-xs">Free 30 Days Delivery Returns. Details</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </>
        ) : <div>Product Not Available</div>}

        {(otherProducts && otherProducts?.length) ? (
            <>
            <h3 className="ml-[100px] md:max-lg:ml-[40px] max-[767px]:ml-[20px] mb-[40px] pl-[10px] text-base text-[#DB4444] font-semibold border-l-[20px] border-[#DB4444] rounded">Related Item's</h3>
            <div className="flex flex-wrap justify-between md:max-lg:flex-wrap max-[767px]:flex-wrap max-[767px]:justify-center md:max-lg:justify-between gap-[40px] mx-[100px] md:max-lg:mx-[40px] max-[767px]:mx-[20px] mb-[100px] max-[767px]:mb-[40px] overflow-hidden">
                {otherProducts?.map((item) => (
                    (item?.tags[0] === products?.tags[0]) &&
                    item?.id !== products?.id &&
                    <Product key={item?.id} pId={item?.id} pName={item?.title} price={item?.price} originalPrice={item?.price} numOfReviews={50} image={item?.thumbnail} discnt={item?.discountPercentage} rating={item.rating}/>
                ))}
            </div>
            </>
        ) : <div>No</div>}
        </>
    )
}

export default ViewProduct;