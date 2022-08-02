import React, { useContext, useState } from "react";
import NavItem from "./NavItem";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Header = () => {
    const [mobileMenu, toggleMobileMenu] = useState(false);
    const logoUrl = "/images/mcr_logo.png";

    const toggleMenu = () => {
        toggleMobileMenu(!mobileMenu);
        document.getElementById("hero").classList.toggle("h-screen");
        document.getElementById("hero").classList.toggle("h-fit");
    };

    return (
        <>
            <header>
                <nav className="bg-transparent shadow-lg">
                    <div className="">
                        <div className="py-2 px-6 md:px-16">
                            <div className="flex items-center justify-between md:space-x-4">
                                <img
                                    src="/images/mcr_logo.png"
                                    className="w-16 h-16"
                                />
                                <div className="flex items-center justify-center md:justify-end space-x-1 md:space-x-4">
                                    <a
                                        type="button"
                                        href="https://www.instagram.com/mcr_sports_coaching"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 text-4xl text-red-500 hover:bg-red-100 rounded-full border-none outline-none cursor-pointer"
                                    >
                                        <FaInstagram />
                                    </a>
                                    <a
                                        type="button"
                                        href="https://www.facebook.com/mcrsc/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 text-4xl text-blue-700 hover:bg-blue-100 rounded-full border-none outline-none cursor-pointer"
                                    >
                                        <FaFacebook />
                                    </a>
                                    <a
                                        type="button"
                                        href="https://wa.me/+447871183058"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 text-4xl text-green-400 hover:bg-green-100 rounded-full border-none outline-none cursor-pointer"
                                    >
                                        <FaWhatsapp />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {mobileMenu && (
                            <div className="md:hidden transition-all ease-in-out bg-white dark:bg-gray-900 px-2 py-1">
                                <ul className="">
                                    <NavItem
                                        hrefVal="#about"
                                        navItemText="About"
                                        isMobileView={true}
                                    />
                                    <NavItem
                                        hrefVal="#services"
                                        navItemText="Services"
                                        isMobileView={true}
                                    />
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
