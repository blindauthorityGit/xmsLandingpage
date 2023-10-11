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

import SwiperComp from "../components/swiper";
import { MainButton } from "../components/buttons";

//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoLight.svg";
import TreeBox from "../assets/treeBox.svg";
import Presents from "../assets/presents.png";
import Birb from "../assets/bird.svg";
import Mockup from "../assets/mockup.png";
import Frontend from "../assets/frontend.jpg";
import Dashboard from "../assets/dashboard.jpg";
import Tree from "../assets/tree.png";
import Payment from "../assets/payment.jpg";
import Favicon from "../assets/favicon.svg";
import HeroImg from "../assets/hero.jpg";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";

import Screenshot from "../assets/screenshot.jpg";
import ContactTrees from "../assets/contact.png";

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
                <title>Tree Donator - green your world</title>
                <meta
                    name="description"
                    content="Experience the joy of making a difference with our easy and fun tree donation system.
                                Our platform allows you to select a specific location where a tree will be planted,
                                giving you a personal connection to your contribution."
                />
                {/* <meta name="keywords" content={dataBaeckerei.seo.mainSEO.keywords.map((e) => e)} /> */}
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={Favicon.src} />
                <meta property="og:title" content="Tree Donator - green your world" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://treedonator.sabocon.com" />
                <meta property="og:image" content={HeroImg.src} />
                <meta
                    property="og:description"
                    content="Experience the joy of making a difference with our easy and fun tree donation system.
                    Our platform allows you to select a specific location where a tree will be planted,
                    giving you a personal connection to your contribution."
                />
                <meta property="og:site_name" content="Tree Donator - green your world" />
                <meta property="og:locale" content="en_EN" />
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
            <Hero fullHeight={true} colspan="col-span-12"></Hero>
            <div className="w-full col-span-12 " id="why">
                <div className="container mx-auto grid grid-cols-12 relative">
                    {/* //FIRST */}
                    <div className="first col-span-12 lg:col-span-6 px-8 mt-16 mb-16 lg:pr-24">
                        <h2 className="font-work text-3xl md:px-0 md:text-5xl font-bold text-accentColor leading-tight ">
                            <span className="text-primaryColor">Deine Charity, dein Baum, deine Wirkung</span>
                        </h2>
                        <p className="font-work text-lg text-whiteText mt-16 mb-8">
                            Willkommen auf unserer Spendenplattform zur Weihnachtszeit, wo der Geist der Großzügigkeit
                            auf die Magie der Saison trifft. Mit unserer einzigartigen Web-App haben Sie die
                            Möglichkeit, einen Unterschied zu bewirken, der ebenso persönlich wie bedeutsam ist. Sie
                            wählen die Wohltätigkeitsorganisation aus, die Ihr Herz berührt, und wir gestalten einen
                            wunderschönen virtuellen Weihnachtsbaum nur für Sie.
                        </p>
                        <p className="font-work text-lg text-whiteText mt-16 mb-8">
                            Dann laden Sie Besucher ein, Ihren Baum mit digitalen Ornamenten zu schmücken, die ihre
                            Spenden repräsentieren. Es ist eine herzerwärmende Möglichkeit, Ihre Gemeinschaft
                            zusammenzubringen, die Saison zu feiern und echte Wirkung für die Anliegen zu erzielen, die
                            Ihnen am Herzen liegen.
                        </p>
                        <p className="font-work text-lg text-whiteText">
                            Schließen Sie sich uns an und verbreiten Sie Freude, Ornament für Ornament.
                        </p>
                    </div>
                    <div
                        className="first col-span-12 px-8  lg:col-span-6 text-center lg:t-16 mb-16"
                        data-aos="zoom-in-right"
                        data-aos-delay="300"
                    >
                        <img src={Presents.src} alt="" />
                    </div>
                    <div className="col-span-12 grid grid-cols-12 gap-8">
                        <div className="col-span-12 lg:col-span-4">
                            <div className="rounded-2xl font-work ">
                                <div className="top py-8 px-16 bg-primaryColor-400 rounded-t-2xl text-2xl text-white font-bold">
                                    Individuelle Spenden
                                </div>
                                <div className="top py-8 px-16 bg-whiteText rounded-b-2xl">
                                    <strong>Maßgeschneidertes Wohltätigkeitserlebnis</strong>
                                    <ul className="list-disc mt-8">
                                        <li className="mb-4">Wählen Sie die Charity, die Ihnen am wichtigsten ist</li>
                                        <li className="mb-4">
                                            Wir erstellen einen einzigartigen virtuellen Weihnachtsbaum speziell für
                                            Ihre Sache
                                        </li>
                                        <li className="mb-4">
                                            Passen Sie den Baum mit den Farben und dem Branding Ihrer
                                            Wohltätigkeitsorganisation an
                                        </li>
                                        <li className="mb-4">
                                            Gestalten Sie Ihre Spendenreise persönlich und herzlich
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            {" "}
                            <div className="rounded-2xl font-work ">
                                <div className="top py-8 px-16 bg-primaryColor-400 rounded-t-2xl text-2xl text-white font-bold">
                                    Interaktives Spenden
                                </div>
                                <div className="top py-8 px-16 bg-whiteText rounded-b-2xl">
                                    <strong>Beziehen Sie Ihre Gemeinschaft mit ein</strong>
                                    <ul className="list-disc mt-8">
                                        <li className="mb-4">
                                            Laden Sie Freunde, Familie und Kollegen ein, Ihren Baum zu schmücken
                                        </li>
                                        <li className="mb-4">
                                            Jedes Ornament repräsentiert eine Spende für Ihre ausgewählte
                                            Wohltätigkeitsorganisation
                                        </li>
                                        <li className="mb-4">
                                            Sehen Sie zu, wie der Baum zum Leben erwacht, wenn weitere Ornamente
                                            hinzugefügt werden
                                        </li>
                                        <li className="mb-4">
                                            Verwandeln Sie das Geben in ein gemeinsames, interaktives Erlebnis
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            {" "}
                            <div className="rounded-2xl font-work ">
                                <div className="top py-8 px-16 bg-primaryColor-400 rounded-t-2xl text-2xl text-white font-bold">
                                    Echte Wirkung
                                </div>
                                <div className="top py-8 px-16 bg-whiteText rounded-b-2xl">
                                    <strong>Verwandeln Sie Spenden in Ergebnisse</strong>
                                    <ul className="list-disc mt-8">
                                        <li className="mb-4">
                                            Jedes Ornament symbolisiert echte finanzielle Unterstützung für Ihre Sache
                                        </li>
                                        <li className="mb-4">
                                            Verfolgen Sie Spenden in Echtzeit und sehen Sie, wie der kollektive Einfluss
                                            wächst.
                                        </li>
                                        <li className="mb-4">
                                            Verstärken Sie die Mission Ihrer Wohltätigkeitsorganisation mit der Kraft
                                            des gemeinsamen Gebens
                                        </li>
                                        <li className="mb-4">
                                            Schaffen Sie einen greifbaren Unterschied und bringen Sie Ihre Sache zum
                                            Leben
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* //SECOND */}

                    <div className="first col-span-12 px-8 lg:col-span-6 text-center mt-16 lg:mb-16" id="solution">
                        <img src={Tree.src} alt="" />
                    </div>
                    <div className="first px-8 lg:px-0 col-span-12 lg:col-span-6  mt-24 mb-16 font-work">
                        <div className="first lg:ml-[-10rem]" data-aos="zoom-in-down">
                            <div className="holder flex items-center">
                                <span className="text-primaryColor text-8xl font-bold mr-8">1.</span>
                                <div className="text text-whiteText text-4xl tracking-wider font-semibold">
                                    Wählen Sie eine Charity
                                </div>
                            </div>
                            <div className="descr lg:pl-36">
                                <p className="font-work text-lg text-whiteText mt-8 mb-8">
                                    Wählen Sie die Wohltätigkeitsorganisation, die einen besonderen Platz in Ihrem
                                    Herzen hat. Ob es sich um eine lokale Organisation oder eine globale Angelegenheit
                                    handelt, Ihre Wahl ist der erste Schritt, um einen Unterschied zu machen.
                                </p>
                            </div>
                        </div>
                        <div className="first lg:ml-[-6rem]" data-aos="zoom-in-down">
                            <div className="holder flex items-center">
                                <span className="text-primaryColor text-8xl font-bold mr-8">2.</span>
                                <div className="text text-whiteText text-4xl tracking-wider font-semibold">
                                    Gestalten Sie Ihren eigenen Baum
                                </div>
                            </div>
                            <div className="descr lg:pl-36">
                                <p className="font-work text-lg text-whiteText mt-8 mb-8">
                                    Mit unserer fachkundigen Unterstützung gestalten Sie einen virtuellen
                                    Weihnachtsbaum, der einzigartig Ihrer Sache gehört. Personalisieren Sie ihn mit den
                                    Farben und dem Branding Ihrer Wohltätigkeitsorganisation. Legen Sie Spendenziele
                                    fest, wählen Sie die Dauer der Kampagne aus, und lassen Sie uns die Bereitstellung
                                    auf unseren sicheren Servern übernehmen.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="first lg:ml-[-2rem]" data-aos="zoom-in-down">
                            <div className="holder flex items-center">
                                <span className="text-primaryColor text-8xl font-bold mr-8">3.</span>
                                <div className="text text-whiteText text-4xl tracking-wider font-semibold">
                                    Sammeln Sie Spenden mit Freude
                                </div>
                            </div>
                            <div className="descr lg:pl-36">
                                <p className="font-work text-lg text-whiteText mt-8 mb-8">
                                    Werben Sie für Ihren Baum und Ihre Kampagne bei Freunden, Familie und Unterstützern.
                                    Sehen Sie zu, wie die Magie geschieht, wenn Spenden eingehen und Ihr Baum sich mit
                                    Ornamenten füllt. Es ist eine fesselnde und herzerwärmende Art, den Echtzeiteffekt
                                    wachsen zu sehen.{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="second lg:mt-16 col-span-12 text-center">
                        <h2 className="font-work text-3xl px-8 md:px-0 md:text-5xl font-bold text-accentColor lg:leading-loose">
                            Unsere Plattform vereinfacht den Prozess, damit Sie sich auf das konzentrieren können, was
                            am wichtigsten ist: eine positive Veränderung für Ihre ausgewählte Sache zu bewirken.
                        </h2>
                    </div>
                    {/* <div className="flex flex-wrap col-span-12 justify-evenly mt-12">
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
                    </div> */}
                    {/* //THIRD */}
                    {/* <div className="second col-span-12 grid grid-cols-12 mt-12 md:mt-36" id="solution">
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
           
                    </div> */}
                    {/* //FOURTH */}
                    <QuestionClicker
                        data={{
                            questions: [
                                "Gemeinnützige Organisationen",
                                "Individuelle Fundraiser",
                                "Unternehmen und Konzerne",
                                "Schulen und Bildungseinrichtungen",
                                "Gemeinschafts- und Sozialgruppen",
                            ],
                            answers: [
                                "Gemeinnützige Organisationen können unsere Plattform nutzen, um ansprechende Fundraising-Kampagnen zu erstellen.Sie können sich problemlos mit ihren Unterstützern vernetzen, ihre Anliegen präsentieren und Spenden sammeln, während sie Weihnachtsfreude verbreiten.",
                                "Einzelpersonen, die Gelder für persönliche Anliegen wie medizinische Ausgaben oder Gemeinschaftsprojekte sammeln möchten, können unsere Plattform nutzen, um ein individuelles Spenderlebnis zu schaffen. Damit haben sie die Möglichkeit, Unterstützung aus ihrem Netzwerk effektiv zu mobilisieren.",
                                "Unternehmen können unsere Plattform für Initiativen zur sozialen Verantwortung von Unternehmen (Corporate Social Responsibility, CSR) nutzen. Sie können ihre Marke mit wohltätigen Zwecken in Einklang bringen, Mitarbeiter zur Unterstützung sozialer Projekte motivieren und ihr Engagement für soziale Wirkung während der Feiertagssaison unterstreichen.",
                                "Bildungseinrichtungen können unsere Plattform für Fundraising-Kampagnen verwenden. Sie bietet eine kreative Möglichkeit für Schulen, Gelder für außerschulische Aktivitäten, Bildungsprojekte oder Stipendien zu sammeln und dabei Schüler und Eltern in den Prozess einzubeziehen.",
                                "Soziale Vereine, Nachbarschaftsverbände und Gemeinschaftsgruppen können von unserer Plattform profitieren, um ein Gefühl der Zusammengehörigkeit zu fördern und lokale Anliegen zu unterstützen. Sie bietet eine interaktive und kollaborative Möglichkeit, zum Wohl der Gemeinschaft beizutragen",
                            ],
                        }}
                    ></QuestionClicker>
                    {/* //fifth */}
                </div>{" "}
                <div className="w-full bg-darkColor-500 col-span-12 py-16 md:py-24 mt-16 md:mt-36 " id="features">
                    <div className="second col-span-12 grid grid-cols-12 container mx-auto">
                        <h2 className="font-work text-6xl mb-8 font-bold text-accentColor leading-tight ">Beispiele</h2>
                        <SwiperComp data={[Img1, Img2, Img3, Img1, Img2, Img3]}></SwiperComp>
                        {/* <div className="col-span-12 px-8 md:px-0 md:col-span-6 relative md:pr-24">
                            <h2 className="font-work text-6xl mb-8 font-bold text-accentColor leading-tight ">
                                Beispiele
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
                        </div> */}
                        {/* <div className="col-span-12 px-8 md:px-0 md:col-span-6 flex mt-8 md:mt-0 flex-col justify-end ">
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
                        </div> */}
                    </div>
                </div>
                <div className="second mt-16 col-span-12 text-center container mx-auto">
                    <h2 className="font-work mb-12 text-3xl px-8 md:px-0 md:text-5xl font-bold text-accentColor leading-loose">
                        Unsere Plattform vereinfacht den Prozess, damit Sie sich auf das konzentrieren können, was am
                        wichtigsten ist: eine positive Veränderung für Ihre ausgewählte Sache zu bewirken.
                    </h2>
                    <MainButton klasse="mt-8" link={"#"}>
                        DEMO
                    </MainButton>
                </div>
                {/* //THIRD */}
                {/* <div className="second col-span-12 grid grid-cols-12 container mx-auto mt-36">
                    <div className="col-span-12 relative">
                        <h2 className="font-work text-center text-4xl md:text-6xl mb-8 font-bold text-accentColor leading-tight ">
                            We've Already planted <span className="text-8xl text-white">{trees}</span> Trees
                        </h2>
                    </div>

                    <div className="col-span-12 flex justify-evenly"></div>
                </div> */}
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
                        <h2 className="font-work text-3xl font-bold text-white leading-tight ">Schreiben Sie uns!</h2>
                        <div className="w-full md:w-2/3">
                            <p className="mt-8 font-work text-lg mb-16">
                                Interesse an unserem System? <br></br> Schreiben Sie uns, wir melden uns umgehend!
                            </p>
                            <Form1></Form1>
                        </div>
                    </div>
                </div>
                {/* <div className="col-span-12 flex justify-center mb-36">
                    <a
                        className="text-white underline hover:text-primaryColor-800"
                        href="https://tree-donator.vercel.app"
                    >
                        Check out our DEMO
                    </a>
                </div> */}
            </div>
        </MainContainer>
    );
}
