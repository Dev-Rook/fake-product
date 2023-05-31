import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useScrollUp from "../hooks/useScrollUp";
import { Swiper, SwiperSlide } from "swiper/react";

// Styles Import:
import styles from "../styles/comp-styles/productSlider.module.scss";

// Loaders Import:
import ScaleLoader from "react-spinners/ScaleLoader";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, FreeMode, Autoplay, Mousewheel } from "swiper";

const ProductSlider = () => {
  const url = `https://fakestoreapi.com/products/category/jewelery`;
  const { data, loading, error } = useAxios(url);
  const { scrollUp } = useScrollUp();

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className={styles.sliderContainer}>
      {loading ? (
        <ScaleLoader
          color={"red"}
          loading={loading}
          cssOverride={override}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Swiper
          speed={1000}
          spaceBetween={10}
          modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          loop
          pagination={{
            dynamicBullets: true,
          }}
          mousewheel={true}
          className={styles.swiper}
        >
          {data?.map((value) => {
            return (
              <SwiperSlide key={value.id}>
                <Link onClick={scrollUp} to={`/eproduct/` + value.id}>
                  <div className={styles.productCard}>
                    <p>{value.title}</p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default ProductSlider;
