import React from "react";
import Service from "../components/Service";
import {
    FaUsers,
    FaBirthdayCake,
    FaSchool,
    FaShoppingBag,
} from "react-icons/fa";

const Services = () => {
    const services = [
        {
            id: 1,
            title: "School Clubs Parties",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.?",
            Icon: FaSchool,
        },
        {
            id: 2,
            title: "Holiday Camps",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.?",
            Icon: FaShoppingBag,
        },
        {
            id: 3,
            title: "Birthday Parties",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.?",
            Icon: FaBirthdayCake,
        },
        {
            id: 4,
            title: "1-2-1 / Group Sessions",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.?",
            Icon: FaUsers,
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
