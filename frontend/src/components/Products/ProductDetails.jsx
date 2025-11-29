import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart, AiOutlineMessage } from "react-icons/ai"
import Ratings from "./Ratings.jsx";

const ProductDetails = ({ data }) => {

    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState(0);
    const navigate = useNavigate();

    const decrease = () => setCount(prev => (prev > 1 ? prev - 1 : 1));
    const increase = () => setCount(prev => prev + 1);

    const addToCart = () => {
        if (!data) return;
        navigate('/cart', { state: { id: data._id, qty: count } });
    };

    const toggleWishlist = () => setClick(prev => !prev);

    const handleMessageSubmit = () => {
        navigate("/inbox?conversation-50?xsfdsfgdafjdkf");
    };

    return (
        <div className="bg-white">
            {data && (
                <div className={`${styles.section} w-full py-8`}>

                    {/* Two column on large screens, stacked on mobile */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* LEFT: Images */}
                        <div className="w-full flex flex-col items-center">
                            <img
                                src={data.image_Url?.[select]?.url}
                                alt={data.name}
                                className="w-full max-w-[400px] object-contain"
                            />

                            <div className="mt-6 grid grid-cols-4 sm:grid-cols-6 gap-3 pl-35">
                                {data.image_Url?.map((img, i) => (
                                    <div
                                        key={i}
                                        className={`cursor-pointer p-1 rounded-lg border 
                                            transition-all
                                            ${select === i ? "border-blue-500" : "border-gray-200"}`}
                                        onClick={() => setSelect(i)}
                                    >
                                        <img
                                            src={img.url}
                                            className="h-20 w-20 object-cover rounded-md"
                                            alt=""
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: Product Details */}
                        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16">

                            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
                            <p className="text-2xl font-semibold text-blue-600">${data.price}</p>

                            <p className="text-gray-600 leading-relaxed text-justify">
                                {data.description || "No description available."}
                            </p>

                            {/* Quantity Selector */}
                            <div className="flex items-center gap-4 mt-2">

                                {/* Decrease button — solid red */}
                                <button
                                    onClick={decrease}
                                    className="w-10 h-10 flex items-center justify-center 
                                    bg-red-500 text-white rounded-xl 
                                    hover:bg-red-600 transition-colors"
                                >
                                    −
                                </button>

                                <span className="text-lg font-semibold">{count}</span>

                                {/* Increase button — solid green */}
                                <button
                                    onClick={increase}
                                    className="w-10 h-10 flex items-center justify-center 
                                    bg-green-500 text-white rounded-xl
                                    hover:bg-green-600 transition-colors"
                                >
                                    +
                                </button>

                            </div>


                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 mt-3">

                                {/* Add to Cart — solid green */}
                                <button
                                    onClick={addToCart}
                                    className="flex items-center bg-green-500 text-white px-6 py-3 rounded-xl 
                                     shadow-md hover:bg-green-600 transition-colors"
                                >
                                    <AiOutlineShoppingCart className="mr-2 text-xl" />
                                    Add to Cart
                                </button>

                                {/* Wishlist — solid red if clicked, gray if not */}
                                <button
                                    onClick={toggleWishlist}
                                    className={`flex items-center px-6 py-3 rounded-xl shadow-sm transition-colors
                                       ${click
                                            ? "bg-red-500 text-white hover:bg-red-600"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                >
                                    {click ? (
                                        <AiFillHeart className="mr-2 text-white text-xl" />
                                    ) : (
                                        <AiOutlineHeart className="mr-2 text-gray-700 text-xl" />
                                    )}
                                    {click ? "Added to Wishlist" : "Add to Wishlist"}
                                </button>

                            </div>


                            {/* Extra Info */}
                            <div className="text-sm text-gray-500 mt-4">
                                <p><span className="font-medium">Category:</span> {data.category || 'General'}</p>
                                <p><span className="font-medium">Stock:</span> {data.stock > 0 ? `${data.stock} available` : 'Out of stock'}</p>
                            </div>

                            {/* Shop Info */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 bg-gray-50 p-4 rounded-lg shadow-sm">

                                {/* Left: Shop Avatar + Info */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={data.shop.shop_avatar.url}
                                        alt={data.shop.name}
                                        className="w-14 h-14 rounded-full object-cover border border-gray-200"
                                    />

                                    <div className="flex flex-col">
                                        <h3 className={`${styles.shop_name} text-lg font-semibold`}>
                                            {data.shop.name}
                                        </h3>
                                        <span className="text-sm text-gray-600">
                                            ({data.shop.ratings}) Ratings
                                        </span>
                                    </div>
                                </div>

                                {/* Right: Send Message Button */}
                                <button
                                    onClick={handleMessageSubmit}
                                    className="flex items-center bg-purple-600 text-white px-5 py-2 rounded-lg 
                                     hover:bg-purple-700 transition-colors font-medium shadow"
                                >
                                    Send Message
                                    <AiOutlineMessage className="ml-2 text-lg" />
                                </button>

                            </div>


                        </div>

                    </div>

                    {/* Additional Info Tab */}
                    <ProductDetailsInfo data={data} />
                </div>
            )}
        </div>
    );
};



const ProductDetailsInfo = ({
    data,
    products,
    totalReviewsLength,
    averageRating,
}) => {
    const [active, setActive] = useState(1);
    const [showFull, setShowFull] = useState(null);

    return (
        <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded mx-15 mt-10">
            <div className="w-full flex justify-between border-b pt-10 pb-2">
                <div className="relative">
                    <h5
                        className={
                            "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
                        }
                        onClick={() => setActive(1)}
                    >
                        Product Details
                    </h5>
                    {active === 1 ? (
                        <div className={`${styles.active_indicator}`} />
                    ) : null}
                </div>
                <div className="relative">
                    <h5
                        className={
                            "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
                        }
                        onClick={() => setActive(2)}
                    >
                        Product Reviews
                    </h5>
                    {active === 2 ? (
                        <div className={`${styles.active_indicator}`} />
                    ) : null}
                </div>
                <div className="relative">
                    <h5
                        className={
                            "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
                        }
                        onClick={() => setActive(3)}
                    >
                        Seller Information
                    </h5>
                    {active === 3 ? (
                        <div className={`${styles.active_indicator}`} />
                    ) : null}
                </div>
            </div>
            {active === 1 ? (
                <div className="py-2 pb-10">
                    <p
                        className={`
                        text-[18px] leading-8 whitespace-pre-line
                        overflow-hidden
                        ${showFull ? "line-clamp-none" : "line-clamp-3"}
                        transition-all duration-300
                    `}
                    >
                        {data.description}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint perferendis recusandae ullam officia, corporis vel illum, tempore eos, doloribus ab totam expedita natus doloremque unde accusamus pariatur repudiandae sunt eius.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nemo velit fugit cumque nihil distinctio tenetur dolores ad et, laudantium adipisci sequi aperiam optio inventore illo saepe at impedit! Repudiandae.
                        Cupiditate natus quod a dolorem. Corrupti sed sint libero unde dolorum voluptas adipisci! Saepe excepturi assumenda quas reprehenderit deserunt animi totam unde natus vitae ea facilis, quisquam soluta veritatis sequi!
                    </p>

                    <button
                        onClick={() => setShowFull(!showFull)}
                        className="mt-2 text-blue-600 font-medium hover:underline"
                    >
                        {showFull ? "Show less" : "Read more"}
                    </button>
                </div>
            ) : null}


            {/* {active === 2 ? (
                <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
                    {data &&
                    data.reviews.map((item, index) => (
                        <div className="w-full flex my-2">
                            <img
                                src={`${item.user.avatar?.url}`}
                                alt=""
                                className="w-[50px] h-[50px] rounded-full"
                            />
                            <div className="pl-2 ">
                                <div className="w-full flex items-center">
                                    <h1 className="font-[500] mr-3">{item.user.name}</h1>
                                    <Ratings rating={data?.ratings} />
                                </div>
                                <p>{item.comment}</p>
                            </div>
                        </div>
                    ))}

                    <div className="w-full flex justify-center">
                        {data && data.reviews.length === 0 && (
                            <h5>No Reviews have for this product!</h5>
                        )}
                    </div>
                </div>
            ) : null} */}
            {
                active === 2 ? (
                    <div className='w-full justify-center min-h-[40vh] flex items-center'>
                        <p>No Reviews Yet!</p>
                    </div>
                ) : null
            }
            {active === 3 && (
                <div className="w-full p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left Section – Shop Info */}
                    <div className="space-y-4">
                        <Link to={`/shop/preview/${data?.shop?._id}`}>
                            <div className="flex items-center gap-4">
                                <img
                                    src={data?.shop?.shop_avatar?.url}
                                    className="w-14 h-14 rounded-full object-cover"
                                    alt={data?.shop?.name}
                                />

                                <div>
                                    <h3 className={`${styles.shop_name} text-xl font-semibold`}>
                                        {data?.shop?.name}
                                    </h3>
                                    <h5 className="text-sm text-gray-600">
                                        ({data.shop.ratings}) Ratings
                                    </h5>
                                </div>
                            </div>
                        </Link>

                        <p className="text-gray-700 leading-relaxed">
                            {data?.shop?.description}
                            <br />
                            Discover the perfect blend of quality and style with our premium product. Carefully crafted to meet your everyday needs, it delivers exceptional performance while maintaining a sleek, modern design. Whether you're treating yourself or searching for the ideal gift, this product offers reliability, comfort, and lasting value. Experience the difference and elevate your lifestyle today.
                        </p>
                    </div>

                    {/* Right Section – Stats */}
                    <div className="flex flex-col justify-start items-start lg:items-end space-y-4">
                        <div className="space-y-3 text-gray-800 w-full lg:w-auto">
                            <h5 className="font-bold">
                                Joined on:{" "}
                                <span className="font-medium text-gray-700">
                                    14 March,2023
                                </span>
                            </h5>

                            <h5 className="font-semibold">
                                Total Products:{" "}
                                <span className="font-medium">122</span>
                            </h5>

                            <h5 className="font-semibold">
                                Total Reviews:{" "}
                                <span className="font-medium">324</span>
                            </h5>
                        </div>
                        <div className='pr-10'>
                            <Link to="/">
                                <button className={`${styles.button} rounded-lg h-[42px] px-5`}>
                                    <span className="text-white font-medium">Visit Shop</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};


export default ProductDetails;
