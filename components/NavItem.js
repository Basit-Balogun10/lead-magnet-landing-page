import React from "react";

const NavItem = ({ hrefVal, navItemText, isMobileView, lastItem }) => {
    return (
        <>
            {isMobileView ? (
                <li>
                    <a
                        href={hrefVal}
                        className="md:font-semibold rounded-md block py-2 pr-4 pl-3 hover:underline text-black/90"
                    >
                        {navItemText}
                    </a>
                    {!lastItem && <hr className="border-gray-500" />}
                </li>
            ) : (
                <a
                    href={hrefVal}
                    className="md:font-semibold rounded-md block py-2 pr-4 pl-3 hover:underline hover:underline-offset-4 hover:decoration-2 text-black/60"
                >
                    {navItemText}
                </a>
            )}
        </>
    );
};

export default NavItem;
