import React, { useEffect } from "react";
import HeroImg from "../../assets/hero.jpg";

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
            className={`hero-container relative flex justify-center items-center w-full ${
                props.fullHeight ? "h-screen" : props.height
            } ${props.colspan}`}
        >
            {/* Background Image */}
            <div className="text z-10 font-work px-8 lg:px-0">
                <h1 className="text-7xl md:text-9xl font-black text-accentColor-50">
                    <div data-aos="zoom-in-left" data-aos-delay="300" className="text-accentColor-500">
                        GREEN
                    </div>

                    <div data-aos="zoom-in-right" data-aos-delay="500">
                        {" "}
                        YOUR WORLD
                    </div>
                </h1>
                <div className="w-full text-center mt-16" data-aos="zoom-in-up" data-aos-delay="700">
                    <MainButton accent link={"/#contact"}>
                        Contact us
                    </MainButton>
                </div>
            </div>

            <Parallax
                translateY={["-400px", "400px"]}
                className="w-full absolute h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroImg.src})` }}
            ></Parallax>
        </div>
    );
};

export default Hero;
