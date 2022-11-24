import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { blogArticles } from "../../assets/data";
import { BlogArticleHeader } from "../../components";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";

export default function Slider() {
    return (
        <Swiper
            tag="section"
            wrapperTag="section"
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={5}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        >
            {blogArticles.map((element) => (
                <SwiperSlide key={element.id} tag="article">
                    <BlogArticleHeader
                        cat={element.cat}
                        heading={element.heading}
                        date={element.date}
                        comments={element.comments}
                    />
                    <img src={`./img/${element.photo}`} alt="Blog" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
