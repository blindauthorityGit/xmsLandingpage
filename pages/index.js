import { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import { Menu1 } from "../components/menues";
import { PercentageCircle } from "../components/infoGraphics";
import { QuestionClicker } from "../components/text";
import { Form1 } from "../components/forms";
import { Parallax } from "react-scroll-parallax";

//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoLight.svg";
import TreeBox from "../assets/treeBox.svg";
import Birb from "../assets/bird.svg";
import Mockup from "../assets/mockup.png";
import Frontend from "../assets/frontend.jpg";
import Dashboard from "../assets/dashboard.jpg";
import Payment from "../assets/payment.jpg";

import Screenshot from "../assets/screenshot.jpg";
import ContactTrees from "../assets/contactTrees.svg";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
    const [trees, setTrees] = useState(345);

    useEffect(() => {
        AOS.init({
            duration: 400,
        });
    }, []);

    useEffect(() => {
        setInterval(() => {
            console.log("RANDOM");
            setTrees((prev) => {
                console.log(prev, prev + 1);
                return prev + 1;
            });
        }, Math.floor(Math.random() * (85000 - 55000 + 1)) + 55000);
    }, []);

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
            <div className="w-full col-span-12 gradient" id="why">
                <div className="container mx-auto grid grid-cols-12 relative">
                    {/* //FIRST */}
                    <div className="first col-span-12 text-center mt-16 mb-16">
                        <h2 className="font-work text-3xl px-8 md:px-0 md:text-5xl font-bold text-accentColor leading-tight ">
                            <span className="text-white">Change the World, One Tree at a Time</span>
                            <br /> Donate Easily and Securely{" "}
                        </h2>
                    </div>
                    {/* //SECOND */}
                    <div className="second mt-16 col-span-12 grid grid-cols-12 gradientBox rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[8rem] md:rounded-br-[15rem]">
                        <div className="col-span-12 md:col-span-6 relative">
                            <div
                                data-aos="zoom-in-down"
                                data-aos-delay="300"
                                className="mt-[2rem] w-[7rem] md:w-auto mb-12 absolute right-[1rem] top-[-6rem] md:right-[-4rem]"
                            >
                                <img src={Birb.src} alt="" />
                            </div>
                            <div data-aos="zoom-in-up" className="flex justify-center mt-[-4rem] mb-12">
                                <img src={TreeBox.src} alt="" />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 px-8 md:p-16 flex flex-col justify-end pb-24">
                            <h2 className="font-work text-3xl font-bold text-white leading-tight ">
                                <span className="text-white">Why You Should Plant a Tree Today: </span>
                                <br /> A Simple Way to Make a Difference{" "}
                            </h2>
                            <div className="w-full md:w-2/3">
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
                    <div className="flex flex-wrap col-span-12 justify-evenly mt-12">
                        <PercentageCircle
                            text={"of of stormwater absorbed:"}
                            textSub={
                                "Tree roots and foliage assist in water absorption, reducing the risk of flooding and easing the burden on drainage systems."
                            }
                            color={"#CFEE74"}
                            percentage={90}
                        />
                        <PercentageCircle
                            text={"Urban Noise Can be Reduced by Trees"}
                            textSub={
                                "Trees act as natural sound barriers, helping to minimize noise pollution in urban environments."
                            }
                            color={"#CFEE74"}
                            percentage={80}
                        />
                        <PercentageCircle
                            text={"less energy cost"}
                            textSub={
                                "Having trees in residential areas has been shown to enhance property values, making neighborhoods more desirable places to live"
                            }
                            color={"#74A26E"}
                            percentage={30}
                        />
                    </div>
                    {/* //THIRD */}
                    <div className="second col-span-12 grid grid-cols-12 mt-12 md:mt-36" id="solution">
                        <div className="col-span-12 md:col-span-4 px-8 md:px-0 relative">
                            <h2 className="font-work text-6xl mb-8 font-bold text-accentColor leading-tight ">
                                Our Solution
                            </h2>
                            <p className="mt-8 font-work text-3xl text-white">
                                Make planting trees as easy and fun as possible
                            </p>
                            <p className="mt-8 font-work text-lg text-white">
                                Experience the joy of making a difference with our easy and fun tree donation system.
                                Our platform allows you to select a specific location where a tree will be planted,
                                giving you a personal connection to your contribution.
                            </p>
                            <p className="mt-8 font-work text-lg text-white">
                                Through our website, you can effortlessly collect donations from individuals who share
                                your passion for environmental conservation. It's a seamless process that brings
                                together people from all walks of life, pooling their resources to create a greener and
                                more sustainable world.
                            </p>
                            <p className="mt-8 font-work text-lg text-white">
                                Join us today and embark on a fulfilling journey of tree planting, making a lasting
                                impact on the planet one tree at a time.
                            </p>
                        </div>
                        <div className="col-span-12 hidden md:block md:col-span-8 px-8 md:px-0  md:mt-[-10rem] flex flex-col justify-end ">
                            <img src={Mockup.src} alt="" />
                        </div>
                        {/* <div className="col-span-12 flex justify-evenly hidden">
                            <div className="w-36">
                                <img src={Location.src} alt="" />
                            </div>
                            <div className="w-36">
                                <img src={Safe.src} alt="" />
                            </div>
                            <div className="w-36">
                                <img src={Tracking.src} alt="" />
                            </div>
                            <div className="w-36">
                                <img src={Community.src} alt="" />
                            </div>
                            <div className="w-36">
                                <img src={Donation.src} alt="" />
                            </div>
                        </div> */}
                    </div>
                    {/* //FOURTH */}
                    <QuestionClicker
                        data={{
                            questions: [
                                "Environmental Organizations",
                                "Nature Enthusiasts",
                                "Schools and Educational Institutions",
                                "Corporate Social Responsibility (CSR) Programs",
                                "Community and Neighborhood Groups",
                            ],
                            answers: [
                                "Environmental organizations play a crucial role in advocating for nature conservation and reforestation efforts. By partnering with these organizations, your tree donation project can tap into their extensive networks of environmentally-conscious supporters.  Collaborating with them allows you to leverage their expertise and credibility to amplify your message. They can actively promote your platform through their communication channels, events, and campaigns, reaching a wider audience of like-minded individuals who are already engaged in environmental causes.",
                                "Nature enthusiasts are individuals who deeply value the beauty and importance of the natural world. They often seek out opportunities to actively contribute to environmental causes. Your project can capture their attention and inspire them to make a difference. Highlight the personal connection they can establish by selecting the placement of their tree donations. Emphasize the positive impact that their contributions will have on preserving and restoring ecosystems. Engaging with nature-focused communities, such as outdoor enthusiasts, hikers, and nature photographers, can further enhance the reach and impact of your platform.",
                                "Schools and educational institutions provide an ideal platform to promote environmental awareness and engage students in meaningful activities. Collaborating with them allows you to integrate your tree donation project into their curriculum or extracurricular programs. By demonstrating the educational value of tree planting and the importance of environmental stewardship, you can inspire and empower the next generation to become environmental advocates. Create tailored resources for educators, such as lesson plans or workshops, to facilitate their involvement in the project. Additionally, consider organizing tree planting events or competitions specifically targeting students, fostering a sense of responsibility and connection to the environment.",
                                "Many businesses and corporations recognize the importance of incorporating sustainability into their operations. CSR programs offer opportunities for companies to align their values with impactful initiatives. Position your tree donation project as a CSR solution, emphasizing the positive environmental outcomes and employee engagement opportunities. Present case studies showcasing the social and environmental benefits of corporate tree planting campaigns. Collaborate with businesses to design customized programs that align with their sustainability goals, creating a win-win scenario where they contribute to tree planting efforts while enhancing their brand reputation.",
                                "Community and neighborhood groups often have a strong sense of pride and attachment to their local environment. Collaborate with these groups to engage residents in improving their surroundings through tree planting initiatives. Facilitate communication channels where community members can collectively decide on tree placement within their neighborhoods. Organize volunteer events and workshops to educate residents about the benefits of tree planting and provide them with the necessary knowledge and resources. Building a sense of ownership and involvement among community members will foster a stronger connection to the project and encourage long-term participation.",
                            ],
                        }}
                    ></QuestionClicker>
                    {/* //fifth */}
                </div>{" "}
                <div className="w-full bg-darkColor-500 col-span-12 py-16 md:py-24 mt-16 md:mt-36 " id="features">
                    <div className="second col-span-12 grid grid-cols-12 container mx-auto">
                        <div className="col-span-12 px-8 md:px-0 md:col-span-6 relative md:pr-24">
                            <h2 className="font-work text-6xl mb-8 font-bold text-accentColor leading-tight ">
                                Features
                            </h2>
                            <h3 className="opacity-100 font-bold mt-8 font-work text-3xl text-white">
                                A Streamlined Frontend
                            </h3>
                            <p className="mt-8 font-work text-lg text-white">
                                Experience the ease and simplicity of our frontend interface, designed to make tree
                                selection and donation a breeze. Our user-friendly map allows you to navigate and
                                explore potential tree planting locations effortlessly.{" "}
                            </p>
                            <p className="mt-8 font-work text-lg text-white">
                                Track the progress of our tree planting initiatives, view real-time updates on the
                                number of trees planted, the total amount donated, and explore detailed information
                                about each planted tree.
                            </p>
                            <p className="mt-8 font-work text-lg text-white">
                                Discover the inspiring list of generous donors who have contributed to our mission,
                                fostering a sense of community and shared environmental stewardship.
                            </p>
                        </div>
                        <div className="col-span-12 px-8 md:px-0 md:col-span-6 flex mt-8 md:mt-0 flex-col justify-end ">
                            <img src={Frontend.src} alt="" />
                        </div>
                        <div className="h-16 md:h-32 col-span-12"></div>

                        <div className="col-span-12 grid grid-cols-12">
                            <div className="col-span-12 px-8 md:px-0 md:col-span-6 md:order-last relative md:pl-24">
                                <h3 className="opacity-100 font-bold mt-8 font-work text-3xl text-white">
                                    Fully Customizable Dashboard
                                </h3>
                                <p className="mt-8 font-work text-lg text-white">
                                    Take full control of your tree donation project with our powerful and intuitive
                                    dashboard. Customize every aspect of your initiative with ease, from setting precise
                                    tree placement using coordinates to defining the required donation amount for each
                                    tree.
                                </p>
                                <p className="mt-8 font-work text-lg text-white">
                                    Tailor your campaign with engaging incentives or prizes for donors, and effortlessly
                                    manage invoices and payment systems.
                                </p>
                                <p className="mt-8 font-work text-lg text-white">
                                    The dashboard allows you to fine-tune the appearance of the map, ensuring a visually
                                    captivating experience for your donors.
                                </p>
                                <p className="mt-8 font-work text-lg text-white">
                                    Enjoy the flexibility to adapt and refine your project's settings to align with your
                                    unique vision and goals.
                                </p>
                            </div>
                            <div className="col-span-12 px-8 md:px-0 md:col-span-6 flex mt-8 md:mt-0 flex-col justify-end ">
                                <img src={Dashboard.src} alt="" />
                            </div>
                        </div>
                        <div className="h-16 md:h-32 col-span-12"></div>
                        <div className="col-span-12 grid grid-cols-12">
                            <div className="col-span-12 px-8 md:px-0 md:col-span-6 relative md:pr-24">
                                <h3 className="opacity-100 font-bold mt-8 font-work text-3xl text-white">
                                    Diverse Payment Options
                                </h3>
                                <p className="mt-8 font-work text-lg text-white">
                                    We offer a range of secure and flexible payment options to suit your preferences.
                                    Seamlessly integrate your preferred payment gateway to collect donations directly
                                    into your designated account.
                                </p>
                                <p className="mt-8 font-work text-lg text-white">
                                    Whether you opt for traditional methods or cutting-edge digital payment systems, our
                                    platform supports the most popular and trusted options available. Empower your
                                    donors with the convenience of choice, facilitating their contributions and making
                                    the donation process hassle-free.
                                </p>
                                <p className="mt-8 font-work text-lg text-white">
                                    Rest assured that your donations are processed securely, enabling you to focus on
                                    the positive impact your project is making.
                                </p>
                            </div>
                            <div className="col-span-12 px-8 md:px-0 md:col-span-6 flex mt-8 md:mt-0 flex-col justify-end ">
                                <img src={Payment.src} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* //THIRD */}
                <div className="second col-span-12 grid grid-cols-12 container mx-auto mt-36">
                    <div className="col-span-12 relative">
                        <h2 className="font-work text-center text-4xl md:text-6xl mb-8 font-bold text-accentColor leading-tight ">
                            We've Already planted <span className="text-8xl text-white">{trees}</span> Trees
                        </h2>
                    </div>

                    <div className="col-span-12 flex justify-evenly"></div>
                </div>
                {/* //SECOND */}
                <div
                    id="contact"
                    className="second mb-16 mt-16 container mx-auto col-span-12 grid grid-cols-12 gradientBox rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl"
                >
                    <div className="col-span-12 md:col-span-6 relative">
                        {/* <div className="mt-[2rem] mb-12 absolute right-[-4rem]">
                            <img src={Birb.src} alt="" />
                        </div> */}
                        <div data-aos="zoom-in-up" className="flex justify-center mt-[-4rem] mb-0 md:mb-12">
                            <img src={ContactTrees.src} alt="" />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 p-8 md:p-16 flex flex-col justify-end pb-24">
                        <h2 className="font-work text-3xl font-bold text-white leading-tight ">Contact us!</h2>
                        <div className="w-full md:w-2/3">
                            <p className="mt-8 font-work text-lg mb-16">
                                Interested in out software? <br></br> Contact us, we will reply swiftly!
                            </p>
                            <Form1></Form1>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 flex justify-center mb-36">
                    <a
                        className="text-white underline hover:text-primaryColor-800"
                        href="https://tree-donator.vercel.app"
                    >
                        Check out our DEMO
                    </a>
                </div>
            </div>
        </MainContainer>
    );
}
