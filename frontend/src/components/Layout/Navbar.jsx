import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import styles from "../../styles/styles";

const Navbar = ({ active, setActiveHeading }) => {
    return (
        <div className={` 800px:flex ${styles.normalFlex}`}>
            {navItems.map((item, index) => (
                <div key={index} className="flex">
                    <Link
                        to={item.url}
                        onClick={() => setActiveHeading(index + 1)}
                        className={`
                            px-6 font-500px cursor-pointer 
                            ${active === index + 1
                                ? "text-[#17dd1f]"
                                : "text-white"}
                        `}
                    >
                        {item.title}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Navbar;
