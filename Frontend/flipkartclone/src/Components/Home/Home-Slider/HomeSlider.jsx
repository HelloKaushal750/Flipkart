import "./HomeSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../../constant/data";

function HomeSlider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        swipeable={false}
        draggable={false}
        containerClass="carousel-container"
        slidesToSlide={1}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        responsive={responsive}
      >
        {bannerData.map((item, i) => {
          return (
            <img
              key={i}
              src={item.url}
              alt=""
              width={"100%"}
              height={"240px"}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default HomeSlider;
