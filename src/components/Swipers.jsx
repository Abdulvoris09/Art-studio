import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Swipers() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                    loop: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper mb-7 container"
            >
                <SwiperSlide><img src="./images/2-swiper1.jpg" alt="swiper image" /></SwiperSlide>
                <SwiperSlide><img src="./images/2-swiper1.jpg" alt="swiper image" /></SwiperSlide>
                <SwiperSlide><img src="./images/2-swiper1.jpg" alt="swiper image" /></SwiperSlide>
                <SwiperSlide><img src="./images/2-swiper1.jpg" alt="swiper image" /></SwiperSlide>
                <SwiperSlide><img src="./images/2-swiper1.jpg" alt="swiper image" /></SwiperSlide>
                <SwiperSlide><img src="./images/2-swiper1.jpg" alt="swiper image" /></SwiperSlide>
                <SwiperSlide><img src="./images/2-swiper1.jpg" alt="swiper image" /></SwiperSlide>
                <SwiperSlide><img src="./images/2-swiper1.jpg" alt="swiper image" /></SwiperSlide>
                <SwiperSlide><img src="./images/2-swiper1.jpg" alt="swiper image" /></SwiperSlide>
            </Swiper>
        </>
    );
}

export default Swipers