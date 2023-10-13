// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, Autoplay, Virtual } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React from "react";

const SwiperComp = (props) => {
    return (
        <div className="col-span-12">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard, Autoplay, Virtual]}
                spaceBetween={20}
                keyboard={true}
                fadeEffect={{ crossFade: true }}
                speed={225}
                pagination={{ clickable: true, dynamicBullets: true }}
                // onSwiper={(swiper) => {
                //     console.log(swiper.params);
                //     {
                //         setSwiper(swiper);
                //     }
                // }}
                onSlideChange={() => console.log("slide change")}
                className={` h-full `}
                breakpoints={{
                    // Define breakpoints and the number of slides per view
                    768: {
                        slidesPerView: 1, // Example: 1 slide per view on screens less than 768px wide
                    },
                    992: {
                        slidesPerView: 3, // Example: 2 slides per view on screens at least 768px wide but less than 992px wide
                    },
                    1200: {
                        slidesPerView: 5, // Example: 3.25 slides per view on screens at least 992px wide but less than 1200px wide
                    },
                }}
            >
                {props.data.map((e, i) => {
                    return (
                        <>
                            <SwiperSlide
                                key={`sliderKey${i}`}
                                layoutId="hero"
                                // transition={{ duration: 0.5 }}
                                // className="bg-cover  bg-no-repeat relative h-full"
                            >
                                <div>
                                    <img src={e.src} alt="" />
                                </div>
                            </SwiperSlide>
                        </>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default SwiperComp;
