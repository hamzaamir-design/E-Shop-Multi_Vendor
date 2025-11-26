import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";

const EventCard = () => {
    return (
        <div className="w-full bg-white rounded-2xl transition-all duration-300 overflow-hidden lg:flex">

            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-64 lg:h-auto">
                <img
                    src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
                    alt="iPhone 14 Pro Max"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center gap-4">
                <h2 className="text-xl lg:text-2xl font-extrabold text-gray-900">
                    iPhone 14 Pro Max 8/256
                </h2>

                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dicta
                    illum laborum iure nobis facilis voluptate inventore eligendi nemo
                    eaque, reprehenderit quod alias animi iusto officia tenetur
                    necessitatibus eum dolore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit optio
                    quis tempore nihil recusandae.
                </p>

                {/* Pricing + Timer Row */}
                <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className="line-through text-lg text-red-500 font-medium">
                                $1099
                            </span>
                            <span className="text-xl font-bold text-gray-900">$999</span>
                        </div>

                        <span className="text-green-600 text-sm font-semibold mt-1">
                            120 Sold
                        </span>
                    </div>

                    <CountDown />
                </div>
            </div>

        </div>
    );
};

export default EventCard;
