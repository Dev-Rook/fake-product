import useAxios from "../hooks/useAxios";
import useScrollUp from "../hooks/useScrollUp";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles Import:
import styles from "../styles/comp-styles/productSlider.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const ProductSlider = () => {
  const url = ``;
  const { data, loading, error } = useAxios(url);
  const {scrollUp} = useScrollUp()

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((value, i) => {
          return (
            <SwiperSlide key={i}>
              <Link onClick={scrollUp} to={`/eproduct/` + value.id}>
                <div className={styles.productCard}></div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
