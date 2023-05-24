import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const LineButtonWhite = (props) => {
    return (
        <Link href={`${props.link}`}>
            <a>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="transition-all-ease mt-4 min-w-[300px] border border-primaryColor-50 px-12 py-4 font-freight  text-lg uppercase  tracking-widest text-primaryColor-50 xl:text-2xl"
                >
                    {props.children}
                </motion.button>
            </a>
        </Link>
    );
};

export default LineButtonWhite;
