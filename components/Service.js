import React from "react";

const Service = ({ title, desc, Icon }) => {
    return (
        <div className="group p-8 space-y-3 cursor-pointer transition-colors ease-in-out text-center bg-gray-300/70 rounded-lg hover:bg-secondaryColor">
            <Icon className="mx-auto text-4xl text-secondaryColor group-hover:text-black" />
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-black/80">{desc}</p>
        </div>
    );
};

export default Service;
