import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// Hooks Import:
import useAxios from "../hooks/useAxios";
// import useScrollUp from "../hooks/useScrollUp";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/page-styles/product.module.scss";

// Redux:
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount
} from "../redux/reducers/counter";

// Components Import:
import ProductGrid from "../sections/ProductGrid";

const Product = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const url = `https://fakestoreapi.com/products/${id}`;
  // const {data} = useAxios(url)

  const getProductDetails = useCallback(async () => {
    try {
      const results = await axios.get(url);
      console.log(results);
      setDetails(results.data);
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  useEffect(() => {
    getProductDetails();
  }, [getProductDetails]);

  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="page">
      <div className={styles.productDisplay}>
        <div className={styles.imageContainer}>
          <img src={details.image} alt="" className={styles.img} />
        </div>

        <div className={styles.details}>
          <div className={styles.top}>
            <p className={styles.title}>{details.title}</p>
            <p className={styles.rating}>Rating - {details.rating?.rate}</p>
            <p className={styles.price}>${details.price}</p>
          </div>
          <p className={styles.descreption}>{details.description}</p>

        <div className={styles.actionBox}>
          <div className={styles.quantity}>
            <div className={styles.quantityBox}>
              {count}
            </div>
            <button onClick={() => dispatch(increment())}  className={styles.controls}>+</button>
            <button onClick={() => dispatch(decrement())} className={styles.controls}>-</button>
          </div>
          <button className={styles.addToCartButton}>
            ADD TO CART
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
