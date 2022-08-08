import React from "react";
import Service from "../components/Service";
import { FaUsers, FaCampground, FaPeopleArrows } from "react-icons/fa";

const Services = () => {
    const services = [
        {
            id: 1,
            title: "1-2-1 & Small Group Technical Coaching",
            desc: "We help put you in the centre of attention- focusing on the individual needs of players and working towards your personal goals.",
            Icon: FaUsers,
        },
        {
            id: 2,
            title: "Player Development Centres",
            desc: "Advanced coaching with a combined technical and tactical focus for children of all abilities and experiences",
            Icon: FaPeopleArrows,
        },
        {
            id: 3,
            title: "Technical Masterclass Camps",
            desc: "Let's help you recognize weak areas, work on them and get you prepared for the upcoming season with memory-making experiences and exposure to new friends",
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
