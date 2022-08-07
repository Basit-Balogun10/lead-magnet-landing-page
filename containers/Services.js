import React from "react";
import Service from "../components/Service";
import {
    FaUsers,
    FaBirthdayCake,
    FaShoppingBag,
} from "react-icons/fa";

const Services = () => {
    const services = [
        {
            id: 1,
            title: "1-2-1 & Small Group Technical Coaching",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.?",
            Icon: FaUsers,
        },
        {
            id: 2,
            title: "Player Development Centres",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.?",
            Icon: FaShoppingBag,
        },
        {
            id: 3,
            title: "Technical Masterclass Camps",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.?",
            Icon: FaCampground,
        },
    ];
    return (
        <div className="px-12 py-4 mt-1 flex flex-wrap md:flex-nowrap items-center justify-around space-y-6 md:space-y-0 md:space-x-6">
            {services.map((service) => (
                <Service
                    key={service.id}
                    title={service.title}
                    desc={service.desc}
                    Icon={service.Icon}
                />
            ))}
        </div>
    );
};

export default Services;
