import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  lazyLoad: true,
  arrows: false,
  cssEase: "linear",
};

const mobileSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  lazyLoad: true,
  arrows: false,
};

function CarouselImages({ img }) {
  return (
    <div className="max-w-7xl m-auto relative carousel__container">
      <Slider className="slider mb-20 hidden md:block" {...settings}>
        {img.mockup.map((i) => {
          return (
            <div className="slider__item" key={img.mockup.indexOf(i)}>
              <img src={i} />
            </div>
          );
        })}
      </Slider>
      <Slider className="slider mb-20 md:hidden" {...mobileSettings}>
        {img.mockup.map((i) => {
          return (
            <div className="slider__item" key={img.mockup.indexOf(i)}>
              <img src={i} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default CarouselImages;
