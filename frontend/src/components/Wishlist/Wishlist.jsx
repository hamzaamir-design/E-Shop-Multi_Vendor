import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({ setOpenWishlist }) => {
    const cartData = [
        {
            name: "Iphone 14 Pro Max 256GB SSD – Silver",
            description: "test",
            price: 999,
        },
        {
            name: "Iphone 14 Pro Max 256GB SSD – Silver",
            description: "test",
            price: 245,
        },
        {
            name: "Iphone 14 Pro Max 256GB SSD – Silver",
            description: "test",
            price: 650,
        },
    ];

    return (
        <div className="fixed top-0 left-0 w-full bg-[#00000040] h-screen z-20">
            <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-xl rounded-l-xl">
                <div>
                    {/* Close Icon */}
                    <div className="flex w-full justify-end pt-5 pr-5">
                        <RxCross1
                            size={26}
                            className="cursor-pointer hover:text-red-500 transition"
                            onClick={() => setOpenWishlist(false)}
                        />
                    </div>

                    {/* Wishlist Header */}
                    <div className={`${styles.normalFlex} p-4 border-b`}>
                        <AiOutlineHeart size={26} className="text-red-500" />
                        <h5 className="pl-3 text-[20px] font-[600]">3 Items</h5>
                    </div>

                    {/* Wishlist Items */}
                    <div className="w-full">
                        {cartData.map((i, index) => (
                            <CartSingle key={index} data={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const CartSingle = ({ data }) => {
    const totalPrice = data.price;

    return (
        <div className="border-b p-4 hover:bg-gray-50 transition">
            <div className="w-full flex items-center gap-4">

                {/* Remove Button */}
                <button className="text-gray-500 hover:text-red-500 transition">
                    <RxCross1 size={20} />
                </button>

                {/* Product Image */}
                <img
                    src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F14.MVMTMWatchBlack.png&w=640&q=75"
                    alt=""
                    className="w-[85px] h-[85px] rounded-md shadow-sm object-cover"
                />

                {/* Product Details */}
                <div className="flex flex-col flex-1">
                    <h1 className="text-[15px] font-[600] leading-5 text-gray-900">
                        {data.name}
                    </h1>

                    <h4 className="font-[500] text-[17px] pt-[6px] text-[#d02222] font-Roboto">
                        US${totalPrice}
                    </h4>
                </div>

                {/* Add to Cart */}
                <BsCartPlus
                    size={24}
                    className="cursor-pointer text-gray-700 hover:text-green-600 transition"
                    title="Add to Cart"
                />
            </div>
        </div>
    );
};

export default Wishlist;
