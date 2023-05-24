import React from "react";
import HeroImg from "../../assets/hero.jpg";

import { MainButton } from "../buttons";
import { Parallax } from "react-scroll-parallax";

const Hero = (props) => {
    return (
        <div
            className={`hero-container relative flex justify-center items-center w-full ${
                props.fullHeight ? "h-screen" : props.height
            } ${props.colspan}`}
        >
            {/* Background Image */}
            <div className="text z-10 font-work">
                <h1 className="text-9xl font-black text-accentColor-50">
                    <span className="text-accentColor-500">GREEN</span>
                    <br />
                    YOUR WORLD
                </h1>
                <div className="w-full text-center mt-16">
                    <MainButton accent>Contact us</MainButton>
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
