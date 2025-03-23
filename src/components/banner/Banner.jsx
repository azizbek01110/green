import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://olcha.uz/image/original/sliders/ru/cdn_1/2024-05-27/k7X3JwefY7NM2SLThBllXJK0WwjZZiMX0TTJel9mUvksAhtLyNCF93MvgYpQ.jpg",
  "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-01-23/hTWifEsGQFrhhXzPZNiwigqNPf2LZcZbuzfagswU37ziuRaqbt9J2xXmR6fQ.png",
  "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-02-10/cSIwzbC9z3YZhzZeFcgmiUPpjJFKBxehzstSAIZcOqSyJr1P5TasMeqo6Mna.jpg",
];

const Banner = () => {
  return (
    <div className="banner-swiper">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Banner ${index + 1}`}
                className="banner-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
