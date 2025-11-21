import React from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { productData, categoriesData } from "../../static/data";
import {
    AiOutlineHeart,
    AiOutlineSearch,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown";
import Navbar from "./Navbar";

const Header = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchData, setSearchData] = React.useState([]);
    const [dropDown, setDropDown] = React.useState(false);
    const [active, setActive] = React.useState(false);
    const [activeHeading, setActiveHeading] = React.useState(1);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const filteredProducts = productData?.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase())
        );

        setSearchData(filteredProducts);
    };

    React.useEffect(() => {
        const handleScroll = () => setActive(window.scrollY > 70);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* TOP HEADER */}
            <div className={`${styles.section} py-4`}>
                <div className="w-full flex items-center justify-between">

                    {/* LOGO */}
                    <Link to="/">
                        <img
                            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                            alt="LOGO"
                            className="h-[45px] md:h-[55px]"
                        />
                    </Link>

                    {/* SEARCH BAR */}
                    <div className="flex-1 mx-10 relative max-w-[600px]">
                        <input
                            type="text"
                            placeholder="Search Product..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full h-[45px] pl-4 pr-12 border-2 border-[#3957db] rounded-lg outline-none shadow-sm transition"
                        />
                        <AiOutlineSearch
                            size={26}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
                        />

                        {/* SEARCH RESULTS */}
                        {searchData.length > 0 && (
                            <div className="absolute left-0 top-[50px] w-full bg-white rounded-lg shadow-lg z-20 max-h-[50vh] overflow-y-auto border border-gray-200">
                                {searchData.map((i, index) => {
                                    const Product_name = i.name.replace(/\s+/g, "-");
                                    return (
                                        <Link
                                            to={`/product/${Product_name}`}
                                            key={index}
                                            className="block"
                                        >
                                            <div className="flex items-center gap-3 p-3 hover:bg-gray-100 transition cursor-pointer">
                                                <img
                                                    src={i.image_Url[0].url}
                                                    alt={i.name}
                                                    className="w-[45px] h-[45px] rounded object-cover"
                                                />
                                                <p className="text-gray-800 font-medium">{i.name}</p>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* SELLER BUTTON */}
                    <div className={styles.button}>
                        <Link to="/seller" className="flex items-center text-white">
                            Become Seller
                            <IoIosArrowForward className="ml-1" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* BLUE BAR */}
            <div
                className={`w-full h-[70px] bg-[#3321c8] transition ${active ? "shadow-sm fixed top-0 left-0 z-50" : ""
                    }`}
            >
                <div className={`${styles.section} flex items-center justify-between h-full`}>

                    {/* CATEGORY DROPDOWN */}
                    <div className="relative h-[60px] w-[270px]">

                        <BiMenuAltLeft
                            size={30}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700"
                        />

                        <button
                            onClick={() => setDropDown(!dropDown)}
                            className="w-full h-full flex justify-between items-center pl-12 pr-10 bg-white rounded-md font-medium text-lg hover:bg-gray-100 transition border border-gray-200 shadow-sm"
                        >
                            All Categories
                        </button>

                        <IoIosArrowDown
                            size={20}
                            onClick={() => setDropDown(!dropDown)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
                        />

                        {dropDown && (
                            <DropDown
                                categoriesData={categoriesData}
                                setDropDown={setDropDown}
                            />
                        )}
                    </div>

                    {/* NAVBAR */}
                    <Navbar active={activeHeading} setActiveHeading={setActiveHeading} />

                    {/* ACTION ICONS */}
                    <div className="flex items-center gap-6">

                        {/* HEART ICON */}
                        <div className="relative cursor-pointer">
                            <AiOutlineHeart size={30} className="text-white" />
                            <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-[#3bc177] text-white text-[10px] rounded-full font-semibold">
                                0
                            </span>
                        </div>

                        {/* CART ICON */}
                        <div className="relative cursor-pointer">
                            <AiOutlineShoppingCart size={30} className="text-white" />
                            <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-[#3bc177] text-white text-[10px] rounded-full font-semibold">
                                1
                            </span>
                        </div>

                        {/* PROFILE ICON */}
                        <div className="relative cursor-pointer">
                            <Link to='/Login'>
                                <CgProfile size={30} className="text-white" />
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Header;
