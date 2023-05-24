import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import { Menu1 } from "../components/menues";
import { PercentageCircle } from "../components/infoGraphics";
import { Parallax } from "react-scroll-parallax";

//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoLight.svg";
import TreeBox from "../assets/treeBox.svg";
import Birb from "../assets/bird.svg";

export default function Home() {
    return (
        <MainContainer width="">
            <Head>
                <title>Site title</title>
            </Head>
            <Menu1
                logoLight={LogoLight.src}
                logoDark={LogoDark.src}
                menuItems={menuItems}
                socialMedia={socialMedia}
                burgerIcon={<RxHamburgerMenu />}
                onBurgerClick={(e) => {}}
                onClick={() => {
                    setIsOpen(true);
                }}
            ></Menu1>
            <Hero fullHeight={true} colspan="col-span-12">
                BUBU
            </Hero>
            <div className="w-full col-span-12 gradient ">
                <div className="container mx-auto grid grid-cols-12 relative">
                    {/* //FIRST */}
                    <div className="first col-span-12 text-center mt-16 mb-16">
                        <h2 className="font-work text-5xl font-bold text-accentColor leading-tight ">
                            <span className="text-white">Change the World, One Tree at a Time</span>
                            <br /> Donate Easily and Securely{" "}
                        </h2>
                    </div>
                    {/* //SECOND */}
                    <div className="second mt-16 col-span-12 grid grid-cols-12 gradientBox rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[15rem]">
                        <div className="col-span-6 relative">
                            <div className="mt-[2rem] mb-12 absolute right-[-4rem]">
                                <img src={Birb.src} alt="" />
                            </div>
                            <div className="flex justify-center mt-[-4rem] mb-12">
                                <img src={TreeBox.src} alt="" />
                            </div>
                        </div>
                        <div className="col-span-6 p-16 flex flex-col justify-end pb-24">
                            <h2 className="font-work text-3xl font-bold text-white leading-tight ">
                                <span className="text-white">Why You Should Plant a Tree Today: </span>
                                <br /> A Simple Way to Make a Difference{" "}
                            </h2>
                            <div className="w-2/3">
                                <p className="mt-8 font-work text-lg">
                                    Planting a tree is a simple yet impactful way to make a difference in your local
                                    environment. Trees provide numerous benefits, such as shade, cleaner air, and
                                    natural beauty. Whether you plant a tree in your own backyard or donate to
                                    organizations that plant trees in urban areas or reforestation efforts, you can help
                                    make the world a greener place.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex col-span-12 justify-evenly mt-12">
                        <PercentageCircle color={"#CFEE74"} percentage={75} />
                        <PercentageCircle color={"#4AA069"} percentage={50} />
                        <PercentageCircle color={"#74A26E"} percentage={25} />
                    </div>
                    <h1 className="font-sans mt-96">Hallo ich bin ein Text""</h1>
                </div>
            </div>
        </MainContainer>
    );
}
