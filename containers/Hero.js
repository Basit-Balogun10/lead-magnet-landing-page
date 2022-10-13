import React from "react";
import { FaFutbol } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";

const Hero = () => {
    const logoUrl = "/images/vision_football_club_logo.png";

    return (
        <section
            id="hero"
            className="md:h-[55vh] flex-col bg-gray-300/70 px-4 py-8 md:py-0 md:px-0 rounded-md"
        >
            <div className="flex flex-col-reverse md:flex-row md:flex-nowrap md:items-center md:justify-evenly md:space-y-0 h-full">
                <img
                    src="/images/group_photo.jpg"
                    className="w-104 h-72 mt-6 md:mt-0 shadow-xl shadow-black rounded-3xl md:rounded-[40rem] md:rounded-br-[160rem]"
                />
                <div className="text-black space-y-4">
                    <div className="text-center space-y-2">
                        <h1 className="md:text-left text-[1.65rem] md:text-4xl font-extrabold font-[montserrat] text-black/90">
                            VISION FOOTBALL CLUB
                        </h1>
                        <div className="flex justify-center items-center space-x-4 text-center">
                            <TiLocation className="text-2xl text-mainColor" />
                            <h3 className="text-sm text-black/80 font-[pacifico] italic space-x-2 tracking-wider md:tracking-widest">
                                John Roan Playing Fields SE3 9NF
                            </h3>
                        </div>
                        <div className="flex justify-center items-center space-x-4 text-center">
                            <FaFutbol className="text-2xl text-mainColor" />
                            <h3 className="text-sm text-black/80 font-[pacifico] italic space-x-2 tracking-wider md:tracking-widest">
                                Identifying and Developing Players
                            </h3>
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={() =>
                                window.open(
                                    "https://www.instagram.com/vision.footballclub/",
                                    "_blank",
                                    "noreferrer"
                                )
                            }
                            className="text-[montserrat] transition-colors ease-in-out shadow-lg shadow-black font-semibold border focus:outline-none ring-4 rounded-xl px-6 py-[0.875rem] mr-2 mb-2 bg-secondaryColor text-black border-secondaryColor hover:bg-gradient-to-tr from-yellow-100 to-mainColor ring-yellow-200/50"
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
