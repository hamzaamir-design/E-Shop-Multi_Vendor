import React from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../../styles/styles";
import {
    AiOutlineMessage,
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductDetailsCard = ({ setOpen, data }) => {
    const [count, setCount] = React.useState(1);
    const [click, setClick] = React.useState(false);

    const incrementCount = () => {
        setCount((prev) => prev + 1);
    };

    const decrementCount = () => {
        setCount((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const handleMessageSubmit = () => {
        // Message action
    };

    return (
        <div className="bg-white">
            {data ? (
                <div className="fixed top-0 left-0 w-full h-screen bg-[#00000040] flex items-center justify-center z-[9999]">
                    <div className="w-[90%] lg:w-[65%] h-[90vh] bg-white rounded-xl shadow-lg relative flex overflow-hidden">

                        {/* CLOSE BUTTON */}
                        <RxCross1
                            size={32}
                            className="absolute top-4 right-4 cursor-pointer z-50 text-gray-700 hover:text-black"
                            onClick={() => setOpen(false)}
                        />

                        {/* MAIN CONTENT */}
                        <div className="w-full flex flex-col lg:flex-row">

                            {/* LEFT — FIXED IMAGE SIDE */}
                            <div className="w-full lg:w-[50%] p-5 sticky top-0 h-full self-start border-r">
                                <img
                                    src={data.image_Url[0].url}
                                    alt={data.name}
                                    className="w-full h-auto max-h-[70vh] object-cover rounded-lg shadow-md"
                                />

                                {/* SHOP INFO */}
                                <div className="flex items-center mt-6">
                                    <img
                                        src={data.shop.shop_avatar.url}
                                        alt=""
                                        className="w-[55px] h-[55px] rounded-full mr-3"
                                    />
                                    <div>
                                        <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                                        <h5 className="text-[15px] text-gray-600">
                                            ({data.shop.ratings}) Ratings
                                        </h5>
                                    </div>
                                </div>

                                {/* MESSAGE BUTTON */}
                                <div
                                    className={`${styles.button} bg-[#111] mt-5 rounded-md h-11 flex items-center justify-center cursor-pointer`}
                                    onClick={handleMessageSubmit}
                                >
                                    <span className="text-white flex items-center">
                                        Send Message <AiOutlineMessage className="ml-2" />
                                    </span>
                                </div>

                                <h5 className="text-[16px] text-red-500 font-medium mt-4">
                                    ({data.total_sell}) Sold Out
                                </h5>
                            </div>

                            {/* RIGHT — SCROLLABLE DETAILS SIDE */}
                            <div className="w-full lg:w-[50%] p-6 overflow-y-auto h-[90vh]">

                                <h1 className={`${styles.productTitle} text-[24px]`}>
                                    {data.name}
                                </h1>

                                <p className="mt-3 text-gray-700">{data.description}</p>

                                {/* PRICE SECTION */}
                                <div className="flex items-center pt-5">
                                    <h4 className={`${styles.productDiscountPrice}`}>
                                        ${data.discount_price}
                                    </h4>
                                    {data.price && (
                                        <h3 className={`${styles.price} line-through ml-3 text-gray-500`}>
                                            ${data.price}
                                        </h3>
                                    )}
                                </div>

                                {/* QUANTITY + WISHLIST */}
                                <div className="flex items-center mt-10 justify-between pr-3">

                                    {/* QUANTITY */}
                                    <div className="flex items-center">
                                        <button
                                            onClick={decrementCount}
                                            className="bg-[#0fb5ba] text-white font-bold px-4 py-[10px] rounded-l shadow-md"
                                        >
                                            -
                                        </button>
                                        <span className="bg-gray-200 text-gray-800 px-5 py-[11px] font-medium">
                                            {count}
                                        </span>
                                        <button
                                            onClick={incrementCount}
                                            className="bg-[#0fb5ba] text-white font-bold px-4 py-[10px] rounded-r shadow-md"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* WISHLIST */}
                                    <div>
                                        {click ? (
                                            <AiFillHeart
                                                size={32}
                                                className="cursor-pointer transition"
                                                onClick={() => setClick(false)}
                                                color="red"
                                                title="Remove from wishlist"
                                            />
                                        ) : (
                                            <AiOutlineHeart
                                                size={32}
                                                className="cursor-pointer transition"
                                                onClick={() => setClick(true)}
                                                color="#333"
                                                title="Add to wishlist"
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* ADD TO CART BUTTON */}
                                <div
                                    className={`${styles.button} bg-[#0fb5ba] mt-7 rounded-md h-12 flex items-center justify-center cursor-pointer`}
                                >
                                    <span className="text-white flex items-center text-[17px] font-medium">
                                        Add to Cart <AiOutlineShoppingCart className="ml-2" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ProductDetailsCard;
