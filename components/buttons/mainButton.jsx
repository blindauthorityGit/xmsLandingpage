import React from "react";
import Link from "next/link";

const MainButton = (props) => {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={`mt-4 w-full min-w-[250px] max-w-[300px] ${
                props.accent ? "bg-accentColor text-darkColor" : "bg-primaryColor text-white"
            } rounded-3xl  px-12 py-4 font-freight text-lg uppercase tracking-widest  transition-all  duration-500 hover:bg-primaryColor-600 md:text-lg lg:mt-4 lg:px-8 xl:mt-8 xl:px-12 xl:text-2xl`}
        >
            {props.children}
        </button>
    );
};

export default MainButton;
