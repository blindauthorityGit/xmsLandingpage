import { FaFacebook, FaInstagram } from "react-icons/fa";

const menuItems = [
    {
        title: "Worum geht es",
        titleEN: "What is it",
        slug: "#why",
        subMenu: false,
        subMenuItems: [
            {
                title: "Our Solition",
                slug: "about",
            },
            {
                title: "Frühlingsakademie 2023",
                slug: "sammlungen",
            },
            {
                title: "Sommerakademie 2023",
                slug: "https://cdn.sanity.io/files/7all625u/dev/5a6f73b99aceb4c681ca63eb1b1ac1f447064ae7.pdf",
                external: true,
            },
            {
                title: "Herbstakademie 2023",
                slug: "blog",
            },
        ],
    },
    {
        title: "wie funktioniert es",
        titleEN: "How does it work",

        slug: "#solution",
        subMenu: false,
    },

    {
        title: "beispiele",
        titleEN: "examples",

        slug: "#features",
        subMenu: false,
    },
];
const socialMedia = [
    {
        title: "Facebook",
        link: "https://www.facebook.com/profile.php?id=100086929332300",
        icon: <FaFacebook></FaFacebook>,
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/denisebaeckerin/",
        icon: <FaInstagram></FaInstagram>,
    },
];

export { menuItems, socialMedia };
