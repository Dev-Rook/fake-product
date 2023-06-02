import { Link } from "react-router-dom";

// Hooks Import:
import useAxios from "../hooks/useAxios";
import useScrollUp from "../hooks/useScrollUp";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/productGrid.module.scss";

// Loaders Import:
import ScaleLoader from "react-spinners/ScaleLoader";

// Material UI Import:
import StartIcon from "@mui/icons-material/Start";

const ProductGrid = ({ category, title }) => {
  const url = `https://fakestoreapi.com/products/category/${category}`;
  const { data, error, loading } = useAxios(url);
  const { scrollUp } = useScrollUp();

  // const [search, setSearch] = useState()

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="section">
      <p className={styles.gridTitle}>{title}</p>
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
        <div className={styles.productGrid}>
          {data?.slice(0, 3).map((value) => {
            return (
              <Link
                onClick={scrollUp}
                to={`/product/` + value.id}
                key={value.id}
              >
                <div className={styles.productCard}>
                  <div className={styles.imageContainer}>
                    <img src={value.image} alt="" className={styles.image} />
                  </div>
                  <div className={styles.productDetailsContainer}>
                    <p className={styles.title}>{value?.title.slice(0, 20)}</p>
                    <p className={styles.description}>{value?.description.slice(0, 100)}</p>
                    <p className={styles.price}>USD ${value?.price}</p>
                  </div>
                  <div className={styles.actionBox}>
                    <button className={styles.cart}>Add To Cart</button>
                    <button className={styles.buy}>More</button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      <div className={styles.CallToActionBox}>
        <Link to={`/${category}`} onClick={scrollUp}>
          <button className={styles.View_Button}>Vew All</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductGrid;
