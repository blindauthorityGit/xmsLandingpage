// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Keyboard, Autoplay, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SwiperComp = (props) => {
    const swiperRef = useRef(null);

    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    useEffect(() => {
        console.log(swiperRef.current.swiper);
    }, [swiperRef.current]);

    return (
        <div className="col-span-12 relative h-full">
            <div className="swiper-custom-navigation absolute h-full w-full z-50">
                <button
                    onClick={goPrev}
                    className="swiper-custom-prev-button text-3xl text-white absolute left-0 lg:left-[-2rem] top-1/2 transform -translate-y-1/2"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={goNext}
                    className="swiper-custom-next-button text-3xl text-white absolute right-0 lg:right-[-2rem] top-1/2 transform -translate-y-1/2"
                >
                    <FaChevronRight />
                </button>
            </div>

            <Swiper
                modules={[Pagination, A11y, Keyboard, Autoplay, Virtual]}
                spaceBetween={20}
                keyboard={true}
                fadeEffect={{ crossFade: true }}
                speed={225}
                pagination={{ clickable: true, dynamicBullets: true }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="!px-8 lg:px-0 !pb-12"
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                }}
            >
                {props.data.map((e, i) => (
                    <SwiperSlide key={`sliderKey${i}`} layoutId="hero">
                        <div>
                            <img src={e.src} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperComp;
