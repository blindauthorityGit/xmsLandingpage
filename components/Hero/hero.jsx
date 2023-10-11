import React, { useEffect } from "react";
import HeroImg from "../../assets/heroImg2.png";

import { MainButton } from "../buttons";
import { Parallax } from "react-scroll-parallax";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 600,
        });
    }, []);

    return (
        <div
            className={`hero-container relative items-center container mx-auto w-full grid grid-cols-12 ${
                props.fullHeight ? "h-screen" : props.height
            } ${props.colspan}`}
        >
            {/* Background Image */}
            <div className="text z-10 pt-0 lg:pt-0 font-work px-8 lg:px-0 col-span-12 lg:col-span-4 lg:pl-24">
                <h1 className="text-4xl xl:text-8xl font-black text-accentColor-50 uppercase">
                    <div data-aos="zoom-in-left" data-aos-delay="300" className="text-accentColor-400">
                        Spenden,
                    </div>

                    <div data-aos="zoom-in-right" data-aos-delay="500">
                        {" "}
                        Dekorieren,
                    </div>
                    <div data-aos="zoom-in-right" data-aos-delay="500" className="text-accentColor-400">
                        {" "}
                        Hoffnung schenken
                    </div>
                </h1>
                <div className="w-full mt-8 lg:mt-16" data-aos="zoom-in-up" data-aos-delay="700">
                    <h3 className="font-work text-whiteText text-lg lg:text-2xl font-semibold">
                        Lassen Sie Ihre Spende auf unserem virtuellen Spendenbaum erstrahlen
                    </h3>
                    {/* <MainButton accent link={"/#contact"}>
                        Contact us
                    </MainButton> */}
                </div>
            </div>

            <Parallax
                translateY={["-200px", "200px"]}
                className="w-full h-[65vh] mt-[-6rem] lg:mt-0 lg:h-full  bg-contain bg-no-repeat bg-center order-first lg:order-last  col-span-12 lg:col-span-8"
                style={{ backgroundImage: `url(${HeroImg.src})` }}
            ></Parallax>
        </div>
    );
};

export default Hero;
