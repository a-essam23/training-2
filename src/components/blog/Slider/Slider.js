import { Pagination, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useBlogs } from "../../../context/BlogContext";
import BlogHeader from "../BlogHeader/BlogHeader";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Slider.module.css";

export default function Slider() {
  const {blogs} = useBlogs()
  return (
  <div className="min-h-screen gap-16 flex flex-col items-center w-3/3">
      <Swiper
        tag="section"
        wrapperTag="section"
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className={styles.tt}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {blogs.map((element, i) => (
          <SwiperSlide key={i} tag="article">
            <div className={`col-12 ${styles.bb}`}>
              <BlogHeader content={element} />
            </div>
            <img src={`${element.photo}`} alt="Blog" />
          </SwiperSlide>
        ))}
      </Swiper>
  </div>
  );
}
