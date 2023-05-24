import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const LineButton = (props) => {
    return (
        <Link href={`/${props.link}`}>
            <a className="">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-12 py-4 mt-8 min-w-[300px] transition-all-ease text-darkText text-lg xl:text-2xl  uppercase tracking-widest  font-freight border border-darkText"
                >
                    {props.children}
                </motion.button>
            </a>
        </Link>
    );
};

export default LineButton;
