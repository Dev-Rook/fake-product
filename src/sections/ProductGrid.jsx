import { Link } from "react-router-dom";

// Hooks Import:
import useAxios from "../hooks/useAxios";
import useScrollUp from "../hooks/useScrollUp";

// Styles Import:
import "../styles/global.scss"
import styles from "../styles/sec-styles/productGrid.module.scss";

// Loaders Import:
import ScaleLoader from "react-spinners/ScaleLoader";

const ProductGrid = () => {
  const url = `https://fakestoreapi.com/products/category/electronics`;
  const { data, error, loading } = useAxios(url);
  const { scrollUp } = useScrollUp();

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="section">
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
        <>
          <div className={styles.Content_Container}>
            {data?.map((value) => {
              return (
                <div className={styles.Video_Card} key={value.id}>
                  <div className={styles.Image_Container}>
                    <img src={value.image} alt="" className={styles.Image} />
                  </div>

                  <div className={styles.TitleContainer}>
                    <p className={styles.Video_Title}>{value.title.slice(0, 30)}....</p>
                  </div>
                  <p className={styles.Description}>{value.description.slice(0, 90)}....</p>
                </div>
              );
            })}
          </div>
          {/* {data?.map((value) => {
            return (
              <Link
                onClick={scrollUp}
                to={`/product/` + value.id}
                key={value.id}
              >
                <p>{value.id}</p>
                <p>{value.title}</p>
              </Link>
            );
          })} */}
        </>
      )}
    </div>
  );
};

export default ProductGrid;
