import React from "react";
import { FaFutbol } from "react-icons/fa";

const Hero = () => {

    return (
        <section
            id="hero"
            className="md:h-[52vh] flex-col bg-gray-300/70 px-4 py-8 md:py-0 md:px-0 rounded-md"
        >
            <div className="flex flex-col-reverse md:flex-row md:flex-nowrap md:items-center md:justify-evenly md:space-y-0 h-full">
                <img
                    src="/images/group_photo.png"
                    className="w-104 h-64 md:h-72 mt-6 md:mt-0 shadow-xl shadow-black rounded-3xl md:rounded-[40rem] md:rounded-br-[160rem]"
                />
                <div className="md:w-2/5 space-y-4">
                    <div className="text-center">
                        <h1 className="mb-2 text-[1.65rem] md:text-4xl font-extrabold font-[montserrat] /90">
                            JOHN FENTON TECHNICAL SOCCER COACHING
                        </h1>
                        <h3 className="text-sm /80 font-[pacifico] italic space-x-2 tracking-wider md:tracking-widest">
                            <span>
                                UEFA/FA Licensed Premier League Academy Coach &
                                Scout
                            </span>
                        </h3>
                    </div>
                    <div className="flex justify-center items-center space-x-4 text-center">
                        <FaFutbol className="text-2xl text-mainColor" />
                        <p className="leading-relaxed text-md md:text-sm font-semibold /80">
                            Links with Professional Football Clubs
                        </p>
                    </div>
                    <div className="flex justify-center items-center space-x-4 text-center">
                        <FaFutbol className="text-2xl text-mainColor" />
                        <p className="leading-relaxed text-md md:text-sm font-semibold /80">
                            Talent Identification & Recruitment
                        </p>
                    </div>
                    <div className="flex justify-center items-center space-x-4 text-center">
                        <FaFutbol className="text-2xl text-mainColor" />
                        <p className="leading-relaxed text-md md:text-sm font-semibold /80">
                            Ex Liverpool and Everton FC
                        </p>
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={() =>
                                window.open(
                                    "https://wa.me/+447871183058",
                                    "_blank",
                                    "noreferrer"
                                )
                            }
                            className="text-[montserrat] transition-colors ease-in-out shadow-lg shadow-black font-semibold border focus:outline-none ring-4 rounded-xl px-6 py-[0.875rem] mr-2 mb-2 bg-mainColor  border-mainColor hover:bg-red-500 ring-red-500/30 hover:border-red-500/30"
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
