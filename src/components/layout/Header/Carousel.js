import Carousel from "react-bootstrap/Carousel";

function Slide() {
  return (
    <div>
      <Carousel className="container mt-5 pb-5 ">
        <Carousel.Item>
          <img
            className="d-block "
            src="https://picsum.photos/id/22/1600/500"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  "
            src="https://picsum.photos/id/178/1600/500"
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  "
            src="https://picsum.photos/id/319/1600/500"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="border-bottom  container w-25 "></div>
    </div>
  );
}

export default Slide;
