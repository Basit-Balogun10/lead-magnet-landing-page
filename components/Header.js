import React, { useContext, useState } from "react";
import NavItem from "./NavItem";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Header = () => {
    const [mobileMenu, toggleMobileMenu] = useState(false);

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
                                    src="/images/john_fenton_logo.png"
                                    className="w-16 h-16 rounded-lg"
                                    alt="John Fenton Logo"
                                />
                                <div className="flex items-center justify-center md:justify-end space-x-1 md:space-x-4">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            window.open(
                                                "https://www.instagram.com/johntechnicalsoccer",
                                                "_blank",
                                                "noreferrer"
                                            )
                                        }
                                        className="p-2 text-4xl text-red-500 hover:bg-red-100 rounded-full border-none outline-none cursor-pointer"
                                    >
                                        <FaInstagram />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            window.open(
                                                "https://www.facebook.com/profile.php?id=100064048421709",
                                                "_blank",
                                                "noreferrer"
                                            )
                                        }
                                        className="p-2 text-4xl text-blue-700 hover:bg-blue-100 rounded-full border-none outline-none cursor-pointer"
                                    >
                                        <FaFacebook />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            window.open(
                                                "https://wa.me/+447920524145",
                                                "_blank",
                                                "noreferrer"
                                            )
                                        }
                                        className="p-2 text-4xl text-green-400 hover:bg-green-100 rounded-full border-none outline-none cursor-pointer"
                                    >
                                        <FaWhatsapp />
                                    </button>
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
