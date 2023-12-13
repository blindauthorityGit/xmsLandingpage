import React, { useState, useEffect, useRef, forwardRef } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { useRouter } from "next/router";
import { MainButton } from "../buttons";

import { Newsletter } from "../menues";

//Framer Motion
import { motion, useScroll, useAnimation } from "framer-motion";

const Menu1 = (props) => {
    const router = useRouter();

    const [showOverlay, setShowOverlay] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navRef = useRef(null);
    const animate = useAnimation();

    const ref = useRef(null);

    // const { scrollYProgress } = useScroll();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > navRef.current.offsetTop) {
                navRef.current.classList.add("fixed", "top-0");
                ref.current.classList.remove("hidden", "scale-out-ver-top");
                ref.current.classList.add("scale-up-ver-top", "block");
                setIsScrolled(true);
            } else {
                // navRef.current.classList.remove("fixed");
                ref.current.classList.remove("scale-up-ver-top", "block");
                ref.current.classList.add("scale-out-ver-top");
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Listen for changes in the route
        const handleRouteChange = () => {
            setShowOverlay(false);
        };
        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    const onEnter = (e) => {
        console.log(e.target);
    };

    const textMotion = {
        rest: {
            x: -50,
            opacity: 0,

            transition: {
                duration: 0.85,
                type: "tween",
                ease: "easeIn",
            },
        },
        hover: {
            // color: "blue",
            x: 0,
            opacity: 1,

            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeOut",
            },
        },
    };

    const boxMotion = {
        rest: {
            opacity: 0,
            display: "none",
            ease: "easeOut",
            duration: 0.2,
            type: "spring",
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        },
        hover: {
            opacity: 1,
            display: "block",
            transition: {
                duration: 0.4,
                type: "spring",
                ease: "easeIn",
            },
        },
        end: {
            opacity: 0,
            display: "block",
            transition: {
                duration: 0.4,
                type: "spring",
                ease: "easeIn",
            },
        },
    };

    const pfeilMotion = {
        rest: {
            y: -5,
            ease: "easeOut",
            duration: 0.5,
            type: "spring",
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        },
        hover: {
            y: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                ease: "easeIn",
            },
        },
    };

    return (
        <>
            <nav
                ref={navRef}
                className={`w-full  absolute z-30 px-4 sm:px-12 xl:px-12 lg:py-2 xl:py-4  ${props.colspan}`}
            >
                {/* BG */}
                <div className=" z-30 grid containerXL 2xl:mx-auto 2xl:px-8 relative grid-cols-12 m-auto items-center  py-3 sm:py-4 lg:px-0 lg:py-0">
                    {/* Background Image */}
                    <div className="logo col-span-4 md:col-span-1 ">
                        <Link href="/">
                            <a className="flex">
                                <img
                                    src={isScrolled ? props.logoDark : props.logoLight}
                                    className="max-h-[1.75rem] sm:max-h-[3.75rem] lg:max-h-[3.05rem] fill-current-[#fff]"
                                    alt="Logo"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="col-span-6 md:col-span-9 ">
                        <ul className="hidden font-barlow lg:flex items-center list-style-none justify-end pr-8">
                            {props.menuItems.map((e, i) => {
                                return (
                                    <motion.li
                                        initial="rest"
                                        whileHover="hover"
                                        animate="rest"
                                        key={`menuKey${i}`}
                                        className={`relative mx-8 py-4 font-montserrat tracking-widest font-semibold 
                                       
                                         ${isScrolled ? "text-white" : "text-white"}  hover:text-primaryColor-500`}
                                        onMouseEnter={(e) => {
                                            onEnter(e);
                                        }}
                                    >
                                        <Link href={`/${e.slug}`}>
                                            <a className="flex items-end uppercase text-base lg:text-xs xl:text-lg">
                                                {props.lang == "en" ? e.titleEN : e.title}
                                                {e.subMenu ? (
                                                    <motion.span variants={pfeilMotion}>
                                                        <BiChevronDown></BiChevronDown>
                                                    </motion.span>
                                                ) : null}
                                            </a>
                                        </Link>
                                        {e.subMenu ? (
                                            <motion.ul
                                                variants={boxMotion}
                                                className={`absolute z-50 mt-4 bg-[#000] text-white pl-16 pr-24 py-4 left-[-4rem] rounded-br-lg rounded-bl-lg ${props.subMenuKlasse}`}
                                            >
                                                {e.subMenuItems.map((e, i) => {
                                                    return (
                                                        <motion.li
                                                            variants={textMotion}
                                                            key={`submenuKey${i}`}
                                                            className="min-w-max mb-3"
                                                        >
                                                            <Link href={`${e.external ? "" : "/"}${e.slug}`}>
                                                                <a className="hover:text-red-500 font-semibold">
                                                                    {props.lang == "en" ? e.titleEN : e.title}
                                                                </a>
                                                            </Link>
                                                            <hr className="mt-1" />
                                                        </motion.li>
                                                    );
                                                })}
                                            </motion.ul>
                                        ) : null}
                                    </motion.li>
                                );
                            })}
                        </ul>
                        {/* <ul className="block md:flex lg:hidden lg:flex items-center list-style-none justify-end pr-12">
                            <Newsletter onClick={props.onClick}></Newsletter>
                        </ul> */}
                    </div>
                    <div className="col-span-2 social media flex justify-end text-xl md:text-4xl">
                        <div
                            className={`block lg:hidden cursor-pointer ${
                                isScrolled ? "text-darkText" : "text-primaryColor-100"
                            }`}
                        >
                            <a className="text-white tracking-widest" href={"https://xms.sabocon.com"}>
                                DEMO
                            </a>
                        </div>

                        <div className="hidden lg:flex ">
                            <MainButton link={"https://xms.sabocon.com"}>DEMO</MainButton>
                            <div
                                className="text-white ml-4 pt-2 cursor-pointer hover:scale-110"
                                onClick={props.language}
                            >
                                {props.english}
                            </div>

                            {/* {props.socialMedia.map((e, i) => {
                                return (
                                    <a
                                        className={`mr-4 text-lg ${
                                            !isScrolled ? "text-primaryColor-200" : "text-darkText"
                                        }`}
                                        key={`smKey${i}`}
                                        href={e.link}
                                        alt={e.title}
                                    >
                                        {e.icon}
                                    </a>
                                );
                            })} */}
                        </div>
                    </div>
                    {/* <div className="relative top-[1000%] w-full h-24 bg-red-500" ref={ref}></div> */}
                </div>
                <style jsx>{`
                    .hover-underline-animation {
                        display: inline-block;
                        position: relative;
                        color: #000;
                    }

                    .hover-underline-animation::after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        transform: scaleX(0);
                        height: 1px;
                        bottom: 0;
                        left: 0;
                        background-color: #000;
                        transform-origin: bottom right;
                        transition: transform 0.25s ease-out;
                    }

                    .hover-underline-animation:hover::after {
                        transform: scaleX(1);
                        transform-origin: bottom left;
                    }
                `}</style>
                <motion.div ref={ref} className="absolute hidden w-full h-full top-0 left-0 "></motion.div>
            </nav>
        </>
    );
};

export default Menu1;
