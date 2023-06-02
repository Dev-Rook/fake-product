import { Link } from "react-router-dom";
import { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// Context Import:
import { UrlContext } from "../context/UrlContext";

// Hooks Import:
import useAxios from "../hooks/useAxios";
import useScrollUp from "../hooks/useScrollUp";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/productGrid.module.scss";

// Loaders Import:
import ScaleLoader from "react-spinners/ScaleLoader";

const Category = () => {
  const { category } = useContext(UrlContext);
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const url = `https://fakestoreapi.com/products/category/${id}`;
  const { scrollUp } = useScrollUp();

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

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div className="page">
      <div className="section">
        <div className={styles.productGrid}>
    <p className="">
      {id}
    </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
