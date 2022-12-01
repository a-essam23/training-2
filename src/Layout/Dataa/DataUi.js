import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DataUi = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="d-flex justify-content-center mt-5 ">
            <div className="col-12 flex-column text-center ">
              <h5>{props.items.post}</h5>
              <h1>{props.items.Subject}</h1>
              <p>
                {props.items.Date}{" "}
                <a href="ls">
                  <i className="fa-solid fa-comments"></i>
                </a>
              </p>

              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <img
                    src={props.items.Img}
                    alt="ads"
                    style={{ width: "1000px", height: "500px" }}
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={props.items.Img1}
                    alt="ads"
                    style={{ width: "1000px", height: "500px" }}
                  ></img>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={props.items.Img2}
                    alt="ads"
                    style={{ width: "1000px", height: "500px" }}
                  ></img>
                </SwiperSlide>
              </Swiper>
              <p
                style={{ width: "1000px", marginLeft: "130px" }}
                className="pt-3"
              >
                {props.items.Article.slice(2600)}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" d-flex justify-content-center mx-5">
            <div className="col-8">
              <a href="ls" className="mx-1">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="ls" className="mx-1">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="ls" className="mx-1">
                <i className="fa-brands fa-reddit"></i>
              </a>
              <a href="ls" className="mx-1">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="ls" className="mx-1">
                <i className="fa-brands fa-staylinked"></i>
              </a>
            </div>
            <div className="col-2">
              <a href="ee" alt="ls">
                <button
                  style={{
                    border: "1px solid black",
                    color: "#DAA520",
                    height: "36px",
                    backgroundColor: "transparent",
                  }}
                  onClick={props.hand}
                >
                  continue Reading
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataUi;
