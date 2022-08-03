import React from "react";
import { FaFutbol } from "react-icons/fa";

const Hero = () => {
    const logoUrl = "/images/mcr_logo.png";

    return (
        <section
            id="hero"
            className="md:h-[55vh] flex-col bg-gray-300/70 px-4 py-8 md:py-0 md:px-0 rounded-md"
        >
            <div className="flex flex-col-reverse md:flex-row md:flex-nowrap md:items-center md:justify-evenly md:space-y-0 h-full">
                <img
                    src="/images/group_photo.png"
                    className="w-104 h-72 mt-6 md:mt-0 shadow-xl shadow-black rounded-3xl md:rounded-[40rem] md:rounded-br-[160rem]"
                />
                <div className="text-black space-y-4">
                    <div className="text-center">
                        <h1 className="mb-2 md:text-left text-[1.65rem] md:text-4xl font-extrabold font-[montserrat] text-black/90">
                            MCR SPORTS COACHING
                        </h1>
                        <h3 className="text-sm text-black/80 font-[pacifico] italic space-x-2 tracking-wider md:tracking-widest">
                            <span>Wisdom and Effort </span>
                            <span className="not-italic text-black">⚫</span>
                            <span>Concilio et Labore</span>
                        </h3>
                    </div>
                    <div className="hidden md:flex items-center space-x-4 text-center">
                        <FaFutbol className="text-2xl text-[#ffff00]" />
                        <p className="leading-relaxed text-md md:text-sm font-semibold text-black/80">
                            Football Coaching in Manchester for 1-6 year olds
                        </p>
                    </div>
                    <div className="hidden md:flex items-center space-x-4 text-center">
                        <FaFutbol className="text-2xl text-[#ffff00]" />
                        <p className="leading-relaxed text-md md:text-sm font-semibold text-black/80">
                            Holiday Camps | Birthday Parties | 1-2-1 | Group
                            Coaching
                        </p>
                    </div>
                    <div className="md:hidden flex items-center space-x-4 text-center">
                        <FaFutbol className="text-2xl text-[#ffff00]" />
                        <p className="leading-relaxed text-md md:text-sm font-semibold text-black/80">
                            Football Coaching in Manchester
                        </p>
                    </div>
                    <div className="md:hidden flex items-center space-x-4 text-center">
                        <FaFutbol className="text-2xl text-[#ffff00]" />
                        <p className="leading-relaxed text-md md:text-sm font-semibold text-black/80">
                            Holiday Camps | Birthday Parties
                        </p>
                    </div>
                    <div className="md:hidden flex items-center space-x-4 text-center">
                        <FaFutbol className="text-2xl text-[#ffff00]" />
                        <p className="leading-relaxed text-md md:text-sm font-semibold text-black/80">
                            1-6 year olds | 1-2-1 | Group Coaching
                        </p>
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={() =>
                                window.open("https://wa.me/+447871183058", "_blank", "noreferrer")
                            }
                            className="text-[montserrat] transition-colors ease-in-out shadow-lg shadow-black font-semibold border focus:outline-none ring-4 rounded-xl px-6 py-[0.875rem] mr-2 mb-2 bg-[#fdf801] text-black border-[#fdf801] hover:bg-gradient-to-tr from-yellow-100 to-[#ffff00] ring-yellow-200/50"
                        >
                            BOOK NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
