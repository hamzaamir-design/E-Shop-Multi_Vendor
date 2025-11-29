import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";

const Cart = ({ setOpenCart }) => {
    const cartData = [
        { name: "Iphone 14 Pro Max 256GB – Silver", price: 999 },
        { name: "Iphone 14 Pro Max 256GB – Silver", price: 245 },
        { name: "Iphone 14 Pro Max 256GB – Silver", price: 650 },
    ];

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50">
            <div className="fixed top-0 right-0 w-[28%] min-w-[330px] h-full bg-white shadow-xl flex flex-col rounded-l-xl overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b bg-gray-50">
                    <div className="flex items-center gap-2">
                        <IoBagHandleOutline size={25} className="text-gray-700" />
                        <h2 className="text-lg font-semibold text-gray-800">
                            {cartData.length} Items in Cart
                        </h2>
                    </div>

                    <RxCross1
                        onClick={() => setOpenCart(false)}
                        size={28}
                        className="cursor-pointer hover:text-red-500 transition"
                    />
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {cartData.map((item, index) => (
                        <CartItem key={index} data={item} />
                    ))}
                </div>

                {/* Footer */}
                <div className="p-6 border-t bg-white shadow-inner">
                    <Link to="/checkout">
                        <button className="
                                w-full 
                                h-[56px] 
                                bg-red-500 
                                hover:bg-red-600 
                                active:bg-red-700
                                text-white 
                                rounded-xl 
                                text-[18px] 
                                font-semibold 
                                tracking-wide
                                shadow-lg 
                                hover:shadow-xl 
                                transition-all 
                                duration-200
                        ">
                            Checkout Now (USD $1000)
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

const CartItem = ({ data }) => {
    const [qty, setQty] = useState(1);
    const total = qty * data.price;

    return (
        <div className="flex items-center gap-4 border rounded-lg p-3 shadow-sm hover:shadow-md transition">

            {/* Quantity */}
            <div className="flex flex-col items-center gap-2">
                <button
                    className="w-[28px] h-[28px] bg-red-500 text-white rounded-full flex items-center justify-center shadow hover:bg-red-600 transition"
                    onClick={() => setQty(qty + 1)}
                >
                    <HiPlus size={16} />
                </button>

                <span className="text-[16px] font-semibold text-gray-700">{qty}</span>

                <button
                    className="w-[28px] h-[28px] bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                >
                    <HiOutlineMinus size={16} className="text-gray-700" />
                </button>
            </div>

            {/* Image */}
            <img
                src="https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F14.MVMTMWatchBlack.png&w=640&q=75"
                alt="Product"
                className="w-[80px] h-[80px] rounded-lg object-cover shadow-sm"
            />

            {/* Info */}
            <div className="flex-1">
                <h3 className="text-[15px] font-semibold text-gray-800 leading-[18px]">
                    {data.name}
                </h3>

                <p className="text-[14px] text-gray-600 mt-1">
                    ${data.price} x {qty}
                </p>

                <p className="text-[16px] font-bold text-red-500">
                    USD${total}
                </p>
            </div>

            {/* Delete */}
            <RxCross1 className="cursor-pointer hover:text-red-500 transition" size={20} />
        </div>
    );
};

export default Cart;
