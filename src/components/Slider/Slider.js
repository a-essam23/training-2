import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper";
import { BlogArticleHeader } from "../../components";
import { blogArticles } from "../../assets/data";
import "swiper/css";
import "swiper/css/pagination";
import "./Slider.css";

export default function Slider({ kind }) {
    const initialSlidesPreview = () => {
        if (window.matchMedia("(min-width: 900px)").matches) return 5;
        else if (window.matchMedia("(min-width: 455px)").matches) return 4;
        else if (window.matchMedia("(min-width: 310px)").matches) return 3;
        else if (window.matchMedia("(max-width: 309px)").matches) return 2;
    };

    const [secondaryPreview, setSecondaryPreview] = useState();

    const media310Handler = (event) => {
        if (event.matches) setSecondaryPreview(3);
        else setSecondaryPreview(2);
    };

    const media455Handler = (event) => {
        if (event.matches) setSecondaryPreview(4);
        else setSecondaryPreview(3);
    };

    const media900Handler = (event) => {
        if (event.matches) setSecondaryPreview(5);
        else setSecondaryPreview(4);
    };

    useEffect(() => {
        window.matchMedia("(min-width: 310px)").addEventListener("change", media310Handler);
        window.matchMedia("(min-width: 455px)").addEventListener("change", media455Handler);
        window.matchMedia("(min-width: 900px)").addEventListener("change", media900Handler);
        return () => {
            window.matchMedia("(min-width: 310px)").removeEventListener("change", media310Handler);
            window.matchMedia("(min-width: 455px)").removeEventListener("change", media455Handler);
            window.matchMedia("(min-width: 900px)").removeEventListener("change", media900Handler);
        };
    }, []);

    return kind === "main" ? (
        <Swiper
            tag="section"
            wrapperTag="section"
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={5}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        >
            {blogArticles.map(({ genre, heading, date, comments, photo }) => (
                <SwiperSlide key={heading} tag="article">
                    <BlogArticleHeader
                        genre={genre}
                        heading={heading}
                        date={date}
                        comments={comments}
                    />

                    <img src={photo} alt="Article" />
                </SwiperSlide>
            ))}
        </Swiper>
    ) : (
        <Swiper
            tag="section"
            wrapperTag="section"
            modules={[A11y, Autoplay]}
            slidesPerView={secondaryPreview ? secondaryPreview : initialSlidesPreview()}
            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        >
            {blogArticles.map(({ genre, heading, photo }) => (
                <SwiperSlide key={heading} tag="article">
                    <Link to={`/Genre/${genre}/${heading.split(" ").join("_")}`}>
                        <img src={photo} alt="Article" />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
